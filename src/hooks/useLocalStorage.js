import { useState } from "react";

export const useLocalStorage = key => {
  const [value, setValue] = useState(window.localStorage.getItem(key, initialValue));

}

const [storedValue, setStoredValue] = useState(() => {

    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
  
    return [storedValue];
  };

  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };