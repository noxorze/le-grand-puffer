import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!
);

export async function POST(req: Request) {
  try {
    const { cart } = await req.json();

    const line_items = cart.map(
      (item: any) => ({
        price_data: {
          currency: "eur",

          product_data: {
            name: `${item.name} - ${item.flavor}`,
          },

          unit_amount: Math.round(
            item.price * 100
          ),
        },

        quantity: item.quantity,
      })
    );

    const subtotal = cart.reduce(
      (total: number, item: any) =>
        total +
        item.price * item.quantity,
      0
    );

    if (subtotal < 50) {
      line_items.push({
        price_data: {
          currency: "eur",

          product_data: {
            name: "Livraison",
          },

          unit_amount: 490,
        },

        quantity: 1,
      } as any);
    }

    const session =
      await stripe.checkout.sessions.create(
        {
          payment_method_types: [
            "card",
          ],

          shipping_address_collection: {
  allowed_countries: [
    "FR",
    "BE",
  ],
},

          billing_address_collection:
            "required",

          line_items,

          mode: "payment",

          success_url:
            "http://localhost:3000/success",

          cancel_url:
            "http://localhost:3000/panier",
        }
      );

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Erreur lors de la création de la session Stripe",
      },
      {
        status: 500,
      }
    );
  }
}