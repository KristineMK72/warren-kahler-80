export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #1b140d, #2d1d10, #120d08)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          width: "100%",
        }}
      >
        <p
          style={{
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#facc15",
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          The Original Ag Teacher
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 10vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          Warren Kahler
          <br />
          Turns 80 🐐
        </h1>

        <p
          style={{
            fontSize: "1.4rem",
            lineHeight: 1.7,
            color: "#e5e7eb",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Eighty years of wisdom, hard work, classroom stories,
          farm sense, legendary dad behavior, and just enough
          stubbornness to keep everybody on their toes.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#facc15",
              color: "black",
              border: "none",
              padding: "16px 28px",
              borderRadius: 999,
              fontWeight: 900,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            RSVP for the Warren Roast
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid rgba(255,255,255,0.2)",
              padding: "16px 28px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            View GOAT Stats
          </button>
        </div>

        <div
          style={{
            marginTop: 70,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {[
            ["Years of greatness", "80"],
            ["Students taught", "Countless"],
            ["Life lessons planted", "Thousands"],
            ["Bad excuses accepted", "0"],
            ["GOAT status", "Certified"],
            ["Things fixed with baling wire", "Classified"],
          ].map(([title, value]) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24,
                padding: 24,
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                style={{
                  color: "#a1a1aa",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontSize: 12,
                  marginBottom: 12,
                }}
              >
                {title}
              </p>

              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 80,
            color: "#9ca3af",
            fontSize: "0.95rem",
          }}
        >
          Built with love, mild chaos, and full GOAT respect for Warren Kahler.
        </p>
      </div>
    </main>
  );
}
