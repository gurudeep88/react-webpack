import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import PaymentForm from './PaymentForm'

const StripePaymentForm = ({stripePromise}) => {
  return (
    <Elements stripe={stripePromise}>
        <PaymentForm />
  </Elements>
  )
}

export default StripePaymentForm

