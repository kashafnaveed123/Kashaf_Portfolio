export async function sendEmail(formData) {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  }
  