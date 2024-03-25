import http from 'k6/http';
import { getCustomerBaseUrl } from './rifa-config.js';
import { check,sleep  } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100000 }, 
    { duration: '4m', target: 200000 }, 
    { duration: '9m', target: 300000 }, 
  ],
};


export default function() {
    let result = http.get(getCustomerBaseUrl(), {
      timeout: '60s'
    });

    check(result,{
      'status is ok': (r) => {
          if(r.status != 200)
              console.error(r);
          return r.status == 200;
      }
    });
  
}