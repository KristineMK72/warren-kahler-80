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
            Eighty years of wisdom, hard work, classroom stories,
            farm sense, legendary dad behavior, and fully certified
            GOAT status.
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

            <p style={{ fontSize: "1.05rem", margin: "10px 0 0", opacity: 0.92 }}>
              <strong>Address:</strong> 124 Front St, Brainerd, MN 56401
            </p>
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
              View Memories
            </a>
          </div>
        </div>
      </section>

      <section
        id="photos"
        style={{
          padding: "30px 18px 70px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "rgba(0,0,0,0.52)",
            backdropFilter: "blur(10px)",
            borderRadius: 36,
            padding: "34px 20px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 7vw, 4rem)",
              marginBottom: 10,
              color: "#facc15",
              textAlign: "center",
            }}
          >
            Memories of a Legend
          </h2>

          <p
            style={{
              color: "#d1d5db",
              marginBottom: 28,
              textAlign: "center",
            }}
          >
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
        id="rsvp"
        style={{
          padding: "70px 18px",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 28,
            padding: 36,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#facc15",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              marginTop: 0,
            }}
          >
            RSVP
          </h2>

          <p
            style={{
              color: "#e5e7eb",
              lineHeight: 1.7,
              fontSize: "1.1rem",
            }}
          >
            We’d love to celebrate Warren with you.
            More details coming soon.
          </p>

          <a
            href="mailto:kkahler190@gmail.com?subject=Warren%2080%20RSVP"
            style={{
              display: "inline-block",
              marginTop: 24,
              background: "#facc15",
              color: "black",
              textDecoration: "none",
              padding: "16px 32px",
              borderRadius: 999,
              fontWeight: 900,
              fontSize: "1rem",
            }}
          >
            RSVP by Email
          </a>
        </div>
      </section>

      <section
        style={{
          padding: "54px 18px 80px",
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
                background: "rgba(0,0,0,0.52)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.08)",
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

        <p
          style={{
            textAlign: "center",
            marginTop: 48,
            color: "#d1d5db",
          }}
        >
          Built with love, mild chaos, and full GOAT respect for Warren Kahler.
        </p>
      </section>
    </main>
  );
}
