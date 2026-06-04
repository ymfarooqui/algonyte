"use client";

import { useId, useState } from "react";
import Reveal from "@/components/Reveal";

function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

// Conservative: assume we recover half of the leads you currently miss-and-would-close.
const RECOVERY = 0.5;

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
};

function Slider({ label, value, min, max, step, display, onChange }: SliderProps) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-brand-deep">
          {label}
        </label>
        <span className="font-mono text-sm tabular-nums text-brand-deep">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-brand-primary"
      />
    </div>
  );
}

export default function RevenueCalculator() {
  const [leads, setLeads] = useState(200);
  const [ticket, setTicket] = useState(1500);
  const [missed, setMissed] = useState(35);
  const [close, setClose] = useState(25);

  const monthlyLost = leads * (missed / 100) * (close / 100) * ticket;
  const annualLost = monthlyLost * 12;
  const recoverable = annualLost * RECOVERY;

  return (
    <section className="section bg-brand-soft">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">The revenue leak</p>
          <h2 className="h-section">What missed leads cost you a year.</h2>
          <p className="lede mt-5">
            Drag the sliders to your numbers. This is the revenue walking out the door while
            the phone rings out, the form sits, and the DM goes cold.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Inputs */}
          <div className="rounded-2xl bg-white p-7 shadow-soft ring-1 ring-slate-200/70">
            <div className="space-y-7">
              <Slider
                label="Leads per month"
                value={leads}
                min={20}
                max={2000}
                step={10}
                display={leads.toLocaleString()}
                onChange={setLeads}
              />
              <Slider
                label="Average ticket"
                value={ticket}
                min={100}
                max={10000}
                step={100}
                display={money(ticket)}
                onChange={setTicket}
              />
              <Slider
                label="Leads missed or slow to answer"
                value={missed}
                min={10}
                max={60}
                step={1}
                display={`${missed}%`}
                onChange={setMissed}
              />
              <Slider
                label="Your close rate"
                value={close}
                min={5}
                max={50}
                step={1}
                display={`${close}%`}
                onChange={setClose}
              />
            </div>
          </div>

          {/* Outputs */}
          <div className="flex flex-col gap-5">
            <div className="flex-1 rounded-2xl border border-rose-200 bg-rose-50 p-7">
              <p className="text-sm font-medium text-rose-900">Walking out the door every year</p>
              <p className="mt-2 text-4xl font-semibold tabular-nums text-rose-600 sm:text-5xl">
                {money(annualLost)}
              </p>
              <p className="mt-2 text-sm text-rose-900/70">
                {money(monthlyLost)} a month in jobs you never got to quote.
              </p>
            </div>
            <div className="flex-1 rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
              <p className="text-sm font-medium text-emerald-900">
                Recoverable with AlgoNyte answering 24/7
              </p>
              <p className="mt-2 text-4xl font-semibold tabular-nums text-emerald-600 sm:text-5xl">
                {money(recoverable)}
              </p>
              <p className="mt-2 text-sm text-emerald-900/70">
                A conservative half of what you&rsquo;re missing, answered and booked while you
                work.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-xs text-brand-muted">
          Estimate only, from the numbers you enter. Recovery assumes we capture half the leads
          you currently miss — your results depend on your market and follow-up.
        </p>
      </div>
    </section>
  );
}
