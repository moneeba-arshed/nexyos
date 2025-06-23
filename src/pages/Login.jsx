import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loginn from "../assets/images/nexyos/Loginn.jpg"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="full-page">
      <div className="left-panel">
        <h2 className="title">Welcome</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="OneNexyosID / Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <div className="bottom-text">

          <p>
            New to Nexyos? <Link to="/signup">Create Account</Link>
          </p>
        </div>
      </div>

      <div className="right-panel">
        <img src={Loginn} alt="Login Visual" />
      </div>

      <style>{`
        .full-page {
          display: flex;
          height: 100vh;
          width: 100vw;
        }

        .left-panel {
          flex: 1;
          padding: 110px;
          background-color: #f9f9f9;
          overflow-y: auto;
        }

        .right-panel {
          flex: 1.8;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .right-panel img {
          width: 100%;
          height: auto;
          max-width: 800px;
        }

        .title {
          font-size: 40px;
          font-weight: bold;
          color: #01667D;
          margin-bottom: 20px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        input {
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 15px;
        }

        input:focus {
          outline: none;
          border-color: #d40000;
        }

        button {
          background-color: #01667D;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        button:hover {
          background-color: #01667D;
        }

        .bottom-text {
          margin-top: 20px;
          font-size: 14px;
        }

       
        .bottom-text a {
          color: #007bff;
          text-decoration: none;
        }

        .bottom-text a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Login;
