/** @format */
import "./btn-number.css";
const Button = ({ className, label, value, onClick }) => {
  return (
    <button value={value} onClick={onClick} className={`btn-number ${className}`}>
      {label}
    </button>
  );
};

export default Button;
