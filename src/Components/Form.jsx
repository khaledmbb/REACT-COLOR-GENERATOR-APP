const Form = ({ color, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number-of-paragraphs">Color:</label>
      <input
        onChange={handleChange}
        id="number-of-paragraphs"
        value={color}
        placeholder="#fae344 || rgb(255, 100, 130) || Blue"
        type="text"
      />
      <input type="submit" value="Generate" />
    </form>
  );
};

export default Form;
