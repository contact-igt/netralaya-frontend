import { useEffect } from "react";

const ALLOWED_SOURCES = [
  "google",
  "facebook",
  "instagram",
  "twitter",
  "linkedin",
  "youtube"
];

export default function useUTMSource() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const newSource = params.get("utm_source");
      const existing = localStorage.getItem("utm_source");

      // 1. STRICT UTM validation (highest priority)
      if (isValidUTM(newSource)) {
        localStorage.setItem("utm_source", normalizeSource(newSource));
        return;
      }

      // 2. If already valid → keep it
      if (isValidUTM(existing)) return;

      // 3. Controlled referrer fallback (NOT raw hostname)
      const referrer = document.referrer;

      if (referrer) {
        const hostname = new URL(referrer).hostname;
        const mapped = mapReferrer(hostname);

        if (mapped) {
          localStorage.setItem("utm_source", mapped);
          return;
        }
      }

      // 4. fallback
      localStorage.setItem("utm_source", "direct");

    } catch {
      localStorage.setItem("utm_source", "direct");
    }
  }, []);
}


/* ---------- VALIDATION ---------- */

function isValidUTM(value) {
  if (!value) return false;

  const v = value.toLowerCase().trim();

  // reject hashes / garbage
  if (v.length > 20) return false;

  // reject IP addresses
  if (/^\d+\.\d+\.\d+\.\d+$/.test(v)) return false;

  // allow only known campaign sources
  return ALLOWED_SOURCES.includes(v);
}


/* ---------- NORMALIZATION ---------- */

function normalizeSource(value) {
  return value.toLowerCase().trim();
}


/* ---------- REFERRER MAPPING ---------- */

function mapReferrer(hostname) {
  if (!hostname) return null;

  if (hostname.includes("google")) return "google";
  if (hostname.includes("facebook")) return "facebook";
  if (hostname.includes("instagram")) return "instagram";
  if (hostname.includes("t.co") || hostname.includes("twitter")) return "twitter";
  if (hostname.includes("linkedin")) return "linkedin";
  if (hostname.includes("youtube")) return "youtube";

  return null;
}