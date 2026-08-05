import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import appLogo from "@/assets/app-logo.png";
import gameImg from "@/assets/game-garden.png";

const TITLE = "Freecash — Zarabiaj na Graniu";
const DESC =
  "Zarabiaj prawdziwe pieniądze grając w gry, wykonując zadania i testując aplikacje. Wypłacaj w dowolnym momencie — bez minimum.";

export const Route = createFileRoute("/offer")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Your base affiliate link
const BASE_URL = "https://giftclick.org/aff_c?tl_id=6db1bd1d";

const NOTIFICATIONS = [
  { name: "Jakub R.", amount: "80.00" },
  { name: "Anna M.", amount: "53.45" },
  { name: "Carlos T.", amount: "39.80" },
  { name: "Maja S.", amount: "67.25" },
  { name: "Dawid L.", amount: "41.60" },
  { name: "Aleksandra K.", amount: "55.90" },
  { name: "Jan P.", amount: "39.15" },
  { name: "Tomek B.", amount: "78.50" },
  { name: "Szymon R.", amount: "42.35" },
  { name: "Marek W.", amount: "54.70" },
  { name: "Kasia F.", amount: "40.20" },
  { name: "Natalia G.", amount: "66.40" },
];

const STEPS = [
  "Zarejestruj się na Freecash (wybierz 21+)",
  "Graj w gry i wykonuj zadania",
  "Wypłacaj przez PayPal, Visa lub Krypto",
];

function Index() {
  const [notifIndex, setNotifIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [liveCount, setLiveCount] = useState(1845);
  const [modalOpen, setModalOpen] = useState(false);
  const [masterUrl, setMasterUrl] = useState(BASE_URL + "&sub1=1");

  // This is the important part
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const campaignName = params.get("source"); // comes from TikTok

    if (campaignName) {
      // Put campaign name into sub1
      setMasterUrl(BASE_URL + "&sub1=" + encodeURIComponent(campaignName));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setNotifIndex((i) => (i + 1) % NOTIFICATIONS.length);
        setExiting(false);
      }, 370);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((c) => {
        const next = c + Math.floor(Math.random() * 7) - 3;
        return next < 1700 ? 1700 + Math.floor(Math.random() * 50) : next;
      });
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const notif = NOTIFICATIONS[notifIndex] ?? NOTIFICATIONS[0]!;

  return (
    <div className="fc-root">
      <div className="page-wrapper">
        <div className="notif-bar">
          <div className={`notif-inner${exiting ? " exit" : ""}`}>
            <span className="notif-flag">🇵🇱</span>
            <strong>{notif.name}</strong> właśnie zarobił{" "}
            <span className="notif-amount">{notif.amount} zł</span> — wypłacone natychmiast
          </div>
        </div>

        <div className="fc-card hero-card">
          <div className="hero-glow" />
          <div className="hero-logo-wrap">
            <img
              className="hero-logo"
              src={appLogo}
              alt="Logo Freecash"
              width={92}
              height={92}
            />
          </div>
          <div>
            <span className="hero-rating">
              <span className="stars">★★★★★</span>
              <span>4.7</span>
              <span className="divider">·</span>
              <span>App Store</span>
              <span className="reviews">(50 tys.+ opinii)</span>
            </span>
          </div>
          <h1 className="hero-headline">
            Zarabiaj <br />
            <span className="accent">na graniu</span>
          </h1>
          <p className="hero-sub">{DESC}</p>
          <div>
            <span className="live-status">
              <span className="live-dot" />
              <span>{liveCount.toLocaleString("en-US")}</span> osoby zarabiają w tej chwili
            </span>
          </div>
        </div>

        <div className="fc-card game-card">
          <div className="game-row">
            <div className="game-img-wrap">
              <img
                className="game-img"
                src={gameImg}
                alt="Gra Gardenscapes"
                loading="lazy"
                width={76}
                height={76}
              />
            </div>
            <div className="game-info">
              <div className="game-title">Gardenscapes</div>
              <div className="game-rating">
                <span className="stars">★★★★★</span> 4.8 · Najwyżej oceniane
              </div>
              <div className="game-pay">
                <span aria-hidden="true">🔥</span> Meilleure offre du jour
              </div>
            </div>
          </div>
          <hr className="steps-divider" />
          <div className="steps-label">Jak to działa</div>
          <ol className="steps-list">
            {STEPS.map((step, i) => (
              <li className="step-item" key={step}>
                <span className="step-num">{i + 1}</span>
                <span className="step-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="trust-strip">
          <div className="trust-item">
            <span className="trust-num">200 mln zł+</span>
            <span className="trust-desc">Wypłacono</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">4.7★</span>
            <span className="trust-desc">Ocena App</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">0 zł</span>
            <span className="trust-desc">za dołączenie</span>
          </div>
        </div>

        <p className="disclaimer">
          Dostępność, nagrody i kwalifikowalność mogą się różnić w zależności od użytkownika,
          lokalizacji i wykonanego zadania. Wyniki nie są gwarantowane i zależą od indywidualnego
          zaangażowania. Zarobki różnią się w zależności od oferty.
        </p>

        <div className="legal-links">
          <a href={masterUrl}>Polityka Prywatności</a>
          <span className="legal-sep" />
          <a href={masterUrl}>Regulamin</a>
        </div>
      </div>

      <div className="sticky-cta">
        <div className="cta-eyebrow">
          <span className="dot" />
          Dostępne teraz na iOS i Android
        </div>
        <div className="cta-buttons">
          <button type="button" className="btn-store btn-ios" onClick={() => setModalOpen(true)}>
            <svg fill="currentColor" height="20" viewBox="0 0 814 1000" width="18">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46 790.7 0 663.2 0 541.8 0 347.4 103.7 248 205 248c66.5 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
            </svg>
            <span className="btn-store-label">
              <span className="btn-store-sub">Pobierz w</span>
              <span className="btn-store-main">App Store</span>
            </span>
          </button>
          <button
            type="button"
            className="btn-store btn-android"
            onClick={() => setModalOpen(true)}
          >
            <svg fill="currentColor" height="20" viewBox="0 0 512 512" width="18">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l232.6-233L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.7 17.1-34.4-.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <span className="btn-store-label">
              <span className="btn-store-sub">Pobierz z</span>
              <span className="btn-store-main">Google Play</span>
            </span>
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="pre-go-overlay" onClick={() => setModalOpen(false)}>
          <div className="pre-go-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="pre-go-close"
              aria-label="Zamknij"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <p className="pre-go-kicker">Szybka wskazówka</p>
            <h2 className="pre-go-title">
              Wybierz <span className="pre-go-accent">21+</span> podczas rejestracji
            </h2>
            <p className="pre-go-desc">
              To odblokowuje najwyżej płatne oferty gier na Freecash. Nie pomijaj tego kroku.
            </p>
            <a className="pre-go-btn" href={masterUrl}>
              Rozumiem →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
