function Spinner({ color = '#EAAB5E' }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={50}
      height={50}
    >
      <defs>
        <radialGradient 
          id="a11" 
          cx=".66" 
          fx=".66" 
          cy=".3125" 
          fy=".3125" 
          gradientTransform="scale(1.5)"
        >
          <stop offset="0" stopColor={color} />
          <stop offset=".3" stopColor={color} stopOpacity=".9" />
          <stop offset=".6" stopColor={color} stopOpacity=".6" />
          <stop offset=".8" stopColor={color} stopOpacity=".3" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle
        fill="none"
        stroke="url(#a11)"
        strokeWidth="30"
        strokeLinecap="round"
        strokeDasharray="200 1000"
        strokeDashoffset="0"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="1.5s"
          repeatCount="indefinite"
          keyTimes="0;1"
          keySplines="0.4 0 0.2 1"
        />
      </circle>
      <circle
        fill="none"
        opacity=".2"
        stroke={color}
        strokeWidth="30"
        strokeLinecap="round"
        cx="100"
        cy="100"
        r="70"
      />
    </svg>
  )
}

export default Spinner;