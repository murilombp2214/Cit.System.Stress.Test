import { IsLocal } from '../../../Utils/Enviroment.js';

export function getBaseUrl(){
    if(IsLocal())
        return 'http://localhost/monster_rifa/public/';
    
    return 'https://roberthrealiza.com/'
}