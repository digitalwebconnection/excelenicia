import React from 'react';

const SectionHeader = ({ eyebrow, title, subtitle, center = false }) => (
  <div className={`${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} mb-14`}>
    <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
      <span className="gold-rule" />
      <span className="section-header-eyebrow">{eyebrow}</span>
      <span className="gold-rule" />
    </div>
    <h2
      className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mb-5"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {subtitle && (
      <p className="text-base sm:text-lg text-muted leading-relaxed">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
