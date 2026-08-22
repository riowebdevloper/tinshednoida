interface TrussDividerProps {
  className?: string;
  dark?: boolean;
  type?: "warren" | "pratt" | "howe" | "beam";
}

export function TrussDivider({ className = "", dark = false, type = "warren" }: TrussDividerProps) {
  const strokeColor = dark ? "rgba(255, 255, 255, 0.16)" : "rgba(28, 30, 32, 0.18)";
  const accentColor = dark ? "#F4B000" : "#8C4A2F";

  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none py-1 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-7 sm:h-9 object-cover"
        preserveAspectRatio="none"
      >
        {/* Top & Bottom Chord Lines */}
        <line x1="0" y1="8" x2="1200" y2="8" stroke={strokeColor} strokeWidth="2" />
        <line x1="0" y1="40" x2="1200" y2="40" stroke={strokeColor} strokeWidth="2" />

        {/* Center datum line */}
        <line x1="0" y1="24" x2="1200" y2="24" stroke={strokeColor} strokeWidth="0.75" strokeDasharray="6 6" />

        {/* Diagonal Web Members & Rivet Nodes */}
        {Array.from({ length: 25 }).map((_, i) => {
          const x1 = i * 48;
          const x2 = x1 + 48;
          const isEven = i % 2 === 0;

          return (
            <g key={i}>
              {/* Warren diagonal strut */}
              <line
                x1={x1}
                y1={isEven ? 8 : 40}
                x2={x2}
                y2={isEven ? 40 : 8}
                stroke={strokeColor}
                strokeWidth="1.5"
              />

              {/* Vertical king/queen post on every 2nd node */}
              {isEven && (
                <line x1={x1} y1="8" x2={x1} y2="40" stroke={strokeColor} strokeWidth="1" />
              )}

              {/* Engineering Node / Rivet Pin */}
              <circle cx={x1} cy={isEven ? 8 : 40} r="2.5" fill={i % 4 === 0 ? accentColor : strokeColor} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
