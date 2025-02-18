import PropTypes from "prop-types";

export default function Card({ title, icon, number, bgColor }) {
  return (
    <a
      className="flex flex-col max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm 
                 hover:scale-105 transition-transform duration-300 ease-in-out"
      style={{ backgroundColor: bgColor }}
    >
      {/* Title */}
      <h5 className="text-lg font-semibold text-white mb-4 text-center">{title}</h5>

      {/* Icon and Number Side by Side */}
      <div className="flex items-center justify-between">
        {/* Icon on the Left */}
        <img src={icon} alt={title} className="w-16 h-16" />

        {/* Number on the Right */}
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
