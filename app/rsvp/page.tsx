"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function RSVPPage() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [roast, setRoast] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !attending) {
      setStatus("error");
      return;
    }

    setStatus("saving");

    const { error } = await supabase.from("party_rsvps").insert({
      name: name.trim(),
      attending: attending === "yes",
      roast: roast.trim(),
    });

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    setStatus("success");
    setName("");
    setAttending("");
    setRoast("");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1d4ed8 0%, #111827 45%, #020617 100%)",
        color: "white",
        padding: "40px 18px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 28,
          padding: 28,
          boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 style={{ fontSize: 42, margin: "0 0 10px", lineHeight: 1 }}>
          RSVP & Leave a Roast 🎤
        </h1>

        <p style={{ fontSize: 18, opacity: 0.9 }}>
          Let us know if you’re coming — and leave Tony a toast, roast, memory,
          or message. The wittier the better.
        </p>

        {status === "success" ? (
          <div
            style={{
              marginTop: 28,
              padding: 24,
              borderRadius: 22,
              background: "rgba(34,197,94,0.18)",
              border: "1px solid rgba(134,239,172,0.7)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>You’re in! 🎉</h2>
            <p>Your RSVP and roast/toast were submitted.</p>

            <a
              href="/"
              style={{
                display: "inline-block",
                marginTop: 12,
                color: "#fff",
                fontWeight: 800,
              }}
            >
              Back to party page
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: 26 }}>
            <label style={{ display: "block", fontWeight: 800 }}>
              Your name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              style={inputStyle}
            />

            <label
              style={{
                display: "block",
                fontWeight: 800,
                marginTop: 20,
              }}
            >
              Will you be there?
            </label>

            <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
              <button
                type="button"
                onClick={() => setAttending("yes")}
                style={{
                  ...choiceStyle,
                  background:
                    attending === "yes" ? "#facc15" : "rgba(255,255,255,0.15)",
                  color: attending === "yes" ? "#111827" : "white",
                }}
              >
                Yes 🎉
              </button>

              <button
                type="button"
                onClick={() => setAttending("no")}
                style={{
                  ...choiceStyle,
                  background:
                    attending === "no" ? "#facc15" : "rgba(255,255,255,0.15)",
                  color: attending === "no" ? "#111827" : "white",
                }}
              >
                No, but sending love
              </button>
            </div>

            <label
              style={{
                display: "block",
                fontWeight: 800,
                marginTop: 22,
              }}
            >
              Roast, toast, memory, or message
            </label>

            <textarea
              value={roast}
              onChange={(e) => setRoast(e.target.value)}
              placeholder="Write as much as you want..."
              rows={9}
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: 180,
              }}
            />

            {status === "error" && (
              <p style={{ color: "#fecaca", fontWeight: 800 }}>
                Please add your name and choose yes or no.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "saving"}
              style={{
                marginTop: 22,
                width: "100%",
                border: 0,
                borderRadius: 999,
                padding: "16px 22px",
                fontSize: 18,
                fontWeight: 900,
                background: "#dc2626",
                color: "white",
                cursor: "pointer",
                boxShadow: "0 12px 30px rgba(220,38,38,0.35)",
              }}
            >
              {status === "saving"
                ? "Submitting..."
                : "Send your RSVP & roast 🎤"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  marginTop: 8,
  border: "1px solid rgba(255,255,255,0.35)",
  borderRadius: 18,
  padding: "14px 16px",
  fontSize: 16,
  background: "rgba(255,255,255,0.92)",
  color: "#111827",
};

const choiceStyle: React.CSSProperties = {
  flex: 1,
  border: "1px solid rgba(255,255,255,0.35)",
  borderRadius: 999,
  padding: "13px 16px",
  fontSize: 16,
  fontWeight: 900,
  cursor: "pointer",
};
