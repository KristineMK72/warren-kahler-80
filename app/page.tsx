const photos = [
  "/warren/IMG_1209.jpeg",
  "/warren/IMG_1192.jpeg",
  "/warren/IMG_1193.jpeg",
  "/warren/IMG_1194.jpeg",
  "/warren/IMG_1195.jpeg",
  "/warren/IMG_1199.jpeg",
  "/warren/IMG_1200.jpeg",
  "/warren/IMG_1201.jpeg",
  "/warren/IMG_1202.jpeg",
  "/warren/IMG_1203.jpeg",
  "/warren/IMG_1204.jpeg",
  "/warren/IMG_1205.jpeg",
  "/warren/IMG_1206.jpeg",
  "/warren/IMG_1207.jpeg",
  "/warren/IMG_1208.jpeg",
];

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=124%20Front%20St%2C%20Brainerd%2C%20MN%2056401";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/warren/IMG_1215.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          minHeight: "100vh",
          padding: "48px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            width: "100%",
            background: "rgba(0,0,0,0.48)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 36,
            padding: "42px 24px",
            boxShadow: "0 25px 80px rgba(0,0,0,0.45)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#facc15",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            The Ag Teacher, The Dad, The Legend
          </p>

          <h1
            style={{
              fontSize: "clamp(3.2rem, 11vw, 7.5rem)",
              lineHeight: 0.95,
              fontWeight: 900,
              margin: "20px 0",
              textShadow: "0 8px 30px rgba(0,0,0,0.75)",
            }}
          >
            Warren (Tony) Kahler
            <br />
            Turns 80
            <br />
            🐐
          </h1>

          <p
            style={{
              maxWidth: 760,
              margin: "0 auto",
              fontSize: "1.25rem",
              lineHeight: 1.65,
              color: "#f3f4f6",
            }}
          >
            Eighty years of wisdom, hard work, classroom stories, farm sense,
            legendary dad behavior, and fully certified GOAT status. Join us in
            a T(R)oast to starting the 8th decade of Warren!
          </p>

          <div
            style={{
              margin: "34px auto",
              maxWidth: 620,
              background: "rgba(0,0,0,0.62)",
              border: "1px solid rgba(250,204,21,0.5)",
              borderRadius: 28,
              padding: 24,
            }}
          >
            <h2 style={{ margin: 0, color: "#facc15", fontSize: "1.8rem" }}>
              Party Details
            </h2>

            <p style={{ fontSize: "1.15rem", margin: "14px 0 0" }}>
              <strong>Date:</strong> TBD — July 18th or 19th
            </p>

            <p style={{ fontSize: "1.15rem", margin: "10px 0 0" }}>
              <strong>Location:</strong> Eagles Club, Brainerd, MN
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                margin: "10px 0 0",
                opacity: 0.92,
              }}
            >
              <strong>Address:</strong> 124 Front St, Brainerd, MN 56401
            </p>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 18,
                background: "rgba(250,204,21,0.95)",
                color: "black",
                textDecoration: "none",
                padding: "13px 24px",
                borderRadius: 999,
                fontWeight: 900,
              }}
            >
              📍 Get Directions
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 28,
            }}
          >
            <a
              href="#rsvp"
              style={{
                display: "inline-block",
                background: "#facc15",
                color: "black",
                textDecoration: "none",
                padding: "16px 28px",
                borderRadius: 999,
                fontWeight: 900,
              }}
            >
              RSVP for Warren’s Party
            </a>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "2px solid rgba(250,204,21,0.65)",
                color: "white",
                textDecoration: "none",
                padding: "16px 28px",
                borderRadius: 999,
                fontWeight: 900,
                background: "rgba(0,0,0,0.45)",
              }}
            >
              📍 Directions
            </a>

            <a
              href="#photos"
              style={{
                display: "inline-block",
                border: "2px solid rgba(255,255,255,0.25)",
                color: "white",
                textDecoration: "none",
                padding: "16px 28px",
                borderRadius: 999,
                fontWeight: 800,
                background: "rgba(0,0,0,0.45)",
              }}
            >
              📸
            </a>
          </div>
        </div>
      </section>

      {/* keep the rest of your existing page exactly the same */}
    </main>
  );
}
