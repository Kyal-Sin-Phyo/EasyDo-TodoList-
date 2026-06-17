// useLocalStorage.js
import { useEffect, useReducer } from "react";

const useLocalStorage = (reducer, initialData, key) => {
    const [state, dispatch] = useReducer(reducer, initialData, () => {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : initialData;
        } catch {
            return initialData;
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, dispatch];
}

export default useLocalStorage;