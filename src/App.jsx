import { useState } from "react";
import Exercise1 from "./exercise1/App";
import Exercise2 from "./exercise2/App";

function App() {
  const [activeExercise, setActiveExercise] = useState(1);

  return (
    <div>
      {/* Exercise Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          padding: "16px",
          backgroundColor: "#34483A",
        }}
      >
        <button
          onClick={() => setActiveExercise(1)}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            backgroundColor: activeExercise === 1 ? "#FFFFFF" : "#788579",
            color: activeExercise === 1 ? "#34483A" : "#FFFFFF",
          }}
        >
          Exercise 1 - Tailwind CSS
        </button>

        <button
          onClick={() => setActiveExercise(2)}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            backgroundColor: activeExercise === 2 ? "#FFFFFF" : "#788579",
            color: activeExercise === 2 ? "#34483A" : "#FFFFFF",
          }}
        >
          Exercise 2 - Vanilla Extract
        </button>
      </div>

      {/* Display Selected Exercise */}
      {activeExercise === 1 ? <Exercise1 /> : <Exercise2 />}
    </div>
  );
}

export default App;
