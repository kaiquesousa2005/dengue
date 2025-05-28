'use client'
import Link from 'next/link'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { auth } from '../firebase/config'
import FormInput from '../components/FormInput'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
      router.push('/') // redireciona para a tela inicial
    } catch (error) {
      console.error('Erro ao entrar:', error.message)
      setErrorMessage('Email ou senha incorretos. Tente novamente.')
    }
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-red-100 to-yellow-50 px-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-red-400">
          <h1 className="text-3xl font-extrabold text-center text-red-600">Entrar</h1>
          <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            <FormInput label="Senha" type="password" name="password" value={formData.password} onChange={handleChange} />
            <button
              type="submit"
              className="w-full px-4 py-3 text-white font-bold bg-red-600 hover:bg-red-700 rounded-xl transition"
            >
              Entrar
            </button>
          </form>

          {/* MENSAGEM DE ERRO */}
          {errorMessage && (
            <p className="text-red-600 text-center font-medium bg-red-100 border border-red-400 rounded p-2">
              {errorMessage}
            </p>
          )}

          <p className="text-sm text-center text-gray-600">
            Não tem conta?{' '}
            <Link href="/register" className="text-red-600 font-semibold hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
