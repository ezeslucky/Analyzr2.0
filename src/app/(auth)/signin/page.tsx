"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <div className=' relative flex flex-col justify-center items-center gap-3 bg-[#101010] w-full h-screen'>
        <nav className=' top-0 left-0 fixed flex justify-center items-stretch p-6 w-full'>
            <Link href="/" className=' flex items-center gap-2' >
            <Image src="/logo.svg" width={28} height={28} alt='logo' />
            <span className=' bg-clip-text bg-gradient-to-r from-white to-neutral-500 font-medium text-transparent text-xl'>
                Analyzr
            </span>
            </Link>
<h1 className=' text-gray-400'>
    Please signIn mto continue
</h1>

<form action={ async ()=> {
    await 
}}>

</form>
        </nav>
      
    </div>
  )
}

export default LoginPage
