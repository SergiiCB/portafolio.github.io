const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    const { name, email, message } = JSON.parse(event.body);

    // Configura tu transportador de Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    // Configura los detalles del correo
    let mailOptions = {
        from: email,
        to: 'tu-email@gmail.com',
        subject: `Nuevo mensaje de ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Mensaje enviado con éxito' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al enviar el mensaje', error })
        };
    }
};
