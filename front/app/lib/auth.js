import {forgeHeaders} from '_app/config';

function loggedIn() {
  return !!localStorage.token;
}

function logout(callback) {
  delete localStorage.token;
  callback();
}

function requireAuth(nextState, replace) {
  if (loggedIn()) { return; }
  replace({
    pathname: '/login',
    state: { nextPathname: nextState.location.pathname }
  });
}

function makeRequest(authData, url, callback) {
  setTimeout(() => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(authData),
      headers: forgeHeaders()
    }).then(response => {
      if (response.status !== 200) {
        callback();
      } else {
        response.json().then(result => callback(result));
      }
    });
  }, 0);
}

function login(authData, url, callback) {
  if (loggedIn()) {
    callback(true);
    return;
  }
  makeRequest(authData, url, (result) => {
    if (result) {
      localStorage.token = result.token;
      callback(true);
    } else {
      callback(false);
    }
  });
}

export default {logout, requireAuth, login, loggedIn};
