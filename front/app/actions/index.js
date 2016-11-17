import {OLOLO_TYPE} from '_app/actions/_types';

const fetchPosts = () => {
  return {
    type: OLOLO_TYPE,
    payload: fetch('http://localhost:3000/v1/records')
      .then(response => response.json())
      .then(data => { return data; })
  };
};

export {fetchPosts};
