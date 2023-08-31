import { useState } from "react";

const Form = ({onSubmit}) => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
      };

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(evt.target.query.value);
        setInput('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          onChange={handleChange}
          value={input}
          required
        />
        <button type="submit">Search</button>
      </form>
  )
}

export default Form