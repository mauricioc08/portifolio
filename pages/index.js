import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'
import Footer from './footer'
import imageLogo from '../public/img/minha_foto.jpg'

export default function Home() {
  return (
    <>
    <Header/>
    
    <main className='colunas'> 
      <Image className='rounded-bl-lg' src={imageLogo} alt="foto perfil"/>
      <div>
        <h1 className='respo text-7xl leading-tight font-bold mb-8 relative'>Desenvolvedor <br/>Front-End</h1>
        <p className='text-2xl'>Localizado em Guarulhos-SP</p>
      </div>
    </main>

    <Footer/>
    </>
  )
}
