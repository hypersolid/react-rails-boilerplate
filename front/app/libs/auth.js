function loggedIn() {
  return !!localStorage.token;
}
function makeRequest(login, password, callback) {
  setTimeout(() => {
    callback({
      authenticated: true,
      token: Math.random().toString(36).substring(7)
    });
  }, 0);
}

export default {
  logout(callback) {
    delete localStorage.token;
    callback();
  },
  requireAuth(nextState, replace) {
    if (!loggedIn()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  },
  login(login, password, callback) {
    if (localStorage.token) {
      callback(true);
      return;
    }
    makeRequest(login, password, (res) => {
      if (res.authenticated) localStorage.token = res.token;
      callback(res.authenticated);
    });
  },
  loggedIn
};
