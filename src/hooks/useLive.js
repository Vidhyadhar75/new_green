import { useState, useEffect } from "react";

/**
 * Simulates a live sensor value that fluctuates around a base reading.
 * @param {number} base    - Centre value
 * @param {number} range   - Max deviation either side
 * @param {number} dec     - Decimal places
 * @param {number} ms      - Update interval in milliseconds
 */
export default function useLive(base, range, dec = 1, ms = 2200) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const t = setInterval(
      () => setV(+(base + (Math.random() - 0.5) * 2 * range).toFixed(dec)),
      ms
    );
    return () => clearInterval(t);
  }, [base, range, dec, ms]);
  return v;
}
