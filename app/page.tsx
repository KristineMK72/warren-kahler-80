const photos = [
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
  "/warren/IMG_1209.jpeg",
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.9)), url('/IMG_1215.jpeg')",
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
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1100, width: "100%" }}>
          <p
            style={{
              color: "#facc15",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            The Original Ag Teacher
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
            Warren Kahler
            <br />
            Turns 80 🐐
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
            Eighty years of wisdom, hard work, farm sense, classroom stories,
            legendary dad behavior, and full certified GOAT status.
          </p>

          <div
            style={{
              margin: "34px auto",
              maxWidth: 620,
              background: "rgba(0,0,0,0.62)",
              border: "1px solid rgba(250,204,21,0.5)",
              borderRadius: 28,
              padding: 24,
              boxShadow: "0 25px 70px rgba(0,0,0,0.45)",
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

            <p style={{ fontSize: "1.05rem", margin: "10px 0 0", opacity: 0.92 }}>
              <strong>Address:</strong> 124 Front St, Brainerd, MN 56401
            </p>
          </div>

          <a
            href="#photos"
            style={{
              display: "inline-block",
              background: "#facc15",
              color: "black",
              textDecoration: "none",
              padding: "16px 28px",
              borderRadius: 999,
              fontWeight: 900,
              boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
            }}
          >
            Scroll Warren Memories
          </a>
        </div>
      </section>

      <section
        id="photos"
        style={{
          padding: "30px 18px 70px",
          background: "rgba(0,0,0,0.72)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 7vw, 4rem)",
              marginBottom: 10,
              color: "#facc15",
            }}
          >
            Memories of a Legend
          </h2>

          <p style={{ color: "#d1d5db", marginBottom: 28 }}>
            Swipe sideways to scroll through Warren’s photos.
          </p>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: 18,
              padding: "10px 4px 28px",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {photos.map((src, index) => (
              <div
                key={src}
                style={{
                  flex: "0 0 min(84vw, 430px)",
                  height: 520,
                  borderRadius: 28,
                  overflow: "hidden",
                  scrollSnapAlign: "center",
                  border: "3px solid rgba(250,204,21,0.55)",
                  background: "rgba(0,0,0,0.5)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={src}
                  alt={`Warren Kahler memory ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "54px 18px 80px",
          background: "rgba(10,8,5,0.9)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 18,
          }}
        >
          {[
            ["Years of greatness", "80"],
            ["Students taught", "Countless"],
            ["Life lessons planted", "Thousands"],
            ["Bad excuses accepted", "0"],
            ["GOAT status", "Certified"],
            ["Baling wire repairs", "Classified"],
          ].map(([title, value]) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 22,
                padding: 22,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#d1d5db",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: 12,
                }}
              >
                {title}
              </p>
              <p
                style={{
                  color: "#facc15",
                  fontSize: "1.7rem",
                  fontWeight: 900,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 48, color: "#d1d5db" }}>
          Built with love, mild chaos, and full GOAT respect for Warren Kahler.
        </p>
      </section>
    </main>
  );
}
