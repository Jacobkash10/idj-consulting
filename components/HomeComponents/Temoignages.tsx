"use client"

import React from 'react'
import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from "@/components/ui/carousel"

const Temoignages = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[100px] pb-10'>
            <div className='flex flex-col items-center justify-center'>
                  <h2 className='text-2xl md:text-[34px] lg:text-[44px] font-light'>
                        Témoignages
                  </h2>
                  <hr className='w-[60px] mt-3 text-lg border-[1.5px] border-black' />
                  <p className='text-center mt-3 font-medium text-sm md:text-[15.5px]'>
                  Découvrez leurs témoignages après leur expérience avec <span className='text-slate-300 text-xl md:text-2xl'>IDJ Consulting</span>
                  </p>
            </div>
            <div className='mt-10'>
                  <Carousel
                        opts={{
                        align: "start",
                        }}
                        className="w-full"
                  >
                        <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                              <div className="bg-[#1f1c1c]">
                                    <div className='p-5'>
                                          <h5 className='text-white text-xs sm:text-[14.2px]'>
                                                "Nous apprécions particulièrement leur écoute, leur adaptabilité, 
                                                leur réactivité, leur capacité à respecter les"
                                          </h5>
                                          <div className='mt-48'>
                                                <h5 className='text-white text-xs sm:text-[14.5px]'>Sarah Ama</h5>
                                                <h5 className='text-slate-400 text-xs sm:text-[14.5px]'>Responsable communication</h5>
                                                <h5 className='text-white text-xs sm:text-[14.5px]'>Industrie</h5>
                                          </div>
                                    </div>
                              </div>
                        </CarouselItem>
                        ))}
                        </CarouselContent>
                        <div className='hidden lg:block'>
                              <CarouselPrevious />
                              <CarouselNext />
                        </div>
                  </Carousel>
            </div>
      </div>
  )
}

export default Temoignages
