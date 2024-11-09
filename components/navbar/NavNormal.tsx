"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import image1 from '@/public/images/logo1.png'
import {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
      navigationMenuTriggerStyle,
    } from "@/components/ui/navigation-menu"
import OthersLinks from './OthersLinks';

    const components: { title: string; href: string; description: string }[] = [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
    ]

const NavNormal = () => {

      const links = [
            {
                  name: "Accueil",
                  path: "/"
            },
            {
                  name: "Agence",
                  path: ""
            },
            {
                  name: "Témoignages",
                  path: "/temoignages"
            },
            {
                  name: "Devis",
                  path: "/devis"
            },
            {
                  name: "Contact",
                  path: "/contact"
            },
      ]

      const evenLinks = [
            {
                  name: "Guide événement",
                  path: ""
            },
            {
                  name: "Anniversaire entreprise",
                  path: ""
            },
            {
                  name: "Conseil pour soirées entreprise",
                  path: ""
            },
            {
                  name: "Thèmes soirées entreprise",
                  path: ""
            },
            {
                  name: "Conseil remise de prix",
                  path: ""
            },
      ]

      const blogLinks = [
            {
                  name: "Evénementiel",
                  path: ""
            },
            {
                  name: "Communication",
                  path: ""
            },
            {
                  name: "Nouveautés / coup des coeur",
                  path: ""
            },
            {
                  name: "Actus",
                  path: ""
            },
      ]

      const pathName = usePathname()

  return (
    <div className=''>
      <div className='hidden lg:block'>
            <div className='flex items-center justify-between py-[6px] border-b-[.5px] border-b-[#beb6b662]'>
                  <div className='flex items-center gap-6 text-[14px] text-white'>
                        {
                              links.map((link, index) => (
                                    <Link href={link.path} key={index} className={`${link.path === pathName && "text-yellow-400"}
                                    capitalize font-light hover:text-yellow-400 transition-all duration-300`}>
                                          <h5>{link.name}</h5>
                                    </Link>
                              ))
                        }
                        <NavigationMenu>
                              <NavigationMenuList>
                                    <NavigationMenuItem>
                                    <NavigationMenuTrigger className='border border-yellow-500 bg-[#ba6d3d97] py-[7px] px-[9px]'>
                                          <Link href={''}>
                                                <h5 className='text-[13px] font-light text-white'>Conseil événement</h5>
                                          </Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                                <ul className="w-[300px] p-4">
                                                      {
                                                            evenLinks.map((item, index) => (
                                                            <li key={index} className='mb-2 text-red-500'>
                                                                  <Link href={item.path}>{item.name}</Link>
                                                            </li>
                                                            ))
                                                      }
                                                </ul>
                                    </NavigationMenuContent>
                                    </NavigationMenuItem>
                              </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                              <NavigationMenuList>
                                    <NavigationMenuItem>
                                    <NavigationMenuTrigger className='border border-blue-500 bg-[#ffffff2a] py-[7px] px-[9px]'>
                                          <Link href={''}>
                                                <h5 className='text-[13px] font-light text-white'>Blog</h5>
                                          </Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                                <ul className="w-[250px] p-4 ">
                                                {
                                                            blogLinks.map((item, index) => (
                                                            <li key={index} className='mb-2'>
                                                                  <Link href={item.path}>{item.name}</Link>
                                                            </li>
                                                            ))
                                                      }
                                                </ul>
                                    </NavigationMenuContent>
                                    </NavigationMenuItem>
                              </NavigationMenuList>
                        </NavigationMenu>
                  </div>
                  <div className='text-white'>
                        +243 81 765 798 3
                  </div>
            </div>
            <div className='flex items-center gap-8 py-2 relative'>
                  <div className='hidden md:block md:w-[10%] lg:w-[12%]'>
                        <Link className='text-white text-xs' href={'/'}>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                              className='w-full' />
                              {/* Agence de <br /><span className='text-blue-400'>communication</span> et événementiel */}
                        </Link>
                  </div>
                  <div className='flex items-center lg:gap-4 xl:gap-16'>
                        <OthersLinks />
                  </div>
            </div>
      </div>
    </div>
  )
}

export default NavNormal