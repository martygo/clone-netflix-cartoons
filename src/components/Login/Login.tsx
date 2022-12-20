import './Login.scss';

export default function Login() {
  return (
    <div>
      <div className="Login">
        <div className="Login__background">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/6b277ec2-744a-4165-8ef4-42bff37621d6/AO-en-20221214-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="login-background"
            className="Login__background--picture"
          />
        </div>
        <div className="Login__body">
          <div>
            <div className="Login__body__content">
              <div className="Login__form">
                <h1 className="Login__form--title">Sign In</h1>

                <form className="Login__form__main">
                  <div className="Input">
                    <label htmlFor="email" className="Input__label">
                      <input type="text" required id="email" />
                      <span className="Input__label--text">Email</span>
                      <span className="Input__label--helper Input__label--helper--error">
                        Please enter a valid email or phone number.
                      </span>
                    </label>
                  </div>

                  <div className="Input">
                    <label htmlFor="email" className="Input__label">
                      <input type="text" required id="email" />
                      <span className="Input__label--text">Email</span>
                      <span className="Input__label--helper Input__label--helper--error">
                        Please enter a valid email or phone number.
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
