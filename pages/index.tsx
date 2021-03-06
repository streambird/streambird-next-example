import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Streambird } from "@streambird/streambird-react";
import { ErrorData, SuccessData, ProductTypes } from '@streambird/streambird-js';

const Home: NextPage = () => {
  
  const streambirdConfig = {
    enabledProducts: [ProductTypes.EmailMagicLink],
    emailMagicLink: {
      loginRedirectUrl: '',
      registrationRedirectUrl: '',
      loginExpiresIn: 5,
      registrationExpireIn: 5,
      requiresVerification: false,
      autoVerify: true,
    },
    componentStyle: {
      width: 500,
      showHeaderText: true,
      headerText: 'Welcome to passbird',
      headerTextColor: '',
      bodyText: 'Please enter your email address and sign up with a magic link to start using decentralized applications.',
      bodyTextColor: '#333333',
      buttonTextColor: '#FFFFFF',
      buttonColor: '',
      errMsgColor: ''
    }
  }

  const handleCallbacks = {
    onSuccess: (message: SuccessData) => {
      console.log(message)
    },
    onError: (message: ErrorData) => {
      console.log(message)
    }
  }

  return (
    <div className={styles.container}>
      <Streambird
        publicToken={process.env.STREAMBIRD_PUBLIC_TOKEN}
        config={streambirdConfig}
        callbacks={handleCallbacks}
      />
    </div>
  )
}

export default Home
