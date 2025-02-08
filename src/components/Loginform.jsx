import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Eye, EyeOff } from "lucide-react"; 
import Button from "./Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (email !== "admin@gmail.com") {
      setEmailError("Incorrect email.");
    }

    if (password !== "admin123") {
      setPasswordError("Incorrect password.");
    }

    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="font-quicksand">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Monitoring Inventory!</h2>
      <h2 className="text-xs font-normal text-gray-900 text-center mb-14">Please enter your details below</h2>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
          <input 
            type="email" 
            className={`w-full border-b bg-transparent text-gray-900 text-xs py-2 focus:outline-none ${
              emailError ? "border-red-500" : "border-gray-400 focus:border-black"
            }`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>

        <div className="relative">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            className={`w-full border-b bg-transparent text-gray-900 text-xs py-2 pr-10 focus:outline-none ${
              passwordError ? "border-red-500" : "border-gray-400 focus:border-black"
            }`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}   
            required
          />
          <button 
            type="button"
            className="absolute left-80 top-9 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
          {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
        </div>

        <Button text="Log In" color="bg-black hover:bg-black text-white w-full mt-4" />
      </form>
    </div>
  );
}

export default LoginForm;
