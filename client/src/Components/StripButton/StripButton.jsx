import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_E87afWnkYtf6YBGx9xdOryJP";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => alert("payment SuccessFull"))
      .catch((error) => {
        console.log("Payment Error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please sure that you use the proper credit card"
        );
      });
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your Total Payment is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
