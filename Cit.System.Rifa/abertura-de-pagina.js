import http from 'k6/http';
import { getBaseUrl } from './rifaConfig.js';

export const options = {

  //Entrada de uma vez dos usuarios
  scenarios: {
    shared_iter_scenario: {
      executor: "shared-iterations",
      vus: 1000, //quantidade de usuarios
      iterations: 2, //quantidade de vezes que um usuario unico vai entrar na tela
      startTime: "1s",
    }
  }
};


export default function() {
  http.get(getBaseUrl());
}
