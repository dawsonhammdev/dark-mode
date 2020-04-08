import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';


const useDarkMode = (initialValue) => {
const [enabledDarkModeState, setEnabledDarkModeState] = useLocalStorage('dark-mode', initialValue);
useEffect( () => {
const className= 'dark-mode';
const element = window.document.body;
if (enabledDarkModeState === true) {
element.classList.add("dark-mode");
}else {
element.classList.remove("dark-mode");
}
console.log(enabledDarkModeState);
}, [enabledDarkModeState]);
return [enabledDarkModeState, setEnabledDarkModeState];
}
export default useDarkMode;