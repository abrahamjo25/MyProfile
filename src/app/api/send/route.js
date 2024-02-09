"use client";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import MessageUsEmail from "@/components/EmailMessage";

const resend = new Resend("re_7pdoNfYe_Avr5ked9ryJDsSuHtv9Fjq9Z");

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: email,
      to: `abirham.johannes@gmail.com`,
      subject: `${name} has a message!`,
      react: MessageUsEmail({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
