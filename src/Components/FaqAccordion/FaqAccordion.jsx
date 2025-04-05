import * as Accordion from '@radix-ui/react-accordion';
import './FaqAccordion.css';
import { useState } from 'react';

const faqItems = [
  {
    question: 'What services do you offer?',
    answer: 'I offer full-spectrum doula services, including prenatal, birth, and postpartum support.'
  },
  {
    question: 'When should I hire a doula?',
    answer: 'The earlier the better! Ideally in your second trimester, so we have time to build trust.'
  },
  {
    question: 'Do you work with partners and families?',
    answer: 'Absolutely! I work with the whole family to create a supportive and empowering birth experience.'
  }
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
                <p>{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
