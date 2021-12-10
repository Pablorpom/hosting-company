import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Button from '../components/Button/Button'
import womanInAComputerImage from '../public/womanInAComputerImage.jpg'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero
        slides={[
          {
            menuText:"Hosting",
            mainText:"Premium Web Hosting for Your Website",
            secondaryText:"Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.",
            children: <>
              <Button secondary href="#" className={styles.createAccountButton}>Create an Account</Button>
              <Button href="#">Choose your plan</Button>
            </>,
            image: womanInAComputerImage,
            imageAlt: "Woman in a computer"
          }
        ]}
      />
    </div>
  )
}
