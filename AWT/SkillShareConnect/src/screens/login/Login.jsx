import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  useEffect(() => {
    const handleHistoryTraversal = () => {
      // Clear the history state to prevent going back
      window.history.pushState(null, document.title, window.location.href);
    };

    // Listen for the popstate event (triggered when the back/forward button is clicked)
    window.addEventListener("popstate", handleHistoryTraversal);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handleHistoryTraversal);
    };
  }, []);

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Heyy!!!</h1>
          <p>
            Skill Share Connect is an application that connects individuals based
            on shared interests and skills. Users can create profiles, find
            others with complementary skills, and collaborate through messaging
            and forums. It's designed to foster meaningful connections and
            support professional growth.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;