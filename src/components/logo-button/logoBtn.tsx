"use client"
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/icon.png"

const LogoBtn = () => {
  return (
   <Link href={"/"}>
    <Image src={logo} alt="back to home logo"  width={110} height={50}/>
   </Link>
  )
}

export default LogoBtn