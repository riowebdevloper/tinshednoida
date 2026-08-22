interface TrussDividerProps {
  className?: string;
  dark?: boolean;
  type?: "warren" | "pratt" | "howe" | "beam";
}

export function TrussDivider({ className = "", dark = false, type = "warren" }: TrussDividerProps) {
  const strokeColor = dark ? "rgba(255, 255, 255, 0.12)" : "#CBD5E1";
  const nodeColor = dark ? "#D97706" : "#0E2A47";

  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none py-1.5 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-5 sm:h-6 object-cover"
        preserveAspectRatio="none"
      >
        {/* Top & Bottom Chord Lines */}
        <line x1="0" y1="6" x2="1200" y2="6" stroke={strokeColor} strokeWidth="1" />
        <line x1="0" y1="30" x2="1200" y2="30" stroke={strokeColor} strokeWidth="1" />

        {/* Diagonal Web Members */}
        {Array.from({ length: 30 }).map((_, i) => {
          const x1 = i * 40;
          const x2 = x1 + 40;
          const isEven = i % 2 === 0;

          return (
            <g key={i}>
              <line
                x1={x1}
                y1={isEven ? 6 : 30}
                x2={x2}
                y2={isEven ? 30 : 6}
                stroke={strokeColor}
                strokeWidth="1"
              />
              {isEven && (
                <circle cx={x1} cy={isEven ? 6 : 30} r="1.5" fill={i % 6 === 0 ? nodeColor : strokeColor} />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
