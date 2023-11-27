'use client'
import NavBar from '@/components/navBar/navBar'
import './../globals.css'
import { NextResponse } from 'next/server';
import { checkAdmin, checkAuth } from '@/service/cookies';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { AuthContext } from '@/context/authcontext';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const {token, role, setToken, setRole} = useContext(AuthContext)
  function middleware() {
    console.log(role)
      if(!token) {
        router.push('/Login')
      }else if(role !== 'employee') {
        router.push('/home')
      }
      
      return NextResponse.next()
  }
  middleware()
  return (
    <>
        <NavBar/>
        {children}
    </>
  )
}