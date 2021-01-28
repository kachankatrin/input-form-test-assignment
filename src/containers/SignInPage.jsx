import React from 'react';
import SignInBlock from './SignInBlock.jsx';
import SignInCarousel from './SignInCarousel.jsx';

export default function SignInPage() {
  return (
    <div className="sign-in-page">
      <SignInCarousel />
      <SignInBlock />
    </div>
  )
}