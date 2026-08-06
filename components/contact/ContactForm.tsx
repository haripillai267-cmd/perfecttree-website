"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  }

  if (submitted) {
    return (
      <Card className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-brand-navy">
          Message Sent
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
        <Button
          className="mt-6"
          onClick={() => setSubmitted(false)}
          variant="secondary"
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="text-xl font-semibold text-brand-navy">Send a Message</h2>
      <p className="mt-1 text-sm text-slate-600">
        Tell us about your project and we&apos;ll be in touch shortly.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Name <span className="text-brand-green">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email <span className="text-brand-green">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            placeholder="Your organization"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
            Message <span className="text-brand-green">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            placeholder="How can we help?"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" className="w-full sm:w-auto">
          Send Message
        </Button>
      </form>
    </Card>
  );
}
