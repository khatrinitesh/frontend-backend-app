import React, { useState } from 'react'
import { AutocompleteOption, AutocompleteProps } from '../interface/interface'

const Autocomplete:React.FC<AutocompleteProps> = ({options, onSelect}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<AutocompleteOption[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setIsOpen(true);
    } else {
      setFilteredOptions([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (option: AutocompleteOption) => {
    setInputValue(option.label);
    setFilteredOptions([]);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('.autocomplete-container') === null) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <>
     <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="autocomplete-input"
      />
      {isOpen && (
        <ul className="autocomplete-dropdown">
          {filteredOptions.map(option => (
            <li
              key={option.id}
              className="autocomplete-item"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}

export default Autocomplete