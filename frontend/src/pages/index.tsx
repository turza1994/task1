import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import FolderList from '@/components/FolderList/FolderList'
import { useEffect, useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [rootFolder, setRootFolder] = useState<any>({})

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/folders`)
      .then((response) => {
        setRootFolder(response.data[0])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='min-h-[100vh] flex justify-center text-3xl'>
        <FolderList folder={rootFolder} />
      </main>
    </>
  )
}