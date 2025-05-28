'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Thermometer, Activity, Brain, Smile, Bug } from 'lucide-react'
import Link from 'next/link'
import { salvarVerificacao } from './firebase/firestore'
import { useAuth } from './firebase/hooks/useAuth'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [form, setForm] = useState({
    febre: false,
    dores: false,
    cabeca: false,
    vomito: false,
    manchas: false,
  })

  const [resultado, setResultado] = useState(null)
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Carregando...
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, checked } = e.target
    setForm({ ...form, [name]: checked })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const sintomas = Object.values(form).filter(Boolean).length
    const resultadoFinal = sintomas >= 3 ? 'provavel' : 'improvavel'
    setResultado(resultadoFinal)

    try {
      await salvarVerificacao(form)
      console.log('Dados salvos com sucesso.')
    } catch (error) {
      console.error('Erro ao salvar dados:', error)
    }
  }

  return (
    <>
      <Header />
      <motion.main
        className="min-h-screen bg-white px-6 py-12 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-black text-red-600 mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Verificador de Dengue
        </motion.h1>

        <motion.form onSubmit={handleSubmit} className="space-y-5">
          <AnimatedCheckbox
            label="Febre alta"
            icon={<Thermometer size={18} />}
            name="febre"
            checked={form.febre}
            onChange={handleChange}
          />
          <AnimatedCheckbox
            label="Dores no corpo"
            icon={<Activity size={18} />}
            name="dores"
            checked={form.dores}
            onChange={handleChange}
          />
          <AnimatedCheckbox
            label="Dor de cabeça"
            icon={<Brain size={18} />}
            name="cabeca"
            checked={form.cabeca}
            onChange={handleChange}
          />
          <AnimatedCheckbox
            label="Náusea ou vômito"
            icon={<Smile size={18} />}
            name="vomito"
            checked={form.vomito}
            onChange={handleChange}
          />
          <AnimatedCheckbox
            label="Manchas vermelhas"
            icon={<Bug size={18} />}
            name="manchas"
            checked={form.manchas}
            onChange={handleChange}
          />

          <motion.button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-md"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            Verificar
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {resultado && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mt-6 p-4 rounded-lg border text-sm transition-all duration-500 ease-in-out
                ${resultado === 'provavel'
                  ? 'bg-red-100 border-red-600 text-red-800'
                  : 'bg-green-100 border-green-600 text-green-800'}`}
            >
              {resultado === 'provavel' ? (
                <>
                  <p>
                    <strong>Possível caso de dengue.</strong> Recomendamos procurar um hospital.
                  </p>
                  <Link
                    href="https://www.google.com/maps/search/hospital+próximo/"
                    target="_blank"
                    className="mt-2 inline-block underline text-red-700 font-semibold"
                  >
                    Ver hospitais próximos
                  </Link>
                </>
              ) : (
                <p>Os sintomas não indicam dengue. Continue se cuidando e se hidratando bem!</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
      <Footer />
    </>
  )
}

function AnimatedCheckbox({ label, icon, name, checked, onChange }) {
  return (
    <motion.label
      className="flex items-center space-x-3 text-gray-800 font-medium bg-gray-100 p-3 rounded-xl hover:bg-gray-200 shadow-sm cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="accent-red-600 w-5 h-5"
      />
      <span className="flex items-center space-x-2">
        <span>{icon}</span>
        <span>{label}</span>
      </span>
    </motion.label>
  )
}
