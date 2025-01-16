import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configuration du transporteur email pour LWS
const transporter = nodemailer.createTransport({
  host: 'mail.futurline.fr', // Serveur SMTP de LWS
  port: 465, // Port SMTP sécurisé (SSL)
  secure: true, // Utilisation de SSL pour le port 465
  auth: {
    user: process.env.EMAIL_USER, // Adresse email complète de LWS
    pass: process.env.EMAIL_PASSWORD // Mot de passe du compte de messagerie
  }
})

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    // Configuration de l'email
    const mailOptions = {
      from: `${name} <${process.env.EMAIL_USER}>`, // Nom et email de l'expéditeur
      to: process.env.EMAIL_RECIPIENT, // Adresse email qui recevra le message
      subject: `Nouveau message de ${name}: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}
