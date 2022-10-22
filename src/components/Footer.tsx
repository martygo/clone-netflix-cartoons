function Footer() {
  return (
    <footer className="App__footer">
      <div className="App__footer__content">
        <a href="#" className="App__footer__content--help">
          Questions? Contact us.
        </a>

        <ul className="App__footer__content__links">
          <li className="App__footer__content__links--item">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </li>
          <li className="App__footer__content__links--item">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </li>
          <li className="App__footer__content__links--item">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </li>
          <li className="App__footer__content__links--item">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
