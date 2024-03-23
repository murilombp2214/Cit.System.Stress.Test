import { getBaseUrl as BuzeiraGetBaseUrl} from './Buzeira/Config/Enviroment.js'
import { getBaseUrl as RobertRealizaGetBaseUrl} from './RobertRealiza/Config/Enviroment.js'

export function getBaseUrl(){
  //Buzeira
  if(getCustomer() == 'Buzeira')
    return BuzeiraGetBaseUrl;

  //Robert
  return RobertRealizaGetBaseUrl;
}

export function getCustomer(){
    return __ENV.CUSTOMER || 'Buzeira';
}

export function getCampanha(){
    return __ENV.CAMPANHA || 'jujuba-malvada';
}