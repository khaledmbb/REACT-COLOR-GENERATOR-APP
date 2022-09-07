import { useRef, useState } from "react";
import Form from "./Form";
import Values from "values.js";
import SettingColors from "./SettingColors";
import ErrorsAndGoods from "./ErrorsAndGoods";

const Color = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [good, setGood] = useState(false);
  const [colorList, setColorList] = useState([]);
  const noColor = useRef();

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
      noColor.current.style.display = "none";
    } catch (error) {
      setError(true);
    }
  };

  const clipColor = (color) => {
    try {
      navigator.clipboard.writeText(color);
      setGood(true);
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="box">
      <Form
        color={color}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ErrorsAndGoods
        error={error}
        setError={setError}
        good={good}
        setGood={setGood}
      />
      <SettingColors colorList={colorList} clipColor={clipColor} />
      <h2 ref={noColor}>No Color</h2>
    </div>
  );
};

export default Color;
