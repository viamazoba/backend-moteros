import sgMail from '@sendgrid/mail'

export const sendMailSendGrid = (data: any) =>{
    const apiKey = process.env.SENDGRID_API_KEY as string;
    sgMail.setApiKey(apiKey)

    return sgMail.send(data)
}