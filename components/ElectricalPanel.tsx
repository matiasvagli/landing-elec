"use client";
import { useEffect, useState } from "react";

const BREAKERS = [
  { id: 1, label: "COCIНА", on: true },
  { id: 2, label: "BAÑO", on: true },
  { id: 3, label: "DORM 1", on: true },
  { id: 4, label: "DORM 2", on: false },
  { id: 5, label: "LIVING", on: true },
  { id: 6, label: "GARAGE", on: true },
  { id: 7, label: "EXT", on: false },
  { id: 8, label: "BOMBA", on: true },
  { id: 9, label: "A/C 1", on: true },
  { id: 10, label: "A/C 2", on: false },
  { id: 11, label: "OFIC", on: true },
  { id: 12, label: "SERV", on: true },
  { id: 13, label: "LAVAR", on: true },
  { id: 14, label: "MICRO", on: false },
  { id: 15, label: "TV", on: true },
  { id: 16, label: "ILUM", on: true },
];

export default function ElectricalPanel() {
  const [glowing, setGlowing] = useState<number[]>([]);
  const [tick, setTick] = useState(0);

  // Random flicker effect
  useEffect(() => {
    const interval = setInterval(() => {
      const active = BREAKERS.filter((b) => b.on).map((b) => b.id);
      const randomActive = active.filter(() => Math.random() > 0.15);
      setGlowing(randomActive);
      setTick((t) => t + 1);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setGlowing(BREAKERS.filter((b) => b.on).map((b) => b.id));
  }, []);

  const isGlowing = (id: number) => glowing.includes(id);

  const rows = [
    BREAKERS.slice(0, 4),
    BREAKERS.slice(4, 8),
    BREAKERS.slice(8, 12),
    BREAKERS.slice(12, 16),
  ];

  return (
    <svg
      viewBox="0 0 340 560"
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 0 40px rgba(251,191,36,0.15))" }}
    >
      <defs>
        {/* Panel glow filter */}
        <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="inner-shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.6" />
        </filter>
        {/* Metal gradient */}
        <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="30%" stopColor="#4b5563" />
          <stop offset="60%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        {/* Panel body gradient */}
        <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2533" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        {/* Breaker ON gradient */}
        <linearGradient id="breakerOnGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        {/* Breaker OFF */}
        <linearGradient id="breakerOffGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        {/* Amber glow */}
        <radialGradient id="amberGlow">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
        {/* Cable gradient */}
        <linearGradient id="cableGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
      </defs>

      {/* === OUTER ENCLOSURE === */}
      {/* Shadow */}
      <rect x="18" y="18" width="308" height="532" rx="10" fill="#000" opacity="0.5" />
      {/* Body */}
      <rect x="12" y="12" width="308" height="532" rx="8" fill="url(#metalGrad)" />
      {/* Top edge highlight */}
      <rect x="12" y="12" width="308" height="3" rx="2" fill="#6b7280" opacity="0.6" />
      {/* Left edge highlight */}
      <rect x="12" y="12" width="3" height="532" rx="2" fill="#6b7280" opacity="0.4" />
      {/* Bottom shadow */}
      <rect x="12" y="541" width="308" height="3" rx="2" fill="#000" opacity="0.5" />

      {/* === SCREWS (corners) === */}
      {[
        [28, 28], [296, 28], [28, 528], [296, 528],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill="#374151" stroke="#1f2937" strokeWidth="1" />
          <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy} stroke="#6b7280" strokeWidth="1" />
          <line x1={cx} y1={cy - 3} x2={cx} y2={cy + 3} stroke="#6b7280" strokeWidth="1" />
        </g>
      ))}

      {/* === INNER PANEL DOOR === */}
      <rect x="24" y="40" width="284" height="476" rx="4" fill="url(#panelGrad)" stroke="#1f2937" strokeWidth="1.5" />

      {/* === LABEL HEADER === */}
      <rect x="30" y="46" width="272" height="24" rx="3" fill="#0d1117" />
      <text x="166" y="62" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="3">
        TABLERO GENERAL
      </text>

      {/* === DIN RAIL TOP === */}
      <rect x="30" y="76" width="272" height="5" rx="1" fill="#374151" />
      <rect x="30" y="77" width="272" height="2" fill="#4b5563" />

      {/* === MAIN BREAKER === */}
      <g>
        {/* Housing */}
        <rect x="120" y="84" width="92" height="60" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1.5" />
        {/* Label */}
        <rect x="124" y="87" width="84" height="10" rx="2" fill="#0d1117" />
        <text x="166" y="95" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace" letterSpacing="1">PRINCIPAL</text>
        {/* Main switch body */}
        <rect x="128" y="100" width="76" height="38" rx="3" fill="#111827" />
        {/* Handle - ON position (up) */}
        <rect x="154" y="103" width="24" height="18" rx="2" fill="#dc2626" />
        <rect x="156" y="104" width="20" height="6" rx="1" fill="#ef4444" />
        <text x="166" y="131" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">ON</text>
        {/* Glow when on */}
        <rect x="148" y="98" width="36" height="26" rx="3" fill="#dc2626" opacity="0.08" filter="url(#glow-strong)" />
      </g>

      {/* === CURRENT INDICATOR LED === */}
      <circle cx="108" cy="114" r="5" fill="#22c55e" filter="url(#glow-soft)" />
      <circle cx="108" cy="114" r="3" fill="#4ade80" />
      {/* LED label */}
      <text x="108" y="128" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">V</text>

      {/* Voltmeter gauge decoration */}
      <circle cx="224" cy="114" r="5" fill="#fbbf24" opacity="0.8" filter="url(#glow-soft)" />
      <circle cx="224" cy="114" r="3" fill="#fcd34d" />
      <text x="224" y="128" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">Hz</text>

      {/* === DIN RAIL MIDDLE === */}
      <rect x="30" y="152" width="272" height="5" rx="1" fill="#374151" />
      <rect x="30" y="153" width="272" height="2" fill="#4b5563" />

      {/* === CIRCUIT BREAKERS GRID === */}
      {rows.map((row, rowIdx) => (
        <g key={rowIdx}>
          {/* Row DIN rail */}
          {rowIdx > 0 && (
            <rect x="30" y={168 + rowIdx * 72} width="272" height="3" rx="1" fill="#2d3748" />
          )}
          {row.map((breaker, colIdx) => {
            const x = 34 + colIdx * 66;
            const y = 160 + rowIdx * 72;
            const on = breaker.on;
            const lit = isGlowing(breaker.id);

            return (
              <g key={breaker.id}>
                {/* Breaker body */}
                <rect
                  x={x}
                  y={y}
                  width="58"
                  height="58"
                  rx="3"
                  fill={on ? "url(#breakerOnGrad)" : "url(#breakerOffGrad)"}
                  stroke={lit ? "#fbbf24" : "#1f2937"}
                  strokeWidth={lit ? "1.5" : "1"}
                />

                {/* Glow behind when active */}
                {lit && (
                  <rect
                    x={x - 2}
                    y={y - 2}
                    width="62"
                    height="62"
                    rx="4"
                    fill="#fbbf24"
                    opacity="0.07"
                    filter="url(#glow-strong)"
                  />
                )}

                {/* Label strip */}
                <rect x={x + 3} y={y + 3} width="52" height="10" rx="2" fill="#0d1117" />
                <text
                  x={x + 29}
                  y={y + 11}
                  textAnchor="middle"
                  fill={lit ? "#fbbf24" : "#4b5563"}
                  fontSize="6.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {breaker.label}
                </text>

                {/* Breaker handle */}
                <rect
                  x={x + 18}
                  y={y + 16}
                  width="22"
                  height="26"
                  rx="3"
                  fill={on ? "#1d4ed8" : "#374151"}
                  stroke={on ? "#3b82f6" : "#1f2937"}
                  strokeWidth="1"
                />
                {/* Handle position indicator */}
                <rect
                  x={x + 22}
                  y={on ? y + 18 : y + 30}
                  width="14"
                  height="8"
                  rx="2"
                  fill={on ? (lit ? "#fbbf24" : "#60a5fa") : "#4b5563"}
                />

                {/* ON/OFF text */}
                <text
                  x={x + 29}
                  y={y + 52}
                  textAnchor="middle"
                  fill={on ? (lit ? "#fbbf24" : "#3b82f6") : "#4b5563"}
                  fontSize="7"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {on ? "ON" : "OFF"}
                </text>
              </g>
            );
          })}
        </g>
      ))}

      {/* === DIN RAIL BOTTOM === */}
      <rect x="30" y="456" width="272" height="5" rx="1" fill="#374151" />
      <rect x="30" y="457" width="272" height="2" fill="#4b5563" />

      {/* === NEUTRAL / GROUND BAR === */}
      <rect x="34" y="464" width="264" height="16" rx="3" fill="#1f2937" stroke="#374151" strokeWidth="1" />
      <text x="166" y="475" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace" letterSpacing="2">
        NEUTROS · TIERRA
      </text>
      {/* Neutral terminals */}
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={i}>
          <rect x={38 + i * 16} y={464} width="10" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5" />
          <circle cx={43 + i * 16} cy={468} r="1.5" fill="#9ca3af" />
        </g>
      ))}

      {/* === CABLES COMING IN FROM BOTTOM === */}
      {[60, 90, 120, 150, 180, 210, 240, 270].map((x, i) => {
        const colors = ["#dc2626", "#1d4ed8", "#16a34a", "#374151", "#dc2626", "#1d4ed8", "#16a34a", "#374151"];
        return (
          <g key={i}>
            <rect x={x} y={484} width="8" height="28" rx="1" fill={colors[i]} opacity="0.8" />
            <rect x={x + 2} y={484} width="4" height="28" fill={colors[i]} opacity="0.4" />
          </g>
        );
      })}

      {/* Cable conduit */}
      <rect x="30" y="510" width="272" height="18" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1" />
      <text x="166" y="522" textAnchor="middle" fill="#374151" fontSize="7" fontFamily="monospace" letterSpacing="2">
        ALIMENTACIÓN
      </text>

      {/* === BRAND PLATE === */}
      <rect x="110" y="535" width="112" height="14" rx="2" fill="#0d1117" stroke="#374151" strokeWidth="0.5" />
      <text x="166" y="545" textAnchor="middle" fill="#374151" fontSize="6.5" fontFamily="monospace" letterSpacing="2">
        ELECTRICISTA MATÍAS
      </text>
    </svg>
  );
}
