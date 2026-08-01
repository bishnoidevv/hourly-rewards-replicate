import { createFileRoute, useNavigate } from "@tanstack/react-router";

const TITLE = "Otwórz w przeglądarce";
const DESC = "Otwórz tę stronę w swojej przeglądarce, aby kontynuować.";

export const Route = createFileRoute("/")({
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
  component: Interstitial,
});

function Interstitial() {
  const navigate = useNavigate();

  return (
    <div className="gate-root">
      <div className="gate-card">
        <h1 className="gate-title">Otwórz przeglądarkę</h1>
        <p className="gate-text">{DESC}</p>
        <div className="arrow-container">
          <span />
          <span />
          <span />
        </div>
        <a
          className="gate-btn"
          href="/offer"
          onClick={(e) => {
            e.preventDefault();
            navigate({ to: "/offer" });
          }}
        >
          Otwórz teraz
        </a>
      </div>
    </div>
  );
}