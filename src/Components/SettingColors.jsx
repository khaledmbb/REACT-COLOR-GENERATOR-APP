import RgbToHex from "./RgbToHex";

const SettingColors = ({ colorList, clipColor }) => {
  return (
    <div className="color-box">
      <ul>
        {colorList.map(({ rgb, weight }, idx) => {
          const colorIs = RgbToHex(...rgb);
          return (
            <li
              key={idx}
              style={{ backgroundColor: colorIs }}
              onClick={() => clipColor(colorIs)}
            >
              <p className="percent">{weight}%</p>
              <p className="color-name">{colorIs}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SettingColors;
