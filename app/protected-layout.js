// app/protected-layout.js
'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from './firebase/hooks/useAuth'
import { useEffect } from 'react'

export default function ProtectedLayout({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return <div className="text-center mt-10">Carregando...</div>
  }

  return user ? children : null
}
