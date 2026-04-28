import type { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { FormData } from '@/lib/types'; // Importando o tipo para garantir a segurança

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message, honeypot }: FormData = await req.json();

  if (honeypot) {
    return new Response('Bot detected', { status: 400 });
  }

  if (!name || !email || !message) {
    return new Response('Missing required fields', { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['devbrunoguimaraes@gmail.com'],
      subject: `New message from ${name} via portfolio!`,
      replyTo: email, 
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`, // Garante que quebras de linha apareçam no e-mail
    });

    if (error) {
      console.error({ error });
      return new Response(error.message, { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 });
  }
}
