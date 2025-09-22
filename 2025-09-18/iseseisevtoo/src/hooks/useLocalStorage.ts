// useLocalStorage.ts
import { useState, useEffect } from "react";
//allikas: https://dev.to/saiful7778/managing-local-storage-in-react-with-uselocalstorage-hook-hee
function useLocalStorage<T>(key: string, initialValue: T) {
  // Lazy init: check if localStorage already has something for this key
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item) as T;
      } else {
        return initialValue;
      }
    } catch (error) {
      console.error("Error reading localStorage key “" + key + "”:", error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage key “" + key + "”:", error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      // Maybe reset to initial or undefined or something
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error removing localStorage key “" + key + "”:", error);
    }
  };

  return [storedValue, setValue, removeValue] as const;
}

export default useLocalStorage;
