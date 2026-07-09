import { FC } from "react"

interface IconProps {
    role: 'microphone' | 'recording'
}

export const Icon: FC<IconProps> = ({ role }) => {
    switch (role) {
        case 'microphone':
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
                <path d="M5 11a7 7 0 0 0 14 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" />
                <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
        case 'recording':
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" fill="#e11d48" />
            </svg>
    }
}