import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/logo1.png'
import image2 from '@/public/images/scene.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#1c1b1b] px-5 md:px-10 lg:px-20 py-8 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 lg:gap-20'>
            <div>
                  <div className='w-[50%]'>
                        <Link className='text-white text-xs' href={'/'}>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                              className='w-[70%]' />
                              {/* Agence de <br /><span className='text-blue-400'>communication</span> et événementiel */}
                        </Link>
                  </div>
                  <div className='mt-4'>
                        <p className='text-[14.4px] font-light text-gray-400'>
                        IDJ Consulting est une agence événementielle qui imagine, conçoit et met en scène tous vos événements.
                        En perpétuelle quête des dernières innovations et tendances, IDJ Consulting, entreprise événementielle, mêle ses compétences artistiques, techniques et créatives pour mettre en lumière tous vos événements.
                        </p>
                  </div>
                  <div className='mt-8 flex items-center gap-5'>
                        <FaFacebook size={24} className='text-gray-400 mb-2' />
                        <FaTwitter size={24} className='text-gray-400 mb-2' />
                        <FaLinkedin size={24} className='text-gray-400 mb-2' />
                        <FaInstagram size={24} className='text-gray-400 mb-2' />
                        <FaYoutube size={26} className='text-gray-400 mb-2' />
                  </div>
                  <div className='mt-7'>
                        <ul className='text-gray-400 underline text-xs'>
                              <li className='mb-4'>
                                    <Link href={''}>Mentions légales</Link>
                              </li>
                              <li className='mb-4'>
                                    <Link href={''}>Politique de confidentialité</Link>
                              </li>
                              <li className='mb-4'>
                                    <Link href={''}>Plan du site</Link>
                              </li>
                              <li className='mb-4'>
                                    <Link href={''}>Gestion des cookies</Link>
                              </li>
                        </ul>
                  </div>
            </div>
            <div className='mt-14'>
                  <h3 className='text-xl font-semibold uppercase text-white'>Nos derniers <span className='text-slate-400'>événements</span></h3>
                  <Link href={'/'}>
                        <div className='w-full h-[11rem] mt-5'>
                                    <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                        </div>
                  </Link>
                  <div className='mt-10'>
                        <Link href={'/realisations'} className='bg-slate-400 text-white py-2 px-4 text-[18px]'>
                              Toutes nos réalisations
                        </Link>
                  </div>
            </div>
            <div className='mt-14'>
                  <h3 className='text-xl font-semibold uppercase text-white'><span className='text-slate-400'>Contactez</span>-nous</h3>
                  <div className='mt-5'>
                        <div className='flex items-center gap-2 mb-5'>
                              <h3 className='bg-slate-500 text-white text-2xl'>Call</h3>
                              <p className='text-white text-sm'>+243 81 765 798 3</p>
                        </div>
                        <div className='flex items-center gap-2 mb-5'>
                              <h3 className='bg-slate-500 text-white text-2xl'>Mail</h3>
                              <p className='text-white text-sm'>contact@idj-consulting.com</p>
                        </div>
                        <div className='flex items-center gap-2 mb-5'>
                              <h3 className='bg-slate-500 text-white text-2xl'>Place</h3>
                              <p className='text-white text-sm'>Kinshasa</p>
                        </div>
                  </div>
                  <div className='mt-5'>
                        <h3 className='text-xl font-semibold uppercase text-white'><span className='text-slate-400'>News</span>letter</h3>
                        <div className='mt-8'>
                              <button className='bg-slate-500 text-white py-3 px-4 text-[15px] w-full'>
                                    Votre adresse
                              </button>
                        </div>
                        <div className='mt-2'>
                              <button className='bg-slate-400 text-white py-3 px-4 text-[15px] w-full'>
                                    Je m'inscris
                              </button>
                        </div>
                  </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer
