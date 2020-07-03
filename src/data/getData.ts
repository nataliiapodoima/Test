import axios from 'axios';
 
class getData { 
  getTestData(url:string) {  
    return axios.get(url);
  }
}

export default new getData();