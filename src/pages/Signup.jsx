import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">

      <form
        onSubmit={handleSignup}
        className="bg-slate-800 p-8 rounded-3xl w-[400px]"
      >
        <h1 className="text-4xl text-white font-bold mb-6">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 mb-4 rounded-xl bg-slate-700 text-white"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          Signup
        </button>

        <p className="text-gray-400 mt-4">
          Already have account?{" "}
          <Link
            to="/"
            className="text-cyan-400"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;