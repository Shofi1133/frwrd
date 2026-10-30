import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { supabase } from '../lib/supabase'

export function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    setError('')
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
    if (signInError) setError('Email atau kata sandi tidak benar. Silakan coba lagi.')
    else window.location.href = '/admin/produk'
    setLoading(false)
  }

  return <main className="admin-login-page"><div className="admin-login-card">
    <a className="wordmark" href="/">FRWRD<span className="wordmark-period">.</span></a>
    <p className="admin-eyebrow">AREA ADMIN</p><h1>Masuk ke dashboard.</h1>
    <p className="admin-muted">Kelola katalog produk FRWRD dari satu tempat.</p>
    <form onSubmit={handleSubmit} className="admin-form">
      <label>Email<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label>
      <label>Kata sandi<input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} /></label>
      {error && <p className="admin-error" role="alert">{error}</p>}
      <button className="admin-primary-button" disabled={loading}>{loading ? 'Memeriksa...' : 'Masuk'} {!loading && <ArrowUpRight size={16} />}</button>
    </form>
  </div></main>
}
