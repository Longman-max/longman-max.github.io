'use client';

import { useEffect, useState } from 'react';
import Section from './Section';
import s from './StatusTerminal.module.css';

const fallback = {
  last_updated: "2026-06-24",
  building: "mlops-platform — UNSW-NB15 threat detection pipeline",
  reading: "Sutton & Barto — RL: An Introduction",
  location: "Lagos, NG",
  status: "open to internships + research roles"
};

export default function StatusTerminal() {
  const [data, setData] = useState<typeof fallback | null>(null);

  useEffect(() => {
    fetch('/status.json', {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then((r) => {
        if (!r.ok) throw new Error('Not ok');
        return r.text().then(text => {
          if (!text) throw new Error('Empty response');
          return JSON.parse(text);
        });
      })
      .then(setData)
      .catch(() => setData(fallback));
  }, []);

  if (!data) return null;

  return (
    <Section id="status" label="STATUS" count="04">
      <div className={s.terminalContainer}>
        <div className={s.terminal}>
          <div className={s.command}>$ cat ~/status.json</div>
          <div className={s.brace}>{"{"}</div>
          
          <div className={s.fieldRow}>
            <span className={s.key}>&quot;last_updated&quot;</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueLastUpdated}`}>&quot;{data.last_updated}&quot;,</span>
          </div>
          
          <div className={s.fieldRow}>
            <span className={s.key}>&quot;building&quot;</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueBuilding}`}>&quot;{data.building}&quot;,</span>
          </div>

          <div className={s.fieldRow}>
            <span className={s.key}>&quot;reading&quot;</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueReading}`}>&quot;{data.reading}&quot;,</span>
          </div>

          <div className={s.fieldRow}>
            <span className={s.key}>&quot;location&quot;</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueLocation}`}>&quot;{data.location}&quot;,</span>
          </div>

          <div className={s.fieldRow}>
            <span className={s.key}>&quot;status&quot;</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueStatus}`}>&quot;{data.status}&quot;</span>
          </div>

          <div className={s.brace}>{"}"}</div>
          <div className={s.cursorRow}>
            <span className={s.cursor} />
          </div>
        </div>
        <div className={s.lastSynced}>
          last synced {data.last_updated}
        </div>
      </div>
    </Section>
  );
}
