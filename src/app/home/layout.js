'use client'
import NavBar from '@/components/navBar/navBar'
import './../globals.css'
import Footer from '@/components/footer/footer'
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { AuthContext } from '@/context/authcontext';
import { NextResponse } from 'next/server';

export default function HomeLayout({ children }) {
  const router = useRouter();
  const {token} = useContext(AuthContext)
  function middleware() {
      if(!token) {
        router.push('/Login')
      }
      return NextResponse.next()
  }
  middleware()
  return (
    <>
        <NavBar/>
        {children}
        <Footer/>
    </>
  )
}