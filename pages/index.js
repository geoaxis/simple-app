import Head from 'next/head'
import Image from 'next/image'
import { QuoteCardCollection } from '../src/ui-components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

   <QuoteCardCollection />

    </div>
  )
}
