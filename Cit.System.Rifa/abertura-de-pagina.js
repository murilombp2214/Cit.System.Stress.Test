import http from 'k6/http';
import { getCustomerBaseUrl } from './rifa-config.js';
import { check } from 'k6';

export const options = {

  //Entrada de uma vez dos usuarios
  scenarios: {
    shared_iter_scenario: {
      executor: "per-vu-iterations",
      vus: 1000, //quantidade de usuarios
      iterations: 2, //quantidade de vezes que um usuario unico vai entrar na tela (para esse caso o k6 ignora)
      startTime: "1s",
    }
  }
};


export default function() {

  for (let i = 0; i < options.iterations; i++) {
    let result = http.get(getCustomerBaseUrl());

    check(result,{
      'status is ok': (r) => {
          if(r.status != 200)
              console.error(r);
          return r.status == 200;
      }
    });
  }

}