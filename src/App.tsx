import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__header__logo">
          <img src="" className="App__Header__logo--mobile" alt="logo" />
        </div>

        <div className="App__header__content">
          <ul>
            <li>unlimited tv shows & movies</li>
            <li>
              <button>join now</button>
            </li>
            <li>sign in</li>
          </ul>
        </div>
      </header>

      <section className="collection">
        <div className="collection__content">
          <div className="collection__content--title">
            <h1>TV Cartoons</h1>
            <p>
              Cartoons can take us to different worlds, times and dimensions, all without ever
              leaving the couch. Get ready for laughs, adventure and loads of fun!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
