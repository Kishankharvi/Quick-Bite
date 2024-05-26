import React, { useState } from "react";
import "./LoginPopoup.css";
import { assets } from "../../assets/assets";
import { useForm } from "react-hook-form";
const LoginPopup = ({ setShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [currentState, setCurrentState] = useState("Sign up");
  return (
    <div className="login-popup">
      <form
        action=""
        className="login-popoup-container"
        onSubmit={handleSubmit()}
      >
        <div className="login-popoup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popoup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Your Name "
                {...register("name", {
                  required: "name is required",
                })}
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div>
          <button>
            {currentState === "Sign up" ? "Create account" : "Login"}
          </button>
        </div>

        <div className="login-popoup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
