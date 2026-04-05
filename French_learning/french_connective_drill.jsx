import { useState, useCallback } from "react";

const CONNECTIVES = {
  A2: "et, aussi, de plus, mais, pourtant, parce que, car, donc, alors, d'abord, ensuite, enfin, puis, si",
  B1: "par ailleurs, en revanche, cependant, grâce à, à cause de, c'est pourquoi, bien que (+subj), même si, par exemple, notamment, puisque, étant donné que, dès que, à condition que, en outre, si bien que, ainsi, par conséquent",
  B2: "or, il n'en demeure pas moins que, qui plus est, voire, au point que, si bien que, d'autant plus que, pour autant, à ceci près que, faute de, sans compter que, quand bien même, certes…mais, de sorte que",
  C1: "quelque…que (+subj), si…que, pour peu que, à supposer que, en admettant que, partant de là, il s'ensuit que, force est de constater que, tout en + participe, non sans + infinitif, non seulement…mais encore",
};

const DRILL_PROMPTS = {
  "Chunk launcher": `Generate one French connective chunk-launcher exercise. Give a connective chunk (a natural sentence-opener) and a SHORT situational prompt in English for the learner to complete aloud. Vary topics (society, daily life, environment, work, culture). Return ONLY valid JSON: {"chunk":"...","prompt":"...","example":"...full French sentence using the chunk..."}`,
  "Sentence fusion": `Generate one French sentence-fusion exercise. Give two short French sentences for the learner to merge with one connective. Include the logical relationship and 2-3 connective options as hint. Return ONLY valid JSON: {"s1":"...","s2":"...","rel":"e.g. Cause / Contrast / Concession","hint":"conn1 · conn2","example":"...fused sentence..."}`,
  "Expansion move": `Generate one French expansion-move exercise. Give one short French base sentence and instruct the learner to expand it with a specific logical move (reason/contrast/consequence/concession/example/condition). List 2-3 connector options. Return ONLY valid JSON: {"base":"...","move":"Add a CONTRAST","conn":"pourtant · cependant","example":"...expanded sentence..."}`,
};

const LEVELS = ["A2", "B1", "B2", "C1"];
const DRILLS = ["Chunk launcher", "Sentence fusion", "Expansion move"];
const LEVEL_COLOR = { A2: "#2e7d58", B1: "#1a5fa8", B2: "#b06000", C1: "#8b1a1a" };

async function fetchExercise(level, drill) {
  const words = CONNECTIVES[level].split(", ");
  const chosen = words[Math.floor(Math.random() * words.length)];
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: `You are a French drill generator for level ${level}. You MUST build this exercise around the connective: "${chosen}". Return only raw JSON, no markdown.`,
      messages: [{ role: "user", content: DRILL_PROMPTS[drill] }],
    }),
  });
  const data = await res.json();
  const raw = data.content?.find(b => b.type === "text")?.text || "";
  return JSON.parse(raw.replace(/```json|```/g, "").trim());
}

const st = {
  wrap: { maxWidth: 560, margin: "0 auto", padding: "16px 8px", fontFamily: "system-ui,sans-serif" },
  title: { textAlign: "center", fontSize: 15, fontWeight: 600, color: "#2a2a2a", marginBottom: 14 },
  row: { display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap", marginBottom: 10 },
  card: { background: "#fff", borderRadius: 14, border: "1px solid #e0e0e0", padding: 22, minHeight: 240, marginTop: 12 },
  lbl: { fontSize: 11, textTransform: "uppercase", letterSpacing: ".08em", color: "#aaa", marginBottom: 5 },
  chunk: { display: "inline-block", background: "#f0f0ff", border: "1.5px solid #8888cc", borderRadius: 7, padding: "5px 14px", fontSize: 18, fontWeight: 700, color: "#3030a0", fontStyle: "italic", marginBottom: 10 },
  prompt: { fontSize: 14, color: "#444", lineHeight: 1.7, marginBottom: 14 },
  sbox: { background: "#f8f8f8", borderRadius: 7, padding: "9px 12px", fontSize: 14, color: "#444", border: "1px solid #eee", marginBottom: 6 },
  base: { background: "#f8f6ff", borderLeft: "3px solid #8080cc", borderRadius: 6, padding: "9px 13px", fontSize: 14, color: "#333", marginBottom: 8 },
  move: { background: "#f0faf0", borderLeft: "3px solid #4caf50", borderRadius: 6, padding: "7px 13px", fontSize: 13, color: "#2d6a2d", marginBottom: 8 },
  conn: { fontSize: 12, background: "#e8fce8", color: "#1b5e20", borderRadius: 4, padding: "1px 7px", fontStyle: "italic" },
  ex: { marginTop: 14, background: "#fffbe6", border: "1px solid #e8c840", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#4a3800", lineHeight: 1.7 },
  exlbl: { fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: "#aaa", display: "block", marginBottom: 4 },
  nav: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 14 },
  center: { textAlign: "center", padding: 40, color: "#aaa" },
};

function LBtn({ label, active, color, onClick }) {
  return <button onClick={onClick} style={{ padding: "5px 16px", borderRadius: 999, border: `1.5px solid ${active ? color : "#ccc"}`, background: active ? color : "#fff", color: active ? "#fff" : "#666", cursor: "pointer", fontSize: 13, fontWeight: 500 }}>{label}</button>;
}

function DBtn({ label, active, onClick }) {
  return <button onClick={onClick} style={{ padding: "4px 12px", borderRadius: 7, border: `1px solid ${active ? "#888" : "#ccc"}`, background: active ? "#eee" : "#fff", color: active ? "#111" : "#666", cursor: "pointer", fontSize: 12, fontWeight: active ? 500 : 400 }}>{label}</button>;
}

function ActionBtn({ label, color, onClick }) {
  return <button onClick={onClick} style={{ padding: "8px 20px", borderRadius: 8, border: `1.5px solid ${color}`, background: color, color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 500 }}>{label}</button>;
}

function GhostBtn({ label, onClick }) {
  return <button onClick={onClick} style={{ padding: "7px 18px", borderRadius: 7, border: "1.5px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 13, color: "#555" }}>{label}</button>;
}

function CardContent({ drill, ex }) {
  if (drill === "Chunk launcher") return (
    <>
      <div style={st.chunk}>{ex.chunk}</div>
      <div style={st.lbl}>Your prompt</div>
      <div style={st.prompt}>{ex.prompt}</div>
    </>
  );
  if (drill === "Sentence fusion") return (
    <>
      <div style={st.lbl}>Fuse these two sentences</div>
      <div style={st.sbox}>{ex.s1}</div>
      <div style={st.sbox}>{ex.s2}</div>
      <div style={{ fontSize: 12, color: "#888", marginTop: 8, marginBottom: 3 }}>Relation: <strong>{ex.rel}</strong></div>
      <div style={{ fontSize: 12, color: "#bbb", fontStyle: "italic" }}>Hint: {ex.hint}</div>
    </>
  );
  if (drill === "Expansion move") return (
    <>
      <div style={st.lbl}>Base sentence</div>
      <div style={st.base}>{ex.base}</div>
      <div style={st.move}>{ex.move}</div>
      <div>Use: <span style={st.conn}>{ex.conn}</span></div>
    </>
  );
  return null;
}

export default function FrenchDrill() {
  const [level, setLevel] = useState("B1");
  const [drill, setDrill] = useState("Chunk launcher");
  const [ex, setEx] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shown, setShown] = useState(false);
  const [count, setCount] = useState(0);

  const generate = useCallback(async (lvl, dr) => {
    setLoading(true); setError(null); setShown(false); setEx(null);
    try {
      const result = await fetchExercise(lvl, dr);
      setEx(result);
      setCount(c => c + 1);
    } catch {
      setError("Could not generate exercise. Try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  function switchLevel(l) { setLevel(l); setEx(null); setShown(false); setError(null); }
  function switchDrill(d) { setDrill(d); setEx(null); setShown(false); setError(null); }

  const color = LEVEL_COLOR[level];

  return (
    <div style={st.wrap}>
      <div style={st.title}>French Connectives Drill</div>

      <div style={st.row}>
        {LEVELS.map(l => <LBtn key={l} label={l} active={level === l} color={LEVEL_COLOR[l]} onClick={() => switchLevel(l)} />)}
      </div>
      <div style={st.row}>
        {DRILLS.map(d => <DBtn key={d} label={d} active={drill === d} onClick={() => switchDrill(d)} />)}
      </div>

      <div style={st.card}>
        {loading && <div style={st.center}>Generating exercise…</div>}
        {error && <div style={{ ...st.center, color: "#a00" }}>{error}</div>}
        {!loading && !error && !ex && (
          <div style={st.center}>
            <div style={{ fontSize: 14, marginBottom: 16 }}>Level: <strong>{level}</strong> · Drill: <strong>{drill}</strong></div>
            <ActionBtn label="Start →" color={color} onClick={() => generate(level, drill)} />
          </div>
        )}
        {!loading && ex && (
          <>
            <CardContent drill={drill} ex={ex} />
            {!shown
              ? <GhostBtn label="Show example" onClick={() => setShown(true)} />
              : <div style={st.ex}><span style={st.exlbl}>Example</span>{ex.example}</div>
            }
          </>
        )}
      </div>

      {ex && !loading && (
        <div style={st.nav}>
          <span style={{ fontSize: 12, color: "#bbb" }}>#{count}</span>
          <ActionBtn label="Next exercise →" color={color} onClick={() => generate(level, drill)} />
        </div>
      )}
    </div>
  );
}
