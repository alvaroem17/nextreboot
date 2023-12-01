'use client'
import NavBar from '@/components/navBar/navBar'
import './../globals.css'
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const router = useRouter();
  function middleware() {
      if(!localStorage.getItem('token')) {
        router.push('/Login')
      }else if(localStorage.getItem('rol') !== 'employee') {
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