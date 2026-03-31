'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Login failed')
        return
      }

      localStorage.setItem('adminToken', data.token)
      localStorage.setItem('adminUser', JSON.stringify(data.user))
      
      router.push('/admin/dashboard')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface kinetic-grid-bg">
      <div className="max-w-md w-full mx-4">
        <div className="bg-surface-container-lowest rounded-3xl shadow-2xl p-10 border border-outline-variant/10">
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary-container/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">admin_panel_settings</span>
            </div>
            <h1 className="text-3xl font-headline font-bold text-on-surface tracking-tight">
              Admin Portal
            </h1>
            <p className="text-on-surface-variant mt-2 font-headline">
              Zainab Engineering Control Center
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-error-container/20 border border-error/30 text-error rounded-xl text-sm flex items-center gap-3">
              <span className="material-symbols-outlined">error</span>
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder=" "
                className="glass-input block w-full px-4 pt-6 pb-2 text-on-surface border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 peer rounded-t-lg transition-all"
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-outline duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container"
              >
                Email Address
              </label>
            </div>

            <div className="relative group">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder=" "
                className="glass-input block w-full px-4 pt-6 pb-2 text-on-surface border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 peer rounded-t-lg transition-all"
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-outline duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">sync</span>
                  Authenticating...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">login</span>
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-container transition-colors font-headline"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Website
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 p-4 bg-secondary-fixed/30 rounded-xl border border-secondary-fixed-dim/20 text-center">
          <p className="text-sm text-on-secondary-fixed-variant font-headline">
            <span className="material-symbols-outlined text-sm align-middle mr-1">info</span>
            Use your admin credentials to access the dashboard
          </p>
        </div>
      </div>
    </div>
  )
}
