import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loginn from "../assets/images/nexyos/Loginn.jpg"

const Signup = () => {
  const [user, setUser] = useState({
    type: "",
    country: "",
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
    verificationCode: "",
    partnerPortal: "",
    subscribe: false,
    agree: false
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.agree) {
      alert("You must agree to the Privacy Policy.");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="full-page">
      <div className="left-panel">
        <h2 className="title">Create Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <select value={user.type} onChange={(e) => setUser({ ...user, type: e.target.value })} required>
            <option value="">Select Type</option>
            <option>Installer</option>
            <option>System Integrator</option>
            <option>Distributor</option>
            <option>Reseller</option>
            <option>Security Services Company</option>
            <option>Alarm Receiving Center</option>
          </select>

          <select value={user.country} onChange={(e) => setUser({ ...user, country: e.target.value })} required>
            <option value="">Select Country/Region</option>
            <option>United States</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>UK</option>
          </select>

          <input type="text" placeholder="First Name" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} required />
          <input type="text" placeholder="Last Name" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} required />
          <input type="text" placeholder="Company Name" value={user.companyName} onChange={(e) => setUser({ ...user, companyName: e.target.value })} required />
          <input type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
          <input type="text" placeholder="Verification Code" value={user.verificationCode} onChange={(e) => setUser({ ...user, verificationCode: e.target.value })} required />
          <input type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />

          <div className="radio-group">
            <label>
              <input type="radio" name="partnerPortal" value="yes" onChange={(e) => setUser({ ...user, partnerPortal: e.target.value })} required />
              Yes, register with Nexyos-Partner Pro
            </label>
            <br/>
            <label>
              <input type="radio" name="partnerPortal" value="no" onChange={(e) => setUser({ ...user, partnerPortal: e.target.value })} required />
              No, just register as official user
            </label>
          </div>

          <label className="checkbox-label">
            <input type="checkbox" checked={user.subscribe} onChange={(e) => setUser({ ...user, subscribe: e.target.checked })} />
            Subscribe to newsletters
          </label>

          <label className="checkbox-label">
            <input type="checkbox" checked={user.agree} onChange={(e) => setUser({ ...user, agree: e.target.checked })} required />
            I agree to Nexyos OneNexyosID’s Privacy Policy
          </label>

          <button type="submit">Register</button>
        </form>

        <p className="redirect-text">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>

      <div className="right-panel">
        <img src={Loginn} alt="Signup Visual" />
      </div>

      <style>{`
        .full-page {
          display: flex;
          height: 100vh;
          width: 100vw;
        }

        .left-panel {
          flex: 1;
          padding: 100px;
          background-color: #f9f9f9;
          overflow-y: auto;
          scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.left-panel::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

        .right-panel {
          flex: 1.5;
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
          font-size: 38px;
          font-weight: bolder;
          color: #01667D;
          margin-bottom: 20px;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        input, select {
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 15px;
        }

        input:focus, select:focus {
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

        .radio-group label,
        .checkbox-label {
          font-size: 14px;
          margin: 5px 0;
          text-align:left;
        }

        .redirect-text {
          margin-top: 20px;
          font-size: 14px;
        }

        .redirect-text a {
          color: #007bff;
          text-decoration: none;
        }

        .redirect-text a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Signup;