import React, { MutableRefObject } from 'react';

import { useAuth } from '@/context/AuthContext';

import { InputField } from '@/components/InputField/InputField';
import { Button } from '../Button/Button';

import './Login.scss';

export default function Login() {
  const emailRef = React.useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = React.useRef() as MutableRefObject<HTMLInputElement>;

  const [error, setError] = React.useState<Boolean>(false);
  const [changeInOption, setChangeInOption] = React.useState<Boolean>(false);

  const { signup, login } = useAuth();

  function handleChangeIn() {
    setChangeInOption(!changeInOption);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email.trim() === '' || password.trim() === '') {
      setError(true);

      return;
    }

    async function handleSignup() {
      try {
        return await signup(email, password);
      } catch (error) {
        console.error(error);
      }
    }

    async function handleLogin() {
      try {
        return await login(email, password);
      } catch (error) {
        console.error(error);
      }
    }

    if (changeInOption) {
      handleSignup();
    } else {
      handleLogin();
    }
  }

  const optionIn = changeInOption ? 'Sign In' : 'Log In';

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
          <div className="Login__body__content">
            <div className="Login__form">
              <h1 className="Login__form--title">{optionIn}</h1>

              <form onSubmit={handleSubmit} className="Login__form__main">
                <InputField
                  value={emailRef}
                  label="Email"
                  error={error ? 'Please enter a valid email.' : ''}
                />
                <InputField
                  value={passwordRef}
                  label="Password"
                  error={error ? 'Your password must contain 6 characters.' : ''}
                />

                <div className="Login__form--button">
                  <Button type="submit">{optionIn}</Button>
                </div>

                <div className="Login__form--options">
                  <div className="Login__form--options__remember">
                    <input type="checkbox" name="" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>

                  <div className="Login__form--options__signup">
                    <p>
                      New to Netflix?{' '}
                      <span
                        className="Login__form--options__signup--muted"
                        onClick={handleChangeIn}>
                        Sign up now
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
