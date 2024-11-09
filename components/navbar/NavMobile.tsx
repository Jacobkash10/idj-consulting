"use client"

import { RiCloseFill, RiMenu3Fill, RiMessage2Fill } from "react-icons/ri";
import React, { useState } from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMobile = () => {

      const [open, setOpen] = useState<Boolean>(false)

      const toggle = () => {
      setOpen(!open)
      }

      const pathName = usePathname()

      const links = [
            {
                  name: "Accueil",
                  path: "/"
            },
            {
                  name: "Agence",
                  path: "/agence"
            },
            {
                  name: "Témoignages",
                  path: "/temoignages"
            },
            {
                  name: "Contact",
                  path: "/contact"
            },
            {
                  name: "Conseil événement",
                  path: ""
            },
            {
                  name: "Blog",
                  path: ""
            },
            {
                  name: "Evénement",
                  path: "/evenement"
            },
            {
                  name: "Scénographie",
                  path: "/scenographie"
            },
            {
                  name: "Communication",
                  path: "/communication"
            },
            {
                  name: "Evénement virtuel",
                  path: ""
            },
            {
                  name: "Réalisations",
                  path: "/realisations"
            },
            {
                  name: "Devis",
                  path: "/devis"
            },
      ]

  return (
    <div className='lg:hidden block fixed top-0 left-0 right-0 z-50 bg-[#1c1b1b]'>
      <div className="flex items-center justify-between px-4 py-4">
            <button className='text-white'>
                  <div onClick={toggle}>
                        {
                              open ? <RiCloseFill color='white' className='text-3xl' /> : 
                              <RiMenu3Fill color='white' className='text-3xl' />
                        }
                        
                  </div>
            </button>
            <RiMessage2Fill className="text-white text-3xl" />
      </div>
      <div className={`absolute shadow-sm transition-all duration-500 
            ${open ? 'top-[3.8rem] bg-[#393737] min-h-fit left-0 bottom-0 right-0 z-50 transition-all duration-500 ease-in-out' 
            : 'left-[-800px]'}`}
      >
            <div className="flex flex-col items-start justify-start overflow-y-auto h-screen pb-4">
                  {links.map((link, index) => (
                        <Link
                        key={index} href={link.path} className={`${link.path === pathName && "text-white bg-[#222121]"}
                        font-light transition-all text-[18px] w-full border-b border-b-gray-500 text-white
                        `}>
                              <h5 className="px-4 py-3" onClick={toggle}>{link.name}</h5>
                        </Link>
                  ))}
            </div>
      </div>
    </div>
  )
}

export default NavMobile
