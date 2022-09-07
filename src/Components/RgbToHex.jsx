const RgbToHex = (r, g, b) => {
  const rgbToHex = () => {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  };
  return rgbToHex();
};

export default RgbToHex;
