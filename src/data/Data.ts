import axios from 'axios';
 
class Data { 
  getData(url: any) {  
    return axios.get(url);
  }
}

export default new Data();