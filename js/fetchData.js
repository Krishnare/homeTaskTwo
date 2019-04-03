"use strict";
class RequestService {
    async getRequest(url){
      let data = await (await (fetch(url)
        .then(res => {
          return res.json()
        })
        .catch(err => {
          console.log('Error: ', err)
        })
      ))
      return data
    }
}
const requestCall = new RequestService();
export default requestCall;