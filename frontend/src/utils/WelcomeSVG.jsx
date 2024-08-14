export const WelcomeSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 500"
    preserveAspectRatio="xMidYMid meet"
    style={{ width: "100%", height: "auto" }} // Ensure the SVG scales responsively
  >
    <defs>
      <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feFlood floodColor="#FF4081" result="flood" />
        <feComposite in="flood" in2="SourceAlpha" operator="in" />
        <feGaussianBlur stdDeviation="10" result="blur" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="blur" />
        </feMerge>
      </filter>
      <filter id="neonBorder" x="-50%" y="-50%" width="200%" height="200%">
        <feFlood floodColor="#FF4081" result="flood" />
        <feComposite in="flood" in2="SourceAlpha" operator="in" />
        <feGaussianBlur stdDeviation="15" result="blur" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="blur" />
        </feMerge>
      </filter>
    </defs>
    <rect width="800" height="500" fill="#3E2723" />
    <rect
      x="10"
      y="10"
      width="780"
      height="480"
      rx="20"
      fill="none"
      stroke="#FF4081"
      strokeWidth="5"
      filter="url(#neonBorder)"
      opacity="0.5"
    >
      <animate
        attributeName="opacity"
        values="0.5; 1; 0.5"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </rect>

    {/* User 1 Icon */}
    <g filter="url(#neonGlow)" opacity="0.5">
      <circle cx="250" cy="250" r="60" fill="#FF4081">
        <animate
          attributeName="opacity"
          values="0.5; 1; 0.5"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="250"
        y="250"
        fontSize="30"
        fill="#fff"
        textAnchor="middle"
        dy=".3em"
      >
        A
      </text>
    </g>

    {/* User 2 Icon */}
    <g filter="url(#neonGlow)" opacity="0.5">
      <circle cx="550" cy="250" r="60" fill="#FF4081">
        <animate
          attributeName="opacity"
          values="0.5; 1; 0.5"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="550"
        y="250"
        fontSize="30"
        fill="#fff"
        textAnchor="middle"
        dy=".3em"
      >
        B
      </text>
    </g>

    <g>
      <text x="400" y="100" fontSize="48" fill="#FF4081" textAnchor="middle">
        Welcome to Our Community!
      </text>
      <text x="400" y="160" fontSize="24" fill="#FF4081" textAnchor="middle">
        We are thrilled to have you here.
      </text>
      <text x="400" y="200" fontSize="20" fill="#FF4081" textAnchor="middle">
        Connect, share, and grow together.
      </text>
    </g>
  </svg>
);
