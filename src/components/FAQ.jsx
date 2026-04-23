import { useState } from 'react'

const faqs = [
  {
    question: 'What is Swadesh Developer known for?',
    answer:
      'Swadesh Developer is known for thoughtfully planned residential projects, quality construction, elegant layouts, and a customer-first approach that focuses on long-term trust and modern living.',
  },
  {
    question: 'What types of properties does Swadesh Developer offer?',
    answer:
      'We offer premium residential developments including modern homes, family-friendly communities, and thoughtfully designed living spaces created for comfort, convenience, and long-term value.',
  },
  {
    question: 'What makes Swadesh Developer projects special?',
    answer:
      'Our projects are designed with a strong focus on planning, quality, location advantage, and a refined lifestyle experience. We aim to deliver homes that feel premium while remaining practical for everyday living.',
  },
  {
    question: 'Are the projects suitable for families?',
    answer:
      'Yes. Our developments are planned for modern families with spacious layouts, peaceful surroundings, and convenient access to daily lifestyle needs.',
  },
  {
    question: 'Why should I choose a Swadesh Developer property?',
    answer:
      'Choosing Swadesh Developer means choosing trusted quality, elegant project planning, comfortable living spaces, and a strong commitment to delivering value through well-designed residential developments.',
  },
]

export default function FAQ() {
 const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <p className="faq-tag">Frequently Asked Questions</p>
          <h2 className="faq-title">
            Everything you need to <span>know</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index

            return (
              <div
                className={`faq-item ${isActive ? 'active' : ''}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  type="button"
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{isActive ? '−' : '+'}</span>
                </button>

                <div className="faq-answer-wrap">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}