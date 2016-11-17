import {UPDATE_RECORD} from '_app/actions/_types';
import {API_URL} from '_app/config';

const updatePost = (id, value) => {
  let url = `${API_URL}/v1/records/${id}`;
  let payload = {record: {title: value}};
  return {
    type: UPDATE_RECORD,
    payload: fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => { return data; })
  };
};

export default updatePost;
