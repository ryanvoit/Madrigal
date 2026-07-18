'use client';

import { Icon } from '../../Common/Icon';

interface LandingPageArrowBtnProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function LandingPageArrowBtn({
  isOpen,
  onToggle,
}: LandingPageArrowBtnProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="scenary-card__btn"
      aria-label={isOpen ? 'Свернуть детали' : 'Развернуть детали'}
      style={{
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon
        role="arrow"
        className={`scenary-card__icon ${isOpen ? 'scenary-card__icon--active' : ''}`}
        aria-hidden="true"
      />
    </button>
  );
}