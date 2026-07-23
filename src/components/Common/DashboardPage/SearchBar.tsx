'use client';

import { useState } from 'react';
import { Icon } from '../Icon';
import { CustomInput } from '../CustomInput';

export function SearchBar() {
  const [query, setQuery] = useState('');
  // const [isVoiceActive, setIsVoiceActive] = useState(false);

  // const handleVoice = () => {
  //   setIsVoiceActive((prev) => !prev);
  // };

  const hasText = query.trim().length > 0

  return (
    <div className="welcome__search-btn">
      <CustomInput
        inputType="text"
        placeholder="Задайте вопрос"
        inputValue={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter'}
        // disabled={isVoiceActive}
        id="query"
        required={false}
      />

      {!hasText && (
        <Icon
          className="welcome__search-icon"
          role="microphone"
          aria-label="Голосовой ввод"
        />
      )}

      {hasText && (
        <Icon
          className="welcome__search-icon--send"
          role="send"
          aria-label="Отправить запрос"
        />
      )}
    </div>
  );
}


{/* <Link
        href="/3rdpage"
        className="search-bar__btn-search"
        aria-label="Выполнить поиск"
      >
        <Icon role="search" className="search-bar__icon" />
      </Link> */}

{/* <VoiceRecordButton
        voiceFn={handleVoice}
        voiceActive={isVoiceActive}
        className="search-bar__voice-btn"
      /> */}

// import { ExitButton } from '../ExitButton';
// import { VoiceRecordButton } from './VoiceRecordButton';
// import Link from 'next/link';