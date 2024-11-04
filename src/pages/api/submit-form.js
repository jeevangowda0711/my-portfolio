export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }
  
    const body = req.body;
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(body).toString(),
      });
  
      if (!response.ok) {
        throw new Error(`Response failed with status ${response.status}`);
      }
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting form', error: error.message });
    }
  }
  