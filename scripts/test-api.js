#!/usr/bin/env node

/**
 * Test Supabase API Connection
 * Run: node scripts/test-api.js
 */

const SUPABASE_URL = 'https://xshslgftjzviikevjaix.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_rN5vQOtV2busicOEVwHIqQ_ZF6utRZK'

async function testAPI() {
  console.log('🧪 Testing Supabase API Connection...\n')

  // Test 1: Fetch Services
  console.log('1️⃣ Testing Services API...')
  try {
    const servicesRes = await fetch(`${SUPABASE_URL}/rest/v1/services?select=*`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    })
    const services = await servicesRes.json()
    console.log(`   ✅ Services: ${Array.isArray(services) ? services.length : 0} found`)
    if (services.length > 0) {
      console.log(`   📋 Sample: ${services[0].title}`)
    }
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}`)
  }

  // Test 2: Fetch Projects
  console.log('\n2️⃣ Testing Projects API...')
  try {
    const projectsRes = await fetch(`${SUPABASE_URL}/rest/v1/projects?select=*`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    })
    const projects = await projectsRes.json()
    console.log(`   ✅ Projects: ${Array.isArray(projects) ? projects.length : 0} found`)
    if (projects.length > 0) {
      console.log(`   📋 Sample: ${projects[0].title}`)
    }
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}`)
  }

  // Test 3: Submit Contact Message
  console.log('\n3️⃣ Testing Contact API (Insert)...')
  try {
    const contactRes = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '+92 300 1234567',
        subject: 'Test Message',
        message: 'This is a test message from API test script.',
      }),
    })
    const contact = await contactRes.json()
    if (contactRes.ok) {
      console.log(`   ✅ Contact message created successfully`)
      console.log(`   📋 ID: ${contact[0]?.id || 'Created'}`)
    } else {
      console.log(`   ⚠️ Response: ${JSON.stringify(contact)}`)
    }
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}`)
  }

  // Test 4: Check Admin User
  console.log('\n4️⃣ Testing Admin API...')
  try {
    const adminRes = await fetch(`${SUPABASE_URL}/rest/v1/admins?email=eq.admin@zainabengineering.com&select=id,email,name,is_active`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    })
    const admin = await adminRes.json()
    if (Array.isArray(admin) && admin.length > 0) {
      console.log(`   ✅ Admin user found: ${admin[0].email}`)
    } else {
      console.log(`   ⚠️ Admin user not found. Run the SQL schema first.`)
    }
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}`)
  }

  console.log('\n✨ API Tests Complete!\n')
  console.log('📝 Next Steps:')
  console.log('   1. Run the SQL schema in Supabase Dashboard -> SQL Editor')
  console.log('   2. File: scripts/schema.sql')
  console.log('   3. Then run this test again to verify')
}

testAPI()
