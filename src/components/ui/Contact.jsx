import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Input, Textarea, Button } from "./ui-components";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', 'bot-field': '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData['bot-field']) {
      // Honeypot field filled, this is likely a bot submission
      return;
    }

    setIsSubmitting(true);

    // Send form data to Netlify
    const formPayload = new FormData();
    for (const key in formData) {
      formPayload.append(key, formData[key]);
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formPayload).toString(),
      });

      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '', 'bot-field': '' });
      setSuccessMessage('Thank you for reaching out! Your message has been sent successfully.');
    } catch {
      setIsSubmitting(false);
      setSuccessMessage('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-neonGreen">Get In Touch</h2>
            <p className="text-gray-400">
              I&apos;m currently looking for new opportunities. Feel free to reach out!
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-4"
              >
                {/* Honeypot Field */}
                <input
                  type="hidden"
                  name="bot-field"
                  value={formData['bot-field']}
                  onChange={handleChange}
                />

                {/* Netlify Form Hidden Data */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-200">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-200">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-200">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <span>Sending...</span> : <span>Send Message</span>}
                </Button>
              </form>
              {successMessage && (
                <p className="text-center text-neonGreen mt-4">{successMessage}</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
