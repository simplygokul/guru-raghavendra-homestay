/**
 * FAQs — publish only after owner-confirmed answers.
 * Structured FAQPage schema only for verified pairs.
 */

export type FaqItem = {
  id: string;
  question: string;
  answer: string | null;
  published: boolean;
};

export const faqs: FaqItem[] = [
  {
    id: 'check-in',
    question: 'What are the check-in and check-out timings?',
    answer: null,
    published: false,
  },
  {
    id: 'flexible-check-in',
    question: 'Is early or flexible check-in possible for temple visits?',
    answer:
      'Early or flexible check-in may be available for temple visitors subject to prior confirmation. Please contact us in advance.',
    published: true,
  },
  {
    id: 'temple-distance',
    question: 'How far is the homestay from Mopidevi Temple?',
    answer: null,
    published: false,
  },
  {
    id: 'kitchen',
    question: 'Can guests use the kitchen?',
    answer:
      'Yes — a kitchen facility is available for home-style cooking during your stay. Please ask us about the equipment provided when you enquire.',
    published: true,
  },
  {
    id: 'family',
    question: 'Is the property suitable for large families or groups?',
    answer:
      'Yes. The rooms and common spaces are designed to feel spacious and comfortable for families and groups travelling together.',
    published: true,
  },
  {
    id: 'parking',
    question: 'Is parking available?',
    answer: null,
    published: false,
  },
  {
    id: 'food',
    question: 'Are food arrangements available nearby?',
    answer: null,
    published: false,
  },
  {
    id: 'booking',
    question: 'How do I book a stay?',
    answer:
      'Message us on WhatsApp or call to check availability. Share your dates and number of guests so we can guide you quickly.',
    published: true,
  },
];

export const publishedFaqs = faqs.filter((f) => f.published && f.answer);
