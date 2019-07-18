import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('dark_mode',false);

  useEffect(()=> {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  },[darkMode])

  return [darkMode, setDarkMode]
}

export default useDarkMode;