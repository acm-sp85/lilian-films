import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.container__1}>
        <div className={styles.introCard}>
          <img
            src="./lilian-logo.png"
            alt="logotype"
            className={styles.introCard__logo}
          />

          <h3 className={styles.introCard__description}>
            Independent film production company based in Brooklyn, NY.
          </h3>
          <h4 className={styles.introCard__leyend}>
            Founded in 2016 by
            <a
              className={styles.introCard__link}
              href="http://alexcontell.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alex Contell
            </a>
            and
            <a
              className={styles.introCard__link}
              href="https://www.tommasosacconi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tommaso Sacconi.
            </a>
          </h4>
        </div>
        <div className={styles.introCard__arrow}>V</div>
      </div>
      <div className={styles.container__2}>
        <a
          href="https://grainthemovie.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./GRAIN_grainthemovie.png"
            alt="grain-logo"
            className={styles.container__2Logo}
          />
        </a>
      </div>
    </div>
  );
}
