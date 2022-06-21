import Head from 'next/head'
import Image from 'next/image'
import { Logout, QuoteCardCollection } from '../src/ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react';

import styles from '../styles/Home.module.css'


function Home({ signOut, user }) {
  console.log(user)
  return (
    <>

      <Logout overrides={{"Heading": {  children: user?.attributes?.email } }} />

      <QuoteCardCollection />
    </>
  );
}

export default withAuthenticator(Home);
