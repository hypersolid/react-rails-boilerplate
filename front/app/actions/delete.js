import {DELETE_RECORD} from '_app/actions/_types';
import {API_URL} from '_app/config';

const deleteRecords = (id) => {
  return {
    type: DELETE_RECORD,
    payload: fetch(`${API_URL}/v1/records/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {return id;})
  };
};

export default deleteRecords;
