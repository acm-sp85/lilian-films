import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__landing}>
        <div className={styles.nav}>
          <div className={styles.nav__logo}>
            <a className={styles.navTitles}>LILIAN FILMS</a>
          </div>

          <div className={styles.nav__news}>
            <a
              className={styles.navTitles}
              href="https://www.grainthemovie.com/news"
            >
              NEWS
            </a>
          </div>
          <div className={styles.nav__about}>
            <a
              className={styles.navTitles}
              href="https://www.grainthemovie.com/about"
            >
              ABOUT
            </a>
          </div>
        </div>
        <div className={styles.introCard}>
          <img
            src="./lilian-logo.png"
            alt="logotype"
            className={styles.introCard__logo}
          />

          <h3 className={`${styles.introCard__description} ${styles.h1}`}>
            Independent film production company based in Brooklyn, NY.
          </h3>
          <h4 className={`${styles.introCard__description} ${styles.h2}`}>
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
      <div className={styles.container__grain}>
        <a
          href="https://grainthemovie.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./GRAIN_grainthemovie.png"
            alt="grain-logo"
            className={styles.container__grain__logo}
          />
        </a>
      </div>
    </div>
  );
}
