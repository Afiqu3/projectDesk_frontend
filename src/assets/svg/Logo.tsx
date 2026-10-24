export default function Logo() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="256"
            height="256"
            role="img"
            aria-label="P logo"
        >
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8D5839" />
                    <stop offset="0.55" stopColor="#4F3524" />
                    <stop offset="1" stopColor="#121310" />
                </linearGradient>
            </defs>

            <rect width="48" height="48" rx="8" fill="url(#bg)" />

            <path
                fill="#EB8316"
                fillRule="evenodd"
                d="M7 2 H24 C34 2 41 8 41 16.5 C41 25 34 31 24 31 H17 V46 H7 Z M17 11 V22 H25 C28 22 31 20 31 16.5 C31 13 28 11 25 11 Z"
            />
        </svg>
    );
}
