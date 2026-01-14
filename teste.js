import http from "k6/http";
import { check, sleep } from "k6";

const a = 970;

export const options = {
  vus: a,
  iterations: a,
};

const URL = "http://localhost:9998/sleep";

export default function () {
  const res = http.get(URL, { timeout: "6s" });

  const ok = check(res, {
    "status is 200": (r) => r.status === 200,
  });

  if (!ok) {
    console.error(
      `❌ status=${res.status} duration=${res.timings.duration}ms body=${res.body}`,
    );
  }

  sleep(1);
}
