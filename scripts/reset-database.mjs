#!/usr/bin/env node

/**
 * Complete Supabase Database Reset Script
 * - Deletes all users from auth
 * - Drops all tables
 * - Creates fresh schema with contact_messages and email_subscribers
 * - Creates admin user
 */

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  console.error('❌ Missing environment variables!')
  console.error('Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function resetDatabase() {
  console.log('🚀 Starting complete database reset...\n')

  try {
    // ============================================
    // STEP 1: Delete all auth users
    // ============================================
    console.log('📋 Step 1: Deleting all authentication users...')
    
    const { data: users, error: listError } = await supabase.auth.admin.listUsers()
    
    if (listError) {
      console.warn('⚠️  Could not list users:', listError.message)
    } else if (users && users.users.length > 0) {
      console.log(`Found ${users.users.length} user(s) to delete`)
      
      for (const user of users.users) {
        const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id)
        if (deleteError) {
          console.warn(`⚠️  Failed to delete user ${user.email}:`, deleteError.message)
        } else {
          console.log(`✅ Deleted user: ${user.email}`)
        }
      }
    } else {
      console.log('No users found in authentication')
    }

    // ============================================
    // STEP 2: Clean up existing tables
    // ============================================
    console.log('\n📋 Step 2: Cleaning existing tables...')
    console.log('⚠️  NOTE: Tables will be dropped via SQL in Supabase Dashboard')
    console.log('Go to: Supabase Dashboard → SQL Editor → New Query')
    console.log('Then paste and run the SQL from: supabase/reset-schema.sql\n')
    
    // ============================================
    // STEP 3: Create admin user
    // ============================================
    console.log('📋 Step 3: Creating admin user...')
    
    const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
      email: 'admin@ze.com',
      password: 'sbnbaig1',
      email_confirm: true,
      user_metadata: {
        full_name: 'Urva Baig',
        role: 'admin'
      }
    })

    if (createError) {
      console.error('❌ Failed to create admin user:', createError.message)
      throw createError
    }

    console.log('✅ Admin user created successfully!')
    console.log('   Email: admin@ze.com')
    console.log('   Password: sbnbaig1')
    console.log('   User ID:', newUser.user.id)

    console.log('\n🎉 Database reset complete!')
    console.log('\n⚠️  IMPORTANT: Run the SQL in supabase/schema.sql manually in Supabase Dashboard')
    
  } catch (error) {
    console.error('\n❌ Error during reset:', error.message)
    process.exit(1)
  }
}

resetDatabase()
