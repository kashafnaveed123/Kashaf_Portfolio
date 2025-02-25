import emailjs from "@emailjs/browser";

export async function sendEmail(formData) {
  const { name, email, message } = formData;

  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        user_name: name,
        user_email: email,
        user_message: message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error("EmailJS Error:", error);
    return false;
  }
}
