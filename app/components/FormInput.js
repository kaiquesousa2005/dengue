'use client'

import { useState } from 'react'

export default function FormInput({ label, type = 'text', name, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(!!value)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e) => {
    setIsFocused(false)
    setHasValue(!!e.target.value)
  }

  return (
    <div className="relative w-full mb-8">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="peer w-full px-5 pt-6 pb-2 text-base font-semibold text-gray-900 bg-gray-100 border-2 border-gray-700 rounded-xl shadow-lg focus:border-red-600 focus:ring-4 focus:ring-red-500/50 focus:outline-none transition-all placeholder-transparent"
        placeholder={label}
        autoComplete="off"
      />
      <label
        htmlFor={name}
        className={`
          absolute left-5 top-3 bg-gray-100 px-1 text-base font-bold text-gray-700 transition-all pointer-events-none
          ${isFocused || hasValue ? 'text-xs -top-2.5 text-red-600' : 'text-base top-5'}
          peer-focus:text-xs peer-focus:-top-2.5 peer-focus:text-red-600
        `}
      >
        {label}
      </label>
    </div>
  )
}
