import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem(
        "loggedIn",
        "true"
      );

      navigate("/dashboard");
    } else {
      alert(
        "Invalid Email or Password"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">

      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-8 rounded-3xl w-[400px]"
      >
        <h1 className="text-4xl text-white font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 rounded-xl bg-slate-700 text-white"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-4 rounded-xl bg-slate-700 text-white"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button className="w-full bg-cyan-500 p-4 rounded-xl text-white font-bold">
          Login
        </button>

        <p className="text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-cyan-400"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;