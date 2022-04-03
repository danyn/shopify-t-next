import "isomorphic-fetch";
import { gql } from "apollo-boost";

export function RECURRING_CREATE(url) {
  return gql`
    mutation {
      appSubscriptionCreate(
          name: "All Tools"
          returnUrl: "${url}",
          trialDays:180,
          test: true
          lineItems: [
          {
            plan: {
              appRecurringPricingDetails: {
                  price: { amount: 1.99, currencyCode: USD }
              }
            }
          }
          ]
        ) {
            userErrors {
              field
              message
            }
            confirmationUrl
            appSubscription {
              id
            }
        }
    }`;
}

export const getSubscriptionUrl = async ctx => {
  console.log('ctx.state.shopify::::', ctx.myhost, 'host')
  const returnUrl = `${process.env.HOST}?shop=${ctx.state.shopify.shop}&host=${ctx.myhost}`

  const { client } = ctx;

  const confirmationUrl = await client
    .mutate({
      // mutation: RECURRING_CREATE(process.env.HOST)
      mutation: RECURRING_CREATE(returnUrl)
    })
    .then(response => response.data.appSubscriptionCreate.confirmationUrl);
  

    console.log('confirmationUrl::', confirmationUrl)
    // https://9f7d-184-66-240-16.ngrok.io
    console.log('return url::', process.env.HOST )
  return ctx.redirect(confirmationUrl);
};
