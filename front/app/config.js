const API_URL = 'http://localhost:3000/v1';
const ENTRY_PAGE = '/records';
const forgeHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': localStorage.token
  };
};

export {API_URL, ENTRY_PAGE, forgeHeaders};
