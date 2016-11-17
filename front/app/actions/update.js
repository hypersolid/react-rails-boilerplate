import {UPDATE_RECORD} from '_app/actions/_types';
import {API_URL} from '_app/config';

const updatePost = (id, value) => {
  return {
    type: UPDATE_RECORD,
    payload: fetch(`${API_URL}/v1/record/${id}`, {method: 'PUT', body: JSON.stringify({title: value})})
      .then(response => response.json())
      .then(data => { return data; })
  };
};

export default updatePost;
