import React, { useEffect, useState } from "react";
import {
  hideAuthModal,
  resetAuthError,
  signInAction,
  signInWithGoogleAction,
} from "../../../state/auth/authActions";

import Button from "../../../common/components/Button";
import FormInput from "../../../common/components/FormInput";
import FormInputPassword from "../../../common/components/FormInputPassword";
import { IconSpinner } from "../../../common/components/Icons";
import LogoLong from "../../../common/components/LogoLong";
import SignInWithGoogleButton from "../../../common/components/SignInWithGoogleButton";
import { connect } from "react-redux";

const SignInForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authError, setPage } = props;

  useEffect(() => {
    if (authError) {
      setLoading(false);
    }
  }, [authError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    props.signIn({
      email,
      password,
    });
  };

  return (
    <div className="bg-gray-50 rounded-lg w-96 shadow-lg p-4 z-20">
      <div className="flex flex-row justify-center">
        <LogoLong />
      </div>
      <button
        onClick={() => props.hideAuthModal()}
        className="absolute bg-gray-100 w-8 h-8 top-0 right-0 rounded-lg flex items-center hover:text-blue-500 hover:shadow-md justify-center transition-all ease-out duration-400 focus:outline-none"
      >
        🗙
      </button>
      <p className="text-lg my-2 text-gray-600 text-center">Welcome back!</p>
      <SignInWithGoogleButton onClick={() => props.signInWithGoogle()} />
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 lg:w-1/4"></span>

        <span className="text-xs text-center text-gray-500 uppercase">
          or sign in with email
        </span>

        <span className="border-b w-1/5 lg:w-1/4"></span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <FormInput
            id="email"
            labelText="Email Address"
            name="email"
            type="email"
            required={true}
            disabled={loading}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            validationError={authError ? true : false}
            autoFocus={true}
          />
        </div>
        <div className="mt-4">
          <FormInputPassword
            id="password"
            labelText="Password"
            name="password"
            type="password"
            required={true}
            disabled={loading}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            validationError={authError ? true : false}
          />
        </div>

        {authError ? (
          <div className="text-xs mt-2 text-center p-2 bg-red-400 rounded-lg text-white">
            {authError}
          </div>
        ) : null}
        <div className="mt-6">
          <Button type="submit" loading={loading}>
            Sign in
          </Button>
        </div>
      </form>

      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 md:w-1/4"></span>

        <button
          onClick={() => {
            props.resetAuthError();
            setPage("SignUp");
          }}
          disabled={loading}
          className="text-xs text-gray-500 uppercase hover:underline hover:text-blue-500 focus:outline-none"
        >
          or sign up
        </button>

        <span className="border-b w-1/5 md:w-1/4"></span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (data) => dispatch(signInAction(data)),
    signInWithGoogle: () => dispatch(signInWithGoogleAction()),
    hideAuthModal: () => dispatch(hideAuthModal()),
    resetAuthError: () => dispatch(resetAuthError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
