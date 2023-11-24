import { NextResponse } from 'next/server'

export function middleware(req) {
    const nextUrl = req.nextUrl
    if (nextUrl.pathname === '/dashboard') {
      if (req.cookies.Authentication && req.cookies.rol === 'customer') {
        return NextResponse.rewrite(new URL('/admin', req.url))
      } else if(req.cookies.Authentication){
        return NextResponse.rewrite(new URL('/home', req.url))
      }else{
        return NextResponse.rewrite(new URL('/', req.url))
      }
    }
  }