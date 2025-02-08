import { useState } from "react";
import Button from "./Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    alert("Login Clicked!");
  };

  return (
    <div className="font-quicksand">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Monitoring Inventory!</h2>
      <h2 className="text-xs font-normal text-gray-900 text-center mb-14">Please enter your details below</h2>

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Email Input */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
          <input 
            type="email" 
            className="w-full border-b border-gray-400 bg-transparent text-gray-900 text-xs py-2 focus:outline-none focus:border-black"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
          <input 
            type="password" 
            className="w-full border-b border-gray-400 bg-transparent text-gray-900 text-xs py-2 focus:outline-none focus:border-black"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}   
            required
          />
        </div>

        {/* Login Button */}
        <Button text="Log In" color="bg-black hover:bg-black text-white w-full mt-4" />
      </form>
    </div>
  );
}

export default LoginForm;
