import PropTypes from "prop-types";

function Button({ text, color, onClick }) {
  return (
    <button 
      className={`w-full px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${color}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// ✅ Add PropTypes for validation
Button.propTypes = {
  text: PropTypes.string.isRequired,   // 'text' must be a string and is required
  color: PropTypes.string,             // 'color' must be a string
  onClick: PropTypes.func,             // 'onClick' should be a function
};

// ✅ Default props (in case not provided)
Button.defaultProps = {
  color: "bg-gray-500 text-white",     // Default button color
  onClick: () => {},                   // Default empty function
};

export default Button;
