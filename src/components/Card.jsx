import PropTypes from "prop-types";

export default function Card({ title, icon, number, bgColor }) {
  return (
    <a
      className="flex flex-col max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm hover:opacity-90"
      style={{ backgroundColor: bgColor }}
    >
  
      <h5 className="text-lg font-semibold text-white mb-4 text-center">{title}</h5>


      <div className="flex items-center justify-between">
    
        <img src={icon} alt={title} className="w-16 h-16" />


        <span className="text-5xl font-bold text-white ml-4">{number}</span>
      </div>
    </a>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired, 
  number: PropTypes.number.isRequired, 
  bgColor: PropTypes.string, 
};

Card.defaultProps = {
  bgColor: "#FFFFFF",
};
