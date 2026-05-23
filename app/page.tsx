const photos = ["/warren/IMG_1209.jpeg"];

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=124%20Front%20St%2C%20Brainerd%2C%20MN%2056401";

const confetti = [
  "4%",
  "10%",
  "16%",
  "22%",
  "28%",
  "34%",
  "40%",
  "46%",
  "52%",
  "58%",
  "64%",
  "70%",
  "76%",
  "82%",
  "88%",
  "94%",
];

const sparkles = [
  ["6%", "12%"],
  ["14%", "68%"],
  ["24%", "28%"],
  ["36%", "82%"],
  ["50%", "18%"],
  ["62%", "58%"],
  ["74%", "34%"],
  ["86%", "74%"],
  ["94%", "42%"],
];

const sparkleColors = ["#ef4444", "#ffffff", "#2563eb", "#facc15"];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/warren/IMG_0121.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }

        @keyframes fall {
          0% { transform: translateY(-20vh) rotate(0deg); opacity: 0; }
          8% { opacity: 1; }
          100% { transform: translateY(125vh) rotate(900deg); opacity: 0; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: .45; transform: scale(.85) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.45) rotate(25deg); }
        }

        @media (max-width: 700px) {
          main {
            background-attachment: scroll !important;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {confetti.map((left, index) => (
          <span
            key={left}
            style={{
              position: "absolute",
              top: "-40px",
              left,
              width: 14,
              height: 24,
              borderRadius: 4,
              background:
                index % 3 === 0
                  ? "#ef4444"
                  : index % 3 === 1
                  ? "#ffffff"
                  : "#2563eb",
              boxShadow: "0 0 14px rgba(255,255,255,0.55)",
              animation: `fall ${6 + index * 0.45}s linear infinite`,
              animationDelay: `${index * 0.35}s`,
              opacity: 0.95,
            }}
          />
        ))}

        {sparkles.map(([left, top], index) => (
          <span
            key={`${left}-${top}`}
            style={{
              position: "absolute",
              left,
              top,
              color: sparkleColors[index % sparkleColors.length],
              fontSize: index % 2 === 0 ? 34 : 26,
              fontWeight: 900,
              animation: `twinkle ${1.8 + index * 0.18}s ease-in-out infinite`,
              animationDelay: `${index * 0.25}s`,
              textShadow: `
                0 0 8px currentColor,
                0 0 18px currentColor,
                0 0 32px rgba(255,255,255,0.9)
              `,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <section
        style={{
          minHeight: "100vh",
          padding: "48px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            width: "100%",
            background: "rgba(0,0,0,0.5)",
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
              maxWidth: 640,
              background: "rgba(0,0,0,0.64)",
              border: "1px solid rgba(250,204,21,0.5)",
              borderRadius: 28,
              padding: 24,
            }}
          >
            <h2 style={{ margin: 0, color: "#facc15", fontSize: "1.8rem" }}>
              Party Details
            </h2>

            <p style={{ fontSize: "1.15rem", margin: "14px 0 0" }}>
              <strong>Date:</strong> Friday, July 18th
            </p>

            <p style={{ fontSize: "1.15rem", margin: "10px 0 0" }}>
              <strong>Time:</strong> 1:00 PM – 4:00 PM
            </p>

            <p style={{ fontSize: "1.15rem", margin: "10px 0 0" }}>
              <strong>Location:</strong> Eagles Club — Downstairs, Brainerd, MN
            </p>

            <p style={{ fontSize: "1.05rem", margin: "10px 0 0", opacity: 0.92 }}>
              <strong>Address:</strong> 124 Front St, Brainerd, MN 56401
            </p>

            <p style={{ marginTop: 16, color: "#f3f4f6", lineHeight: 1.6 }}>
              Join us for an afternoon celebrating Warren’s 80th birthday with
              stories, laughs, memories, and a proper T(R)oast honoring the ag
              teacher legend himself.
            </p>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 18,
                background: "#facc15",
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
              RSVP + Roast / Toast
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

      <section id="photos" style={{ padding: "30px 18px 70px", position: "relative", zIndex: 2 }}>
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
            The Legend
          </h2>

          <p style={{ color: "#f3f4f6", marginBottom: 28, textAlign: "center" }}>
            🎉🎂🥳🎊🎁🎈
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

      <section id="rsvp" style={{ padding: "70px 18px", position: "relative", zIndex: 2 }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            background: "rgba(0,0,0,0.58)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 28,
            padding: 36,
            textAlign: "center",
            boxShadow: "0 25px 80px rgba(0,0,0,0.45)",
          }}
        >
          <h2
            style={{
              color: "#facc15",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              marginTop: 0,
              marginBottom: 12,
            }}
          >
            RSVP + Roast / Toast 🍻🐐
          </h2>

          <p
            style={{
              color: "#f3f4f6",
              lineHeight: 1.8,
              fontSize: "1.12rem",
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            We’d love for you to join us in celebrating Warren’s 80th birthday!
            <br />
            <br />
            And yes — Warren roasts are strongly encouraged. The wittier the
            better. 😂
            <br />
            <br />
            Share your favorite story, roast, toast, legendary Warren moment,
            or classic “ag teacher wisdom” with your RSVP.
          </p>

          <a
            href="mailto:kkahler190@gmail.com?subject=Warren%2080%20RSVP%20%2B%20Roast%2FToast"
            style={{
              display: "inline-block",
              marginTop: 30,
              background: "#facc15",
              color: "black",
              textDecoration: "none",
              padding: "18px 34px",
              borderRadius: 999,
              fontWeight: 900,
              fontSize: "1rem",
              boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
            }}
          >
            RSVP + Submit Your Roast / Toast 🐐
          </a>
        </div>
      </section>

      <section style={{ padding: "54px 18px 80px", position: "relative", zIndex: 2 }}>
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
                  color: "#f3f4f6",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: 12,
                }}
              >
                {title}
              </p>

              <p style={{ color: "#facc15", fontSize: "1.7rem", fontWeight: 900 }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 48,
            color: "#000000",
            fontWeight: 800,
            textShadow: "0 1px 10px rgba(255,255,255,0.7)",
          }}
        >
          Schemed with love by Kris, Tom, Mike, Em, and Steve — aka the Kahler Kids.
        </p>
      </section>
    </main>
  );
}
