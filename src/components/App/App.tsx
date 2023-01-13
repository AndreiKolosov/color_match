import Matcher from '../Matcher/Matcher';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Matcher />
      </main>
    </div>
  );
}

export default App;
