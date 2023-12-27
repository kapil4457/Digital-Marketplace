import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ??
    "sk_test_51KW0eOSEQiF6Q8x0wM6ZxVSxNrOiA9UyHIUbeKgl6va5lL2qNor2pDJJBQJpDQoI6xipPkVPrf1Jnpe4vtrMix2Y00PCH1FAmA",
  {
    apiVersion: "2023-10-16",
    typescript: true,
  }
);
