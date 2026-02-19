import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log({ username, email, password });
      alert("Registration successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}           // ✅ Controlled
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded"
      />
      {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}              // ✅ Controlled
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}           // ✅ Controlled
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;