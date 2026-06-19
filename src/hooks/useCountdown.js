import { useState, useEffect } from "react";

const EVENT_DAYS = [
  { year: 2026, month: 5, day: 6 },
  { year: 2026, month: 5, day: 7 },
  { year: 2026, month: 5, day: 13 },
  { year: 2026, month: 5, day: 14 },
  { year: 2026, month: 5, day: 20 },
  { year: 2026, month: 5, day: 21 },
  { year: 2026, month: 5, day: 27 },
  { year: 2026, month: 5, day: 28 },
];

const START = 18;
const END = 22;

function brasiliaParts() {
  const n = new Date();
  const f = (o) => parseInt(n.toLocaleString("en-US", { timeZone: "America/Sao_Paulo", ...o }));
  return {
    year: f({ year: "numeric" }),
    month: f({ month: "numeric" }) - 1,
    day: f({ day: "numeric" }),
    h: f({ hour: "numeric", hour12: false }),
    m: f({ minute: "numeric" }),
    s: f({ second: "numeric" }),
  };
}

function ts(year, month, day, h, m = 0, s = 0) {
  return Date.UTC(year, month, day, h + 3, m, s);
}

function calc() {
  const p = brasiliaParts();
  const now = ts(p.year, p.month, p.day, p.h, p.m, p.s);

  for (const e of EVENT_DAYS) {
    const start = ts(e.year, e.month, e.day, START);
    const end = ts(e.year, e.month, e.day, END);

    if (now >= start && now < end) {
      return { status: "happening" };
    }

    if (now < start) {
      const d = start - now;
      return {
        status: "before",
        days: Math.floor(d / 86400000),
        hours: Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000) / 60000),
        seconds: Math.floor((d % 60000) / 1000),
      };
    }
  }

  return { status: "over" };
}

export default function useCountdown() {
  const [state, setState] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setState(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}
