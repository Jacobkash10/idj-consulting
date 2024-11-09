"use client"

import React from 'react'

const Demande = () => {
  return (
    <div className='px-5 md:px-10 lg:px-20 mt-[100px] xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div>
            <h2 className='text-[34px] md:text-[44px] mb-10 font-light text-gray-500'>
                  Demande de devis
            </h2>
            <p className='font-light text-[16.5px] mb-3'>
                  Vous souhaitez obtenir une demande de devis personnalisée. 
                  Merci de remplir le formulaire ci-dessous, votre demande 
                  sera traitée dans les meilleurs délais.
            </p>
            <p className='font-light text-[16.5px]'>
                  *La demande de devis est gratuite et sans engagement 
                  (Nous vous prions de noter que les champs marqués d’une * sont obligatoires.)
            </p>
      </div>
      <div className='mt-10 block md:flex items-start gap-5'>
            <div className='w-full md:w-[50%] border px-5 py-3'>
                  <h5 className='mt-5 text-xl font-light'>
                        Vos coordonnées
                  </h5>
                  <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                  <div className='mt-5'>
                        <div className='mb-3'>
                              <label htmlFor="" className='text-[17px] font-light'>Nom *</label><br />
                              <input type="text" 
                              className='border-slate-300 border bg-slate-100 p-2 w-full mt-3'
                              />
                        </div>
                        <div className='mb-3'>
                              <label htmlFor="" className='text-[17px] font-light'>Prénom</label><br />
                              <input type="text" 
                              className='border-slate-300 border bg-slate-100 p-2 w-full mt-3'
                              />
                        </div>
                        <div className='mb-3'>
                              <label htmlFor="" className='text-[17px] font-light'>Télépone *</label><br />
                              <input type="text" 
                              className='border-slate-300 border bg-slate-100 p-2 w-1/3 mt-3'
                              />
                        </div>
                        <div className='mb-3'>
                              <label htmlFor="" className='text-[17px] font-light'>Email *</label><br />
                              <input type="text" 
                              className='border-slate-300 border bg-slate-100 p-2 w-full mt-3'
                              />
                        </div>
                        <div className='mb-3'>
                              <label htmlFor="" className='text-[17px] font-light'>Adresse</label><br />
                              <input type="text" 
                              className='border-slate-300 border bg-slate-100 p-2 w-full mt-3'
                              />
                        </div>
                        <div className='flex items-center gap-8'>
                              <div className='mb-3 w-full'>
                                    <label htmlFor="" className='text-[17px] font-light'>Code postal</label><br />
                                    <input type="text" 
                                    className='border-slate-300 border bg-slate-100 p-2 w-full mt-3'
                                    />
                              </div>
                              <div className='mb-3 w-full'>
                                    <label htmlFor="" className='text-[17px] font-light'>Ville</label><br />
                                    <input type="text" 
                                    className='border-slate-300 border bg-slate-100 p-2 w-full mt-3'
                                    />
                              </div>
                        </div>
                  </div>
                  <h5 className='mt-5'>* Champs requis</h5>
            </div>
            <div className='w-full md:w-[50%] mt-5 md:mt-0 border px-5 py-3'>
                  <h5 className='mt-5 text-xl font-light'>
                        Votre projet
                  </h5>
                  <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                  <div className='mt-5'>
                        <div className='flex items-center gap-2 mb-2'>
                              <input type="checkbox" name="" id="" 
                              className='border-slate-300 border bg-slate-100'
                              />
                              <h5 className='font-light text-[16.3px]'>Convention d'entreprise</h5>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                              <input type="checkbox" name="" id="" 
                              className='border-slate-300 border bg-slate-100'
                              />
                              <h5 className='font-light text-[16.3px]'>Soirée de gala</h5>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                              <input type="checkbox" name="" id="" 
                              className='border-slate-300 border bg-slate-100'
                              />
                              <h5 className='font-light text-[16.3px]'>Séminaires</h5>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                              <input type="checkbox" name="" id="" 
                              className='border-slate-300 border bg-slate-100'
                              />
                              <h5 className='font-light text-[16.3px]'>Défilé de mode</h5>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                              <input type="checkbox" name="" id="" 
                              className='border-slate-300 border bg-slate-100'
                              />
                              <h5 className='font-light text-[16.3px]'>Lancement de produits</h5>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                              <input type="checkbox" name="" id="" 
                              className='border-slate-300 border bg-slate-100'
                              />
                              <h5 className='font-light text-[16.3px]'>Anniversaire</h5>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                              <input type="checkbox" name="" id="" 
                              className='border-slate-300 border bg-slate-100'
                              />
                              <h5 className='font-light text-[16.3px]'>Conférence de presse</h5>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                              <input type="checkbox" name="" id="" 
                              className='border-slate-300 border bg-slate-100'
                              />
                              <h5 className='font-light text-[16.3px]'>Secteur public</h5>
                        </div>
                        <div className='mb-3 mt-5'>
                              <label htmlFor="" className='text-[17px] font-light'>Votre demande concerne *</label><br />
                              <textarea 
                              className='border-slate-300 border bg-slate-100 px-2 py-8 w-full mt-3'
                              />
                        </div>
                        <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                              <button className='bg-slate-400 text-white px-4 py-3 text-[14px]'>
                                    Envoyer votre demande
                              </button>
                        </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Demande
