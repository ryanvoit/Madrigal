'use client';
import { Icon } from '../Common/Icon';
import React, { useState } from 'react';

export default function LandingPageBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      className="scenary__item-btn"
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Свернуть' : 'Развернуть'}
    >
      <Icon
        role="arrow"
        className={`scenary__details-symbol ${
          isOpen ? 'scenary__details-symbol--active' : ''
        }`}
        aria-hidden="true"
      />
    </button>
  );
}


