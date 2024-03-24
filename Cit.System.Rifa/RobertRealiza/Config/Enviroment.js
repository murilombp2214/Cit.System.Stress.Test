import { IsHML, IsLocal } from '../../../Utils/Enviroment.js';

export function getBaseUrl(){
    if(IsLocal())
        return 'http://localhost/monster_rifa/public/';
    
    //load balance
    if(IsHML())
        return 'http://monster-dev-103800893.us-east-1.elb.amazonaws.com';

    return 'https://roberthrealiza.com/'
}