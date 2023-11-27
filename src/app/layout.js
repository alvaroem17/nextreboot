'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthContext } from '@/context/authcontext'
import { useState, useContext } from 'react'
import { getCookies } from '@/service/cookies'

const inter = Inter({ subsets: ['latin'] })
/* 
export const metadata = {
  title: 'Ylenia Estévez Nails',
  description: 'App de reservas -> Ylenia Estévez Nails',
} */

export default function RootLayout({ children }) {
  const [token, setToken] = useState()
  const [role, setRole] = useState()
  const ContextObject = {token, role, setToken, setRole}

  return (
    <AuthContext.Provider value={ContextObject}>
      <html lang="es">
        <head><title>Ylenia Estévez Nails</title></head>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </AuthContext.Provider>
  )
}
