const API_URL = 'http://localhost:3000/customers/v1';
const forgeHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': localStorage.token
  };
};

export {API_URL, forgeHeaders};
