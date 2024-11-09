"use client"

import React from 'react'
import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from "@/components/ui/carousel"
import {
      Avatar,
      AvatarFallback,
      AvatarImage,
    } from "@/components/ui/avatar"
import { FaStar } from 'react-icons/fa'

const Avis = () => {
  return (
      <div className='px-20 pt-10 pb-10 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <div className='flex flex-col items-center justify-center'>
                  <h2 className='text-2xl md:text-[34px] lg:text-[44px] font-light'>
                  Les derniers <span className='text-slate-400 text-lg md:text-2xl'>avis</span>
                  </h2>
                  <hr className='w-[60px] mt-3 text-lg border-[1.5px] border-black' />
            </div>
            <div className='mt-14'>
                  <Carousel
                        opts={{
                        align: "start",
                        }}
                        className="w-full"
                  >
                        <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                              <div className="bg-slate-200">
                                    <div className='p-5'>
                                          <div className='flex items-start gap-3'>
                                                <div>
                                                      <Avatar>
                                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                      </Avatar>
                                                </div>
                                                <div>
                                                      <h5 className='text-sm'>Laurent</h5>
                                                      <div className='flex items-center gap-5 mt-5'>
                                                            <div className='p-1 flex items-center gap-1 bg-[#faf5f5]'>
                                                            <FaStar size={10} className='text-yellow-700' />
                                                            <FaStar size={10} className='text-yellow-700' />
                                                            <FaStar size={10} className='text-yellow-700' />
                                                            <FaStar size={10} className='text-yellow-700' />
                                                            <FaStar size={10} className='text-yellow-700' />
                                                            </div>
                                                            <h5 className='text-[11px]'>05-11-2024</h5>
                                                      </div>
                                                </div>
                                          </div>
                                          <p className='text-xs font-light mt-2'>
                                          beaucoup apprécié la collaboration avec l'agence dans le cadre de l’organisation de la Rencontre Mondiale FLAM. Leur professionnalisme, leur créativité et leur réactivité ont grandement contribué à la réussite de cet événement.
                                          </p>
                                    </div>
                              </div>
                        </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                  </Carousel>
            </div>
      </div>
  )
}

export default Avis
