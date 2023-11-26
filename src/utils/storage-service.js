export const commonStorage = {
    getItem(key) {
      const data = localStorage.getItem(key);
  
      try {
        return JSON.parse(data);
      } catch (err) {
        return null;
      }
    },
    setItem(key, value) {
      const stringifiedData = JSON.stringify(value);
      localStorage.setItem(key, stringifiedData);
    },
    removeItem(key) {
      localStorage.removeItem(key);
    },
  };