import "./App.css";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const userRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus(); // Here we simply set the focus to User input.
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //If button enabled with JS hack
    // const v1 = USER_REGEX.test(user);
    // const v2 = PWD_REGEX.test(pwd);

    // Here we have to check with the database if there is such a matching username and a password.
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    // console.log(user, pwd);
    // setSuccess(true);
  };

  return (
    <section className="login-page">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="topic">Login</h1>
        <label className="field-name" htmlFor="username">
          Username:
        </label>
        <input
          className="typing-boxes"
          type="text"
          id="username"
          placeholder="Enter the Username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
        />

        <label className="field-name" htmlFor="password">
          Password:
        </label>
        <input
          className="typing-boxes"
          type="password" // Type "password" will not support auto-complete anyway.
          id="password"
          placeholder="Enter your password"
          onChange={(e) => setPwd(e.target.value)}
          required
        />

        <button className="submit-button">Log In</button>
        <p className="sign-up-link">
          Did not register yet?
          <br />
          <span className="line">
            <Link to="/register" className="link-btn">
              Register
            </Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
