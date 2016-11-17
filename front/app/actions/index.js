const OLOLO_TYPE = 'OLOLO';

const addRecord = text => ({ type: 'ADD_RECORD', text });
const deleteRecord = id => ({ type: 'DELETE_RECORD', id });

const fetchPosts = query => {
  return {
    type: OLOLO_TYPE,
    payload: fetch(`https://www.reddit.com/r/${query}.json`)
      .then(response => response.json())
      .then(data => { return data.kind; })
  };
};

export {addRecord, deleteRecord, fetchPosts, OLOLO_TYPE};
