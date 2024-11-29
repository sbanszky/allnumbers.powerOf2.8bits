import React, { useState, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import { sendContactForm } from '../utils/api';

interface CaptchaChallenge {
  num1: number;
  num2: number;
  operator: '+' | '-' | '*';
  answer: number;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [captchaChallenge, setCaptchaChallenge] = useState<CaptchaChallenge | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const generateCaptcha = () => {
    const operators: Array<'+' | '-' | '*'> = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let num1: number, num2: number, answer: number;

    switch (operator) {
      case '+':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 5) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        answer = num1 * num2;
        break;
      default:
        num1 = 1;
        num2 = 1;
        answer = 2;
    }

    setCaptchaChallenge({ num1, num2, operator, answer });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      captcha: ''
    });
    generateCaptcha();
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaChallenge || parseInt(formData.captcha) !== captchaChallenge.answer) {
      setStatus('error');
      setErrorMessage('Incorrect captcha answer. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage(null);
      }, 3000);
      generateCaptcha();
      setFormData(prev => ({ ...prev, captcha: '' }));
      return;
    }

    setStatus('loading');
    setErrorMessage(null);

    try {
      await sendContactForm({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
      setStatus('success');
      resetForm();
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-black/30 p-8 rounded-lg cyber-border">
        <h2 className="text-3xl font-bold mb-8 text-cyber-mint">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your name:
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-cyber-mint focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your email address:
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-cyber-mint focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              required
              className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-cyber-mint focus:border-transparent"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message:
            </label>
            <textarea
              id="message"
              required
              rows={6}
              className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-cyber-mint focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            />
          </div>

          {captchaChallenge && (
            <div>
              <label htmlFor="captcha" className="block text-sm font-medium text-gray-300 mb-2">
                Please solve this math problem: {captchaChallenge.num1} {captchaChallenge.operator} {captchaChallenge.num2} = ?
              </label>
              <input
                type="number"
                id="captcha"
                required
                className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-cyber-mint focus:border-transparent"
                value={formData.captcha}
                onChange={(e) => setFormData(prev => ({ ...prev, captcha: e.target.value }))}
              />
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-cyber-mint hover:bg-cyber-mint/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyber-mint disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {status === 'loading' ? (
                <Loader className="animate-spin -ml-1 mr-2 h-5 w-5" />
              ) : (
                <Send className="-ml-1 mr-2 h-5 w-5" />
              )}
              Send Message
            </button>
          </div>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-900/50 border border-green-500 rounded-md text-green-400">
              Message sent successfully!
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-900/50 border border-red-500 rounded-md text-red-400">
              {errorMessage || 'Failed to send message. Please try again.'}
            </div>
          )}
        </form>

        <div className="mt-8 p-4 bg-black/50 rounded-lg border border-gray-800">
          <p className="text-gray-400">
            email: <a href="mailto:contact@allnumbers012.online" className="text-cyber-mint hover:text-cyber-blue transition-colors">contact@allnumbers012.online</a>
          </p>
        </div>
      </div>
    </div>
  );
}