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


Button.propTypes = {
  text: PropTypes.string.isRequired,   
  color: PropTypes.string,             
  onClick: PropTypes.func,             
};


Button.defaultProps = {
  color: "bg-gray-500 text-white",    
  onClick: () => {},                 
};

export default Button;
