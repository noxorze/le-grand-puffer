import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!
);

export async function POST(req: Request) {
  try {
    const {
  cart,
  shipping,
} = await req.json();

console.log(
  "SHIPPING DATA =",
  JSON.stringify(shipping, null, 2)
);

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

          billing_address_collection:
            "auto",

          line_items,

          mode: "payment",

          metadata: {
            country:
              shipping?.country ||
              "",

            deliveryType:
              shipping?.deliveryType ||
              "",

            firstName:
              shipping?.firstName ||
              "",

            lastName:
              shipping?.lastName ||
              "",

            email:
              shipping?.email ||
              "",

            phone:
              shipping?.phone ||
              "",

            address:
              shipping?.address ||
              "",

            city:
              shipping?.city ||
              "",

            zip:
              shipping?.zip ||
              "",

            relayName:
              shipping?.relayName ||
              "",

            relayAddress:
              shipping?.relayAddress ||
              "",

            relayCity:
              shipping?.relayCity ||
              "",

            relayZip:
              shipping?.relayZip ||
              "",

            instructions:
              shipping?.instructions ||
              "",
          },

          success_url:
            `${process.env.NEXT_PUBLIC_SITE_URL}/succes`,

          cancel_url:
            `${process.env.NEXT_PUBLIC_SITE_URL}/panier`,
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