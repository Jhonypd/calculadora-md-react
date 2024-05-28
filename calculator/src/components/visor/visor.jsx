/** @format */
import "./visor.css";
const VisorContainer = ({ result }) => {
  return (
    <div className="view-result">
      <h1 className="result">{result}</h1>
    </div>
  );
};

export default VisorContainer;
