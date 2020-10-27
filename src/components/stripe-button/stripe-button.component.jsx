import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const SrtipeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    'pk_test_51HgjH9BJweDa0YLwM4y6XSjITAb066oUCl7XDySPoJSBjGcrpFxQCsFZrJAgEeun0HLMsut56WZpNoN1nSeHYzRr00eBdfHNQS';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN Clothing Co.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is ${price}`}
      amount={stripePrice}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default SrtipeCheckoutButton;
