'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields');
      return;
    }

    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ full_name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Full Name */}
        <div className="relative group">
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder=" "
            className="glass-input block w-full px-4 pt-6 pb-2 text-on-surface border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 peer rounded-t-lg transition-all"
            disabled={status === 'loading'}
          />
          <label
            htmlFor="full_name"
            className="absolute text-sm text-outline duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container"
          >
            Full Name *
          </label>
        </div>

        {/* Email */}
        <div className="relative group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            className="glass-input block w-full px-4 pt-6 pb-2 text-on-surface border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 peer rounded-t-lg transition-all"
            disabled={status === 'loading'}
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-outline duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container"
          >
            Email Address *
          </label>
        </div>
      </div>

      {/* Phone */}
      <div className="relative group">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder=" "
          className="glass-input block w-full px-4 pt-6 pb-2 text-on-surface border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 peer rounded-t-lg transition-all"
          disabled={status === 'loading'}
        />
        <label
          htmlFor="phone"
          className="absolute text-sm text-outline duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container"
        >
          Phone Number
        </label>
      </div>

      {/* Message */}
      <div className="relative group">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder=" "
          rows={4}
          className="glass-input block w-full px-4 pt-6 pb-2 text-on-surface border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 peer rounded-t-lg transition-all resize-none"
          disabled={status === 'loading'}
        />
        <label
          htmlFor="message"
          className="absolute text-sm text-outline duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container"
        >
          Tell us about your project *
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-white px-12 py-4 rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-green-100 text-green-800 rounded-lg">
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="p-4 bg-red-100 text-red-800 rounded-lg">
          <p>{errorMessage}</p>
        </div>
      )}
    </form>
  );
}
