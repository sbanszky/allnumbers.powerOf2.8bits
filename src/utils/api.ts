import { z } from 'zod';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required')
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export async function sendContactForm(data: ContactFormData) {
  try {
    const validatedData = ContactFormSchema.parse(data);
    
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send message');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('API Error:', error);
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw error instanceof Error ? error : new Error('An unexpected error occurred');
  }
}