const OLOLO_TYPE = 'OLOLO';

const addRecord = text => ({ type: 'ADD_RECORD', text });
const deleteRecord = id => ({ type: 'DELETE_RECORD', id });

const fetchPosts = () => {
  return {
    type: OLOLO_TYPE,
    payload: fetch('http://localhost:3000/v1/records')
      .then(response => response.json())
      .then(data => { return data; })
  };
};

export {addRecord, deleteRecord, fetchPosts, OLOLO_TYPE};
