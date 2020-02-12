import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useChangeMode = (key, initialValue) => {
    const [changeMode, setChangeMode] = useLocalStorage(key, initialValue);

    const toggleChangeMode = (e) => {
        e.preventDefault();
        return changeMode ? setChangeMode(false) : setChangeMode(true);
    }

    useEffect(() => {
        if (changeMode === true) {
            document.body.classList.add('toggle-color');
        } else {
            document.body.classList.remove('toggle-color');
        }
    })

    return [changeMode, setChangeMode, toggleChangeMode]
}