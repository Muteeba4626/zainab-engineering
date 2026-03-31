import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// POST - Submit contact message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { full_name, email, phone, message } = body

    if (!full_name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('contact_messages')
      .insert([{ full_name, email, phone, message }])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been sent successfully!',
      data 
    })
  } catch (error) {
    console.error('Error submitting contact:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

// GET - Get all contact messages (admin only)
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}
