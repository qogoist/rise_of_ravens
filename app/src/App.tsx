import styles from "./App.module.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className={styles.main}>
      <Login />
    </div>
  );
}

export default App;
