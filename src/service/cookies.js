
'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function createCookie(token, user, rol) {
    cookies().set('Authorization', token)
    cookies().set('userId', user)
    cookies().set('rol', rol)
    if(rol === "customer"){
        redirect('/home')
    }else if(rol === 'employee'){
        redirect('/admin')
    }
  }