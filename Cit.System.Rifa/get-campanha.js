import http from 'k6/http';
import { getCustomerBaseUrl,getCampanha } from './rifa-config.js';

export const options = {

  //Interações do usuario com a campanha
  scenarios: {
    shared_iter_scenario: {
      executor: "per-vu-iterations",
      vus: 10, //usuario no local da campanha
      iterations: 10 // usuario iteragindo com a campanha
    }
  }
};


export default function() {
  http.get(getCustomerBaseUrl() + 'campanha/' + getCampanha());
}
