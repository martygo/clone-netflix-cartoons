function App() {
  return (
    <div className="App">
      <header className="App__header">
        <a href="#" className="App__header__logo">
          <svg
            viewBox="0 0 111 30"
            data-uia="netflix-logo"
            aria-hidden="true"
            className="App__header__logo--large"
            focusable="false">
            <g id="netflix-logo">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"></path>
            </g>
          </svg>

          <svg
            className="App__header__logo--medium"
            focusable="false"
            viewBox="225 0 552 1000"
            aria-hidden="true"
            data-uia="n-logo">
            <defs>
              <radialGradient
                id="6fc3e242-27d7-4e52-a8ce-2bbf2554a626-a"
                r="75%"
                gradientTransform="matrix(.38 0 .5785 1 .02 0)">
                <stop offset="60%" stopOpacity=".3"></stop>
                <stop offset="90%" stopOpacity=".05"></stop>
                <stop offset="100%" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
            <path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path>
            <path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path>
            <path
              d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
              fill="url(#6fc3e242-27d7-4e52-a8ce-2bbf2554a626-a)"></path>
            <path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path>
          </svg>
        </a>

        <ul className="App__header__content">
          <li>
            <a href="#">unlimited tv shows & movies</a>
          </li>
          <li>
            <a href="#" className="App__header__content--button">
              join now
            </a>
          </li>
          <li>
            <a
              href="#"
              className="App__header__content--button App__header__content--button--muted">
              sign in
            </a>
          </li>
        </ul>
      </header>

      <main className="App__collection">
        <section className="App__collection__content">
          <h1 className="App__collection__content--title">TV Cartoons</h1>
          <p className="App__collection__content--subtitle">
            Cartoons can take us to different worlds, times and dimensions, all without ever leaving
            the couch. Get ready for laughs, adventure and loads of fun!
          </p>
        </section>

        <section className="App__collection__discover">
          <a href="#" className="App__collection__discover__title">
            <h1 className="App__collection__discover__title--name">Popular on Netflix</h1>
            <p className="App__collection__discover__title--link">Explore more</p>
          </a>

          <li className="App__collection__discover__list">
            <a href="#" className="App__collection__discover__list__item">
              <img
                src="https://occ-0-6520-299.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTvqRSjNUe7xgocZY0VR9ZCSxONhtFXq9vnQHt1ewASaFwGSqfJ9mOcMb1G3hVJ3P-mgaC61-vY4DrrxSY4uWxdCd3QcKQ_0SSY.jpg?r=353"
                alt="netflix"
                className="App__collection__discover__list__item--cover"
              />
              <h3 className="App__collection__discover__list__item--title">Paw Patrol</h3>
            </a>

            <a href="#" className="App__collection__discover__list__item">
              <img
                src="https://occ-0-6520-299.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTvqRSjNUe7xgocZY0VR9ZCSxONhtFXq9vnQHt1ewASaFwGSqfJ9mOcMb1G3hVJ3P-mgaC61-vY4DrrxSY4uWxdCd3QcKQ_0SSY.jpg?r=353"
                alt="netflix"
                className="App__collection__discover__list__item--cover"
              />
              <h3 className="App__collection__discover__list__item--title">Paw Patrol</h3>
            </a>
          </li>
        </section>
      </main>
    </div>
  );
}

export default App;
