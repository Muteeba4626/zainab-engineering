'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface AdminUser {
  id: string
  email: string
  name: string
}

interface ContactMessage {
  id: string
  full_name: string
  email: string
  phone: string | null
  message: string
  created_at: string
}

interface EmailSubscriber {
  id: number
  email: string
  created_at: string
}

type TabType = 'contacts' | 'subscribers'

export default function AdminDashboard() {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [contacts, setContacts] = useState<ContactMessage[]>([])
  const [subscribers, setSubscribers] = useState<EmailSubscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<TabType>('contacts')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    const userData = localStorage.getItem('adminUser')

    if (!token || !userData) {
      router.push('/admin/login')
      return
    }

    setUser(JSON.parse(userData))
    fetchData()
  }, [router])

  const fetchData = async () => {
    try {
      const [contactsRes, subscribersRes] = await Promise.all([
        fetch('/api/contact'),
        fetch('/api/subscribers'),
      ])

      const [contactsData, subscribersData] = await Promise.all([
        contactsRes.json(),
        subscribersRes.json(),
      ])

      setContacts(contactsData.data || [])
      setSubscribers(subscribersData.data || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUser')
    router.push('/admin/login')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 40, height: 40, margin: '0 auto 12px', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, border: '3px solid rgba(0,80,203,0.2)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', inset: 0, border: '3px solid transparent', borderTopColor: '#0050cb', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          </div>
          <p style={{ color: '#64748b', fontSize: 14 }}>Loading...</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex' }}>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 40,
            display: 'block',
          }}
          className="lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: 240,
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 50,
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
        }}
        className="lg:!transform-none"
      >
        {/* Logo */}
        <div style={{ height: 64, padding: '0 20px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, backgroundColor: '#0050cb', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: 16, height: 16, color: '#ffffff' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
              </svg>
            </div>
            <span style={{ fontWeight: 600, color: '#1e293b', fontSize: 15 }}>ZE Admin</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
            style={{ marginLeft: 'auto', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            <svg style={{ width: 20, height: 20, color: '#64748b' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, paddingTop: 16 }}>
          <div style={{ padding: '0 12px', marginBottom: 8 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', paddingLeft: 8 }}>Menu</span>
          </div>
          
          <button
            onClick={() => { setActiveTab('contacts'); setSidebarOpen(false); }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 20px',
              textAlign: 'left',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              backgroundColor: activeTab === 'contacts' ? 'rgba(0,80,203,0.05)' : 'transparent',
              color: activeTab === 'contacts' ? '#0050cb' : '#475569',
              transition: 'all 0.2s',
            }}
          >
            {activeTab === 'contacts' && (
              <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 3, height: 24, backgroundColor: '#0050cb', borderRadius: '0 4px 4px 0' }}></div>
            )}
            <svg style={{ width: 18, height: 18 }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>
            <span style={{ fontSize: 13, fontWeight: 500 }}>Contact Messages</span>
            <span style={{ 
              marginLeft: 'auto', 
              fontSize: 11, 
              fontWeight: 600, 
              padding: '2px 6px', 
              borderRadius: 4,
              backgroundColor: activeTab === 'contacts' ? 'rgba(0,80,203,0.1)' : '#f1f5f9',
              color: activeTab === 'contacts' ? '#0050cb' : '#64748b',
            }}>
              {contacts.length}
            </span>
          </button>

          <button
            onClick={() => { setActiveTab('subscribers'); setSidebarOpen(false); }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 20px',
              textAlign: 'left',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              backgroundColor: activeTab === 'subscribers' ? 'rgba(0,80,203,0.05)' : 'transparent',
              color: activeTab === 'subscribers' ? '#0050cb' : '#475569',
              transition: 'all 0.2s',
            }}
          >
            {activeTab === 'subscribers' && (
              <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 3, height: 24, backgroundColor: '#0050cb', borderRadius: '0 4px 4px 0' }}></div>
            )}
            <svg style={{ width: 18, height: 18 }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
            </svg>
            <span style={{ fontSize: 13, fontWeight: 500 }}>Subscribers</span>
            <span style={{ 
              marginLeft: 'auto', 
              fontSize: 11, 
              fontWeight: 600, 
              padding: '2px 6px', 
              borderRadius: 4,
              backgroundColor: activeTab === 'subscribers' ? 'rgba(0,80,203,0.1)' : '#f1f5f9',
              color: activeTab === 'subscribers' ? '#0050cb' : '#64748b',
            }}>
              {subscribers.length}
            </span>
          </button>
        </nav>

        {/* User */}
        <div style={{ padding: 16, borderTop: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #0050cb, rgba(0,80,203,0.7))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 600 }}>
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: '#1e293b', fontSize: 13, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', margin: 0 }}>{user?.email}</p>
              <p style={{ color: '#94a3b8', fontSize: 11, margin: 0 }}>Administrator</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            style={{ 
              width: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 8, 
              padding: '8px 12px', 
              color: '#64748b', 
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: 13,
              backgroundColor: 'transparent',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#fef2f2'; e.currentTarget.style.color = '#dc2626'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#64748b'; }}
          >
            <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
            </svg>
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, marginLeft: 0 }} className="lg:!ml-[240px]">
        {/* Header */}
        <header style={{ 
          height: 64, 
          backgroundColor: '#ffffff', 
          borderBottom: '1px solid #e2e8f0', 
          padding: '0 16px',
          display: 'flex', 
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 30,
        }} className="lg:!px-8">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
            style={{ 
              width: 36, 
              height: 36, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: 8, 
              marginRight: 12,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            <svg style={{ width: 20, height: 20, color: '#475569' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <div>
            <h1 style={{ color: '#1e293b', fontWeight: 600, fontSize: 17, margin: 0 }}>
              {activeTab === 'contacts' ? 'Contact Messages' : 'Email Subscribers'}
            </h1>
            <p style={{ color: '#94a3b8', fontSize: 12, margin: 0 }}>
              {activeTab === 'contacts' 
                ? `${contacts.length} message${contacts.length !== 1 ? 's' : ''}`
                : `${subscribers.length} subscriber${subscribers.length !== 1 ? 's' : ''}`
              }
            </p>
          </div>
        </header>

        {/* Table Content */}
        <div style={{ padding: 16 }} className="lg:!p-6">
          <div style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: 12, 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
          }}>
            {activeTab === 'contacts' && (
              <>
                {contacts.length === 0 ? (
                  <div style={{ padding: '48px 16px', textAlign: 'center' }}>
                    <div style={{ width: 48, height: 48, backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                      <svg style={{ width: 24, height: 24, color: '#94a3b8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                      </svg>
                    </div>
                    <p style={{ color: '#475569', fontSize: 14, fontWeight: 500, margin: 0 }}>No messages yet</p>
                    <p style={{ color: '#94a3b8', fontSize: 12, marginTop: 4 }}>Messages will appear here</p>
                  </div>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', minWidth: 600, borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>#</th>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</th>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</th>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</th>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</th>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.map((contact, index) => (
                          <tr key={contact.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '14px 16px' }}>
                              <span style={{ color: '#94a3b8', fontSize: 13 }}>{index + 1}</span>
                            </td>
                            <td style={{ padding: '14px 16px' }}>
                              <span style={{ color: '#1e293b', fontSize: 13, fontWeight: 500 }}>{contact.full_name}</span>
                            </td>
                            <td style={{ padding: '14px 16px' }}>
                              <a href={`mailto:${contact.email}`} style={{ color: '#0050cb', fontSize: 13, textDecoration: 'none' }}>{contact.email}</a>
                            </td>
                            <td style={{ padding: '14px 16px' }}>
                              <span style={{ color: '#64748b', fontSize: 13 }}>{contact.phone || '—'}</span>
                            </td>
                            <td style={{ padding: '14px 16px', maxWidth: 200 }}>
                              <p style={{ color: '#475569', fontSize: 13, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={contact.message}>{contact.message}</p>
                            </td>
                            <td style={{ padding: '14px 16px' }}>
                              <span style={{ color: '#94a3b8', fontSize: 12 }}>{formatDate(contact.created_at)}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}

            {activeTab === 'subscribers' && (
              <>
                {subscribers.length === 0 ? (
                  <div style={{ padding: '48px 16px', textAlign: 'center' }}>
                    <div style={{ width: 48, height: 48, backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                      <svg style={{ width: 24, height: 24, color: '#94a3b8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                      </svg>
                    </div>
                    <p style={{ color: '#475569', fontSize: 14, fontWeight: 500, margin: 0 }}>No subscribers yet</p>
                    <p style={{ color: '#94a3b8', fontSize: 12, marginTop: 4 }}>Subscribers will appear here</p>
                  </div>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', minWidth: 400, borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>#</th>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</th>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subscribed On</th>
                          <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscribers.map((subscriber, index) => (
                          <tr key={subscriber.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '14px 16px' }}>
                              <span style={{ color: '#94a3b8', fontSize: 13 }}>{index + 1}</span>
                            </td>
                            <td style={{ padding: '14px 16px' }}>
                              <a href={`mailto:${subscriber.email}`} style={{ color: '#0050cb', fontSize: 13, textDecoration: 'none' }}>{subscriber.email}</a>
                            </td>
                            <td style={{ padding: '14px 16px' }}>
                              <span style={{ color: '#94a3b8', fontSize: 12 }}>{formatDate(subscriber.created_at)}</span>
                            </td>
                            <td style={{ padding: '14px 16px' }}>
                              <span style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: 4, 
                                padding: '2px 8px', 
                                backgroundColor: '#ecfdf5', 
                                color: '#059669', 
                                borderRadius: 4, 
                                fontSize: 11, 
                                fontWeight: 500 
                              }}>
                                <span style={{ width: 6, height: 6, backgroundColor: '#10b981', borderRadius: '50%' }}></span>
                                Active
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 1024px) {
          .lg\\:hidden { display: none !important; }
          .lg\\:\\!transform-none { transform: none !important; }
          .lg\\:\\!ml-\\[240px\\] { margin-left: 240px !important; }
          .lg\\:\\!px-8 { padding-left: 32px !important; padding-right: 32px !important; }
          .lg\\:\\!p-6 { padding: 24px !important; }
        }
      `}</style>
    </div>
  )
}
