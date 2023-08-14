import { useState } from "react";
import Counter from "./components/Counter.js";
import SteveOrGary from "./components/SteveOrGary.js";
import styles from "./App.module.css";

function App() {
  const [name, setName] = useState("Andy");

  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <h1>React Hooks - useState</h1>
        <h2>Let's talk about state</h2>
      </header>
      <main className={styles["App-main"]}>
        <h2>{name}</h2>
        <SteveOrGary myName={name} funcToChangeName={setName} />
        <Counter />
      </main>
      <footer className={styles["App-footer"]}>
        <h3>Created By Andy Bolton</h3>
      </footer>
    </div>
  );
}

export default App;
