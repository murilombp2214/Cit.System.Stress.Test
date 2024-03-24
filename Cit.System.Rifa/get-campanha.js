import http from 'k6/http';
import { getCustomerBaseUrl,getCampanha } from './rifa-config.js';
import { check } from 'k6';

export const options = {

  //Interações do usuario com a campanha
  scenarios: {
    shared_iter_scenario: {
      executor: "shared-iterations",
      vus: 10, //usuario no local da campanha
      iterations: 1 // usuario iteragindo com a campanha
    }
  }
};


export default function() {
  let result = http.get(getCustomerBaseUrl() + 'campanha/' + getCampanha());
  
  check(result,{
    'status is ok': (r) => {
        if(r.status != 200)
            console.error(r);
        return r.status == 200;
    }
});
}
