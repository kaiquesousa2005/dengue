'use client'
import Link from 'next/link'
import FormInput from '../components/FormInput'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

export default function Register() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      console.log('Usuário criado:', userCredential.user)
      setSuccessMessage('🎉 Conta criada com sucesso! Você já pode fazer login.')
      setFormData({ email: '', password: '' }) // limpa os campos
    } catch (error) {
      console.error('Erro ao criar conta:', error.message)
      setErrorMessage('Erro ao criar conta. Verifique os dados e tente novamente.')
    }
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-yellow-100 to-red-50 px-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-yellow-500">
          <h1 className="text-3xl font-extrabold text-center text-yellow-600">Cadastrar</h1>
          <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            <FormInput label="Senha" type="password" name="password" value={formData.password} onChange={handleChange} />
            <button
              type="submit"
              className="w-full px-4 py-3 text-white font-bold bg-yellow-600 hover:bg-yellow-700 rounded-xl transition"
            >
              Criar Conta
            </button>
          </form>

          {/* MENSAGEM DE SUCESSO */}
          {successMessage && (
            <p className="text-green-600 text-center font-medium bg-green-100 border border-green-400 rounded p-2">
              {successMessage}
            </p>
          )}

          {/* MENSAGEM DE ERRO */}
          {errorMessage && (
            <p className="text-red-600 text-center font-medium bg-red-100 border border-red-400 rounded p-2">
              {errorMessage}
            </p>
          )}

          <p className="text-sm text-center text-gray-600">
            Já tem conta?{' '}
            <Link href="/login" className="text-yellow-600 font-semibold hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
