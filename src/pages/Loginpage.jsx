import LoginForm from "../components/Loginform";
import testImage from "../assets/test.webp"; 

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-green-500">
      <div className="bg-white shadow-lg rounded-xl flex overflow-hidden w-[800px] h-[450px]">
        {/* Left Side: Image with Hover Zoom Effect */}
        <div className="w-1/2 flex items-center justify-center bg-gray-200 group overflow-hidden">
          <img
            src={testImage}
            alt="Illustration"
            className="w-8/4 h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-150"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-1/2 p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
