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
        return r.json();
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
            <span className={s.key}>"last_updated"</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueLastUpdated}`}>"{data.last_updated}",</span>
          </div>
          
          <div className={s.fieldRow}>
            <span className={s.key}>"building"</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueBuilding}`}>"{data.building}",</span>
          </div>

          <div className={s.fieldRow}>
            <span className={s.key}>"reading"</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueReading}`}>"{data.reading}",</span>
          </div>

          <div className={s.fieldRow}>
            <span className={s.key}>"location"</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueLocation}`}>"{data.location}",</span>
          </div>

          <div className={s.fieldRow}>
            <span className={s.key}>"status"</span>
            <span className={s.colon}>:</span>
            <span className={`${s.value} ${s.valueStatus}`}>"{data.status}"</span>
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
