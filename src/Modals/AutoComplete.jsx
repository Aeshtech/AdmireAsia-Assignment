import { useState } from "react";
import style from './Modal.module.css';
// import memo from 'react'
const AutoComplete = ({ data, formData, setFormData, name}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    
    setValue(query);
    if(name==="team") setFormData({...formData, selectedTeam: e.target.value})
    else setFormData({...formData, selectedEmployee: e.target.value})
    if (query.length > 1) {
      const filterSuggestions = data.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(query) > -1
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    if(name==="team") setFormData({...formData, selectedTeam: e.target.innerText})
    else setFormData({...formData, selectedEmployee: e.target.innerText})
    setSuggestionsActive(false);
  };

  const Suggestions = () => {
    return (
      <ul className={style.suggestions}>
        {suggestions.map((suggestion, index) => {
          return (
            <li
              key={index}
              onClick={handleClick}
            >
              {suggestion}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        placeholder="type atleast 2 characters"
        value={value}
        onChange={handleChange}
      />
      {suggestionsActive && <Suggestions />}
    </div>
  );
  
};

export default AutoComplete;