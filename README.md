# Using Streambird with Next

To render the Streambird auth/login component in your Next project, simply install the package and configure the Streambird component. For further information on all the Streambird props and definitions, they can be found within the the [Streambird SDK](https://docs.streambird.io/docs/sdk).

## Usage

Before you run npm or yarn, make sure you have the following setup on the Streambird portal. Without these settings, the React component will not work.

1. Public API key
2. Login redirect URL (required if you are `autoVerify: false`, which will redirect to your own redirect url instead of using our verified page)
3. Registration redirect URL (required if you are `autoVerify: false`, which will redirect to your own redirect url instead of using our verified page)
4. Copy `.env.example` to `.env` or `.env.local` and replace the variables inside.

```sh
cp .env.example .env.local

```

5. replace STREAMBIRD_PUBLIC_TOKEN with your account's public token.

```sh
npm install
npm run-script dev

or

yarn install
yarn dev

```

Then navigate to http://localhost:8001

## Example code

```js
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Streambird } from "@streambird/streambird-react";
import { ErrorData, SuccessData, WalletType } from '@streambird/streambird-js';

const Home: NextPage = () => {
  const streambirdConfig = {
    enabledProducts: [ProductTypes.EmailMagicLink],
    emailMagicLink: {
      loginRedirectUrl: 'LOGIN_REDIRECT_URL_FROM_PORTAL_GOES_HERE',
      registrationRedirectUrl: 'REGISTRATION_REDIRECT_URL_FROM_PORTAL_GOES_HERE',
      loginExpiresIn: 5,
      registrationExpireIn: 5,
      requiresVerification: false,
      autoVerify: true // when set to true, we host the verification page for you and only trigger onSuccess callback once the magic link has been clicked. When set to false, we trigger onSuccess callback as soon as the magic link is sent.
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
    <div id="login">
      <Streambird
        publicToken={"YOUR_API_KEY_FROM_PORTAL_GOES_HERE"}
        config={streambirdConfig}
        callbacks={handleCallbacks}
      />
    </div>
  )
}

export default Home

```

For detailed description and information on how to use the Streambird SDK, please refer to the [SDK docs](https://docs.streambird.io/docs/sdk).

### Changelog

**[1.0.0] - 2020-03-06**
- Launch Streambird Next example
