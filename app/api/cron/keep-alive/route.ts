import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// This cron job runs every 3 days to keep Supabase active
// Prevents Supabase free tier from pausing after 1 week of inactivity

export async function GET(request: Request) {
  try {
    // Ping 1: Fetch services count
    const { count: servicesCount, error: servicesError } = await supabase
      .from('services')
      .select('*', { count: 'exact', head: true })
    
    if (servicesError) throw servicesError

    // Ping 2: Fetch projects count
    const { count: projectsCount, error: projectsError } = await supabase
      .from('projects')
      .select('*', { count: 'exact', head: true })
    
    if (projectsError) throw projectsError

    // Ping 3: Fetch admins count
    const { count: adminsCount, error: adminsError } = await supabase
      .from('admins')
      .select('*', { count: 'exact', head: true })
    
    if (adminsError) throw adminsError

    const timestamp = new Date().toISOString()
    
    console.log(`[CRON] Supabase keep-alive ping successful at ${timestamp}`)
    console.log(`[CRON] Services: ${servicesCount}, Projects: ${projectsCount}, Admins: ${adminsCount}`)

    return NextResponse.json({
      success: true,
      message: 'Supabase keep-alive ping successful',
      timestamp,
      stats: {
        services: servicesCount,
        projects: projectsCount,
        admins: adminsCount
      }
    })

  } catch (error: any) {
    console.error('[CRON] Supabase keep-alive ping failed:', error.message)
    
    return NextResponse.json({
      success: false,
      message: 'Supabase keep-alive ping failed',
      error: error.message
    }, { status: 500 })
  }
}
