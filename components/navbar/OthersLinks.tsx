"use client"

import { ChevronRight, Minus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { cn } from "@/lib/utils"
import {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
      NavigationMenuTrigger2,
    } from "@/components/ui/navigation-menu"

const OthersLinks = () => {
  return (
    <>
      <NavigationMenu>
            <NavigationMenuList>
                  <NavigationMenuItem>
                        <NavigationMenuTrigger2 className='bg-transparent text-white'>
                              <div className='mr-2'>
                                    <Link href={'/evenement'} className='text-white text-[16px] font-semibold'>
                                          Evénement <hr className='w-[40px] mt-1 text-lg border-[1.5px]' />
                                    </Link>
                              </div>
                        </NavigationMenuTrigger2>
                        <NavigationMenuContent>
                              <ul className="w-[600px] p-8 grid grid-cols-3 gap-5">
                                    <div className='flex items-start gap-3'>
                                          <Minus className='text-slate-400' />
                                          <Link href={''} className='text-sm'>
                                          Convention d'entreprise
                                          <hr className='w-[25px] mt-1 text-lg border-[1.5px] border-black' />
                                          </Link>
                                    </div>
                                    <div className='flex items-start gap-3'>
                                          <Minus className='text-slate-400' />
                                          <Link href={''} className='text-sm'>
                                          Soirée d'entreprise
                                          <hr className='w-[25px] mt-1 text-lg border-[1.5px] border-black' />
                                          </Link>
                                    </div>
                                    <div className='flex items-start gap-3'>
                                          <Minus className='text-slate-400' />
                                          <Link href={''} className='text-sm'>
                                          Séminaire
                                          <hr className='w-[25px] mt-1 text-lg border-[1.5px] border-black' />
                                          </Link>
                                    </div>
                              </ul>
                        </NavigationMenuContent>
                  </NavigationMenuItem>
            </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
            <NavigationMenuList>
                  <NavigationMenuItem>
                        <NavigationMenuTrigger2 className='bg-transparent text-white'>
                              <div className='mr-2'>
                                    <Link href={'/scenographie'} className='text-white text-[16px] font-semibold'>
                                          Scénographie <hr className='w-[40px] mt-1 text-lg border-[1.5px]' />
                                    </Link>
                              </div>
                        </NavigationMenuTrigger2>
                        <NavigationMenuContent>
                              <ul className="w-[600px] p-8 grid grid-cols-3 gap-5">
                                    <div className='flex items-start gap-3'>
                                          <Minus className='text-slate-400' />
                                          <Link href={''} className='text-sm'>
                                          Sonorisation
                                          <hr className='w-[25px] mt-1 text-lg border-[1.5px] border-black' />
                                          </Link>
                                    </div>
                                    <div className='flex items-start gap-3'>
                                          <Minus className='text-slate-400' />
                                          <Link href={''} className='text-sm'>
                                          Eclairage
                                          <hr className='w-[25px] mt-1 text-lg border-[1.5px] border-black' />
                                          </Link>
                                    </div>
                                    <div className='flex items-start gap-3'>
                                          <Minus className='text-slate-400' />
                                          <Link href={''} className='text-sm'>
                                          Vidéo
                                          <hr className='w-[25px] mt-1 text-lg border-[1.5px] border-black' />
                                          </Link>
                                    </div>
                              </ul>
                        </NavigationMenuContent>
                  </NavigationMenuItem>
            </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
            <NavigationMenuList>
                  <NavigationMenuItem>
                        <NavigationMenuTrigger2 className='bg-transparent text-white'>
                              <div className='mr-2'>
                                    <Link href={'/communication'} className='text-white text-[16px] font-semibold'>
                                          Communication <hr className='w-[40px] mt-1 text-lg border-[1.5px]' />
                                    </Link>
                              </div>
                        </NavigationMenuTrigger2>
                        <NavigationMenuContent>
                              <ul className="w-[500px] xl:w-[600px] p-8 grid grid-cols-3 gap-2 xl:gap-5">
                                    <div className='flex items-start gap-3'>
                                          <Minus className='text-slate-400' />
                                          <Link href={''} className='text-sm'>
                                          Communication opérationnelle
                                          <hr className='w-[25px] mt-1 text-lg border-[1.5px] border-black' />
                                          </Link>
                                    </div>
                                    <div className='flex items-start gap-3'>
                                          <Minus className='text-slate-400' />
                                          <Link href={''} className='text-sm'>
                                          Communication événementielle
                                          <hr className='w-[25px] mt-1 text-lg border-[1.5px] border-black' />
                                          </Link>
                                    </div>
                                    <div className='flex items-start gap-3'>
                                          <Minus className='text-slate-400' />
                                          <Link href={''} className='text-sm'>
                                          Identité visuelle
                                          <hr className='w-[25px] mt-1 text-lg border-[1.5px] border-black' />
                                          </Link>
                                    </div>
                              </ul>
                        </NavigationMenuContent>
                  </NavigationMenuItem>
            </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
            <NavigationMenuList>
                  <NavigationMenuItem>
                        <div className='flex items-center gap-2'>
                              <Link href={''} className='text-white text-[16px] font-semibold'>
                                    Evénement virtuel <hr className='w-[40px] mt-1 text-lg border-[1.5px]' />
                              </Link>
                        </div>
                  </NavigationMenuItem>
            </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
            <NavigationMenuList>
                  <NavigationMenuItem>
                        <div className='flex items-center gap-2'>
                              <Link href={'/realisations'} className='text-white text-[16px] font-semibold'>
                                    Réalisations <hr className='w-[40px] mt-1 text-lg border-[1.5px]' />
                              </Link>
                        </div>
                  </NavigationMenuItem>
            </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
            <NavigationMenuList>
                  <NavigationMenuItem>
                        <div className='flex items-center gap-2'>
                              <Link href={'/devis'} className='text-white text-[16px] font-semibold'>
                                    Devis <hr className='w-[40px] mt-1 text-lg border-[1.5px]' />
                              </Link>
                        </div>
                  </NavigationMenuItem>
            </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

export default OthersLinks

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            `block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none 
            transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`,
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
