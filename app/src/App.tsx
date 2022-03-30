import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import Dashboard from "./components/MainApp";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.main}>
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
