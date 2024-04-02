import css from './Home.module.css'
export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.img}>
      <h1 className={css.title}>
        Welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
              </span>
          </h1>
        <p className={css.text}>To access your contact book, please either register or log in.</p>
        </div>
    </div>
  );
}