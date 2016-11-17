import {LIST_RECORDS} from '_app/actions/_types';
import {API_URL} from '_app/config';

const fetchRecords = () => {
  return {
    type: LIST_RECORDS,
    payload: fetch(`${API_URL}/v1/records`)
      .then(response => response.json())
      .then(data => { return data; })
  };
};

export default fetchRecords;
