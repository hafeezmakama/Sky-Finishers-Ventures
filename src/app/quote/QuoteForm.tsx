'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import styles from './quote.module.css';

const services = [
  'Interior & exterior painting',
  'Decorative painting',
  'Screeding & skimming',
  'POP & gypsum works',
  'Wall textures and finishes',
  'Interior decoration',
  'Surface preparation',
  'General finishing works',
];

const budgets = [
  'Under ₦500,000',
  '₦500,000 – ₦1,000,000',
  '₦1,000,000 – ₦3,000,000',
  '₦3,000,000 – ₦5,000,000',
  'Over ₦5,000,000',
  'Not sure yet',
];

type QuoteFormProps = {
  whatsappUrl: string;
  phoneLabel: string;
};

export default function QuoteForm({ whatsappUrl, phoneLabel }: QuoteFormProps) {
  const [status, setStatus] = useState('');
  const [preparedUrl, setPreparedUrl] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('');
    setStatus('');
    setPreparedUrl('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const requiredFields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        '[required]',
      ),
    );

    for (const field of requiredFields) {
      field.setCustomValidity(
        field.value.trim() ? '' : 'Please complete this required field.',
      );
    }

    if (!form.reportValidity()) {
      setStatus('Please review the highlighted fields and try again.');
      setPreparedUrl('');
      return;
    }

    const formData = new FormData(form);
    const values = {
      name: String(formData.get('name') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      location: String(formData.get('location') ?? '').trim(),
      service: String(formData.get('service') ?? '').trim(),
      description: String(formData.get('description') ?? '').trim(),
      budget: String(formData.get('budget') ?? '').trim(),
      startDate: String(formData.get('startDate') ?? '').trim(),
      notes: String(formData.get('notes') ?? '').trim(),
    };
    const formattedStartDate = values.startDate
      ? new Intl.DateTimeFormat('en-NG', { dateStyle: 'long' }).format(
          new Date(`${values.startDate}T00:00:00`),
        )
      : '';

    const message = [
      'QUOTE REQUEST — SKY FINISHERS VENTURES',
      '',
      `Full name: ${values.name}`,
      `Phone number: ${values.phone}`,
      ...(values.email ? [`Email: ${values.email}`] : []),
      `Project location: ${values.location}`,
      `Service required: ${values.service}`,
      '',
      'Project description:',
      values.description,
      ...(values.budget ? ['', `Approximate budget: ${values.budget}`] : []),
      ...(formattedStartDate ? [`Preferred start date: ${formattedStartDate}`] : []),
      ...(values.notes ? ['', 'Additional notes:', values.notes] : []),
    ].join('\n');

    const url = new URL(whatsappUrl);
    url.searchParams.set('text', message);
    const messageUrl = url.toString();

    setPreparedUrl(messageUrl);
    setStatus(
      `Your enquiry is ready for ${phoneLabel}. Press Send in WhatsApp to submit it; it has not been sent yet.`,
    );

    window.open(messageUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label htmlFor="quote-name">Full name <span aria-hidden="true">*</span></label>
          <input
            id="quote-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="quote-phone">Phone number <span aria-hidden="true">*</span></label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 080 1234 5678"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="quote-email">Email address <span className={styles.optional}>(optional)</span></label>
          <input
            id="quote-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="quote-location">Project location or city <span aria-hidden="true">*</span></label>
          <input
            id="quote-location"
            name="location"
            type="text"
            autoComplete="address-level2"
            placeholder="City or area"
            required
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label htmlFor="quote-service">Service required <span aria-hidden="true">*</span></label>
          <select
            id="quote-service"
            name="service"
            defaultValue=""
            required
            onChange={handleChange}
          >
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label htmlFor="quote-description">Project description <span aria-hidden="true">*</span></label>
          <textarea
            id="quote-description"
            name="description"
            rows={5}
            placeholder="Tell us about the space, the work required, and any details that will help us understand your project."
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="quote-budget">Approximate budget <span className={styles.optional}>(optional)</span></label>
          <select id="quote-budget" name="budget" defaultValue="" onChange={handleChange}>
            <option value="">Select a budget range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="quote-start-date">Preferred start date <span className={styles.optional}>(optional)</span></label>
          <input
            id="quote-start-date"
            name="startDate"
            type="date"
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label htmlFor="quote-notes">Additional notes <span className={styles.optional}>(optional)</span></label>
          <textarea
            id="quote-notes"
            name="notes"
            rows={3}
            placeholder="Anything else you would like us to know?"
            onChange={handleChange}
          />
        </div>
      </div>

      <p className={styles.privacyNote}>
        Your form details will be included in a WhatsApp message when you choose to
        continue. They are not submitted or stored by this website.
      </p>

      <button type="submit" className={styles.submitButton}>
        Prepare WhatsApp enquiry <span aria-hidden="true">→</span>
      </button>

      {status && (
        <div className={styles.statusMessage} role="status" aria-live="polite">
          <p>{status}</p>
          {preparedUrl && (
            <a
              href={preparedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fallbackLink}
            >
              Open WhatsApp with your message
            </a>
          )}
        </div>
      )}
    </form>
  );
}
