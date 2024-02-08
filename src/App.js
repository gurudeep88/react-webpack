import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import StripePaymentForm from './StripePaymentForm';

const App = () => {
  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLSHABLE_KEY}`);
  return (
    <div>
      <StripePaymentForm stripePromise={stripePromise} />
    </div>
  )
}

export default App