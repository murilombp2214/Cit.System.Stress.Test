import { IsDSV, IsLocal } from '../../../Utils/Enviroment.js';

export function getBaseUrl(){
    if(IsLocal())
        return 'http://localhost/monster_rifa/public/';
    
    if(IsDSV())
        return 'http://monster-dev-486753218.sa-east-1.elb.amazonaws.com/';
    
    return 'https://premiosdobuzeira.com/'
}