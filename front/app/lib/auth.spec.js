import auth from './auth';

var mock = () => {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
};

Object.defineProperty(window, 'localStorage', { value: mock });

test('loggedIn', () => {
  localStorage.token = '123';
  expect(auth.loggedIn()).toEqual(true);
});

test('not loggedIn', () => {
  localStorage.token = null;
  expect(auth.loggedIn()).toEqual(false);
});

test('logout', () => {
  localStorage.token = '123';
  auth.logout(() => {});
  expect(localStorage.token).toEqual(undefined);
});

test('requireAuth with token', () => {
  let nextState = {location: {}};
  let replace = jest.genMockFunction();
  localStorage.token = 123;
  auth.requireAuth(nextState, replace);
  expect(replace).not.toBeCalled();
});

test('requireAuth without token', () => {
  let nextState = {location: {}};
  let replace = jest.genMockFunction();
  localStorage.token = undefined;
  auth.requireAuth(nextState, replace);
  expect(replace).toBeCalled();
});

test('login with token', () => {
  let callback = jest.genMockFunction();
  localStorage.token = 123;
  auth.login({}, '', callback);
  expect(callback).lastCalledWith(true);
});
