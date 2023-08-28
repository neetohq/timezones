export const getFromLocalStorage = (key) => {
  let response = null;
  try {
    const value = localStorage.getItem(key);
    response = value !== null ? JSON.parse(value) : null;
  } catch (error) {
    response = null;
  }

  return response;
};

export const setToLocalStorage = (key, value) => {
  if (value !== null) {
    localStorage.setItem(key, JSON.stringify(value));
  } else localStorage.removeItem(key);
};
