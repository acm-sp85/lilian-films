import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <a href="https://grainthemovie.com/">
          <img src="./lilian-logo.png" alt="logotype" className="logo"></img>
        </a>
        <br />
        <h3>Independent film production company based in Brooklyn, NY.</h3>
        <div style={{ display: 'flexbox' }}>
          <p> Founded in 2016 by </p>

          <a
            href="http://alexcontell.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alex Contell
          </a>

          <p> and </p>

          <a
            href="https://www.tommasosacconi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tommaso Sacconi.
          </a>
        </div>
      </div>
    </div>
  );
}
