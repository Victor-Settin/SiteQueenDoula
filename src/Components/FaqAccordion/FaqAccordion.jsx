import * as Accordion from '@radix-ui/react-accordion';
import './FaqAccordion.css';
import { useState } from 'react';

const faqItems = [
  {
    question: 'What services do you offer?',
    answer: [
      'From midnight feedings to soothing fussy moments, I’ve got your back 24/7. My services include:',
      '• Hands-on baby care (feeding, bathing, soothing)',
      '• Mommy and baby’s laundry',
      '• Light meal prep for mommy',
      '• Emotional support and newborn education',
      '• Sleep training tips and techniques',
      '• Guidance for purchasing baby’s layette',
    ],
  },
  {
    question: 'How distance can you commute to?',
    answer: ['I’m willing to attend families by 40 miles away from San Mateo'],
  },
  {
    question: 'Do you offer day care services?',
    answer: [
      'Only night shifts as postpartum doula.',
      'And on-call nanny for day time shifts.',
    ],
  },
];

export default function FaqAccordion() {
  const [openItem, setOpenItem] = useState('');

  return (
    <div className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <Accordion.Root
        type="single"
        collapsible
        className="faq-root"
        value={openItem}
        onValueChange={setOpenItem}
      >
        {faqItems.map((item, index) => {
          const value = `item-${index}`;
          const isOpen = openItem === value;

          return (
            <Accordion.Item key={value} value={value} className="faq-item">
              <Accordion.Header className="faq-header">
                <Accordion.Trigger className="faq-trigger">
                  {item.question}
                  <span className="faq-icon">{isOpen ? '-' : '+'}</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-content">
                {item.answer.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}