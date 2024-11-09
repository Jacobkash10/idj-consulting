import React from 'react'
import Action from './Action'

const Agence = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[100px] pb-10 relative xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <Action />
            <div className='flex flex-col items-center justify-center mt-[100px]'>
                  <h2 className='text-2xl md:text-[46px] font-light'>
                        Agence d’événementiel
                  </h2>
                  <hr className='w-[40px] mt-5 text-lg border-[1.5px] border-slate-300' />
                  <p className='text-center max-w-5xl mt-10 font-light text-[16px]'>
                        Convaincus que l’événement est une variable stratégique pour l’entreprise, nos événements ne se limitent pas à rassembler des participants dans un lieu exceptionnel afin de leur faire passer un moment festif et divertissant. Notre ambition est de construire des expériences de marque inoubliables autour de chaque événement qui vont impacter positivement les stratégies de marque et générer une connexion émotionnelle entre la marque et ses cibles.
                  </p>
            </div>
      </div>
  )
}

export default Agence
