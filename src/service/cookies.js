
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

export const getCookies = () => {
    const cookieRol = cookies().get('rol')
    const cookie = cookies().get('Authorization')
    return {cookie, cookieRol}
}
export const deleteCookies = () => {
    cookies().delete('Authorization')
    cookies().delete('userId')
    cookies().delete('rol')
}

export const checkAuth = () => {
    const cookie = cookies().get('Authorization')
    if (cookie) {
        return true
    } else {
        return false
    }
}

export const checkAdmin = () => {
    const cookie = cookies().get('rol')
    if (cookie?.value === 'employee') {
        return true
    } else {
        return false
    }
}