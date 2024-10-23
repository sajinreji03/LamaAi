import { SignIn } from '@clerk/clerk-react'
import './signInPage.css'

const SignInPage = () => {
  return (
    <div className='signpInPage'>
      <SignIn path="/sign-in" 
      signUpUrl="/sign-up" 
      forceRedirectUrl="/dashboard" />
      </div>
  )
}

export default SignInPage