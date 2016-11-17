import {CREATE_RECORD} from '_app/actions/_types';
import {API_URL} from '_app/config';

const updateRecord = (value) => {
  let url = `${API_URL}/v1/records`;
  let data = {record: {title: value}};
  return {
    type: CREATE_RECORD,
    payload: fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((result) => { return result; })
  };
};

export default updateRecord;
