import React from 'react';
import TheHeader from '../components/TheHeader.jsx';
import SignInForm from '../components/SignInForm';
import TheFooter from '../components/TheFooter.jsx';

export default function SignInBlock() {
  return (
    <div className="sign-in-block d-flex flex-column justify-content-between">
      <TheHeader />
      <SignInForm />
      <TheFooter />
    </div>
  )
}