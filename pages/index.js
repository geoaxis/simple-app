import Head from 'next/head'
import Image from 'next/image'
import { QuoteCardCollection } from '../src/ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react';

import styles from '../styles/Home.module.css'


function Home({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>

      <QuoteCardCollection />
    </>
  );
}

export default withAuthenticator(Home);
