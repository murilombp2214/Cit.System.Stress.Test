import { getBaseUrl as BuzeiraGetBaseUrl} from './Buzeira/Config/Enviroment.js'
import { getBaseUrl as RobertRealizaGetBaseUrl} from './RobertRealiza/Config/Enviroment.js'

export function getCustomerBaseUrl(){
  //Buzeira
  if(getCustomer() == 'Buzeira')
    return BuzeiraGetBaseUrl();

  //Robert
  return RobertRealizaGetBaseUrl();
}

export function getCustomer(){
    return __ENV.CUSTOMER || 'Buzeira';
}

export function getCampanha(){
    return __ENV.CAMPANHA || 'jujuba-malvada';
}

export function getCampanhaId(){
  return __ENV.CAMPANHA_ID || '5a108269-322d-478e-b793-c75797c41499';
}

export function getToken(){
  return __ENV.TOKEN || 'zcMnb5wgQRAnoW5zZlfTd3UYmXDENTM21bJT02jn';
}

export function getCookie(){
  
  return __ENV.COOKIE || 'XSRF-TOKEN=eyJpdiI6InZXeFQrekR5SG01MWo1Ni83NU5qaGc9PSIsInZhbHVlIjoiZzRJaFd3OEtvcWFzUWJtbjlxbC9QUjhGbm5oWW9MMEMvZzRBOTVkZHdLcVd2eGFDb2dvbGZSNTFPajJ5U2x1M1JaamJldVlPR01hbkpJSkJpRThIUEs0Z0hocWhBVVdDSndLYVJ5cnFrNVo1R1UyYXVVSTdqeE9GY0V0Q244OFMiLCJtYWMiOiI0MmZjNjZlZTZjYTk3MTM2NTM4NWU3ZDEyNGM1YmJiZDQ0NzAzOWYzMWViMjlmN2MwYmQyZDBlN2RmNjc5MzIzIiwidGFnIjoiIn0%3D; monster_session=eyJpdiI6InpOR29CSWM4eGM5c1J3b0JRM0RlSFE9PSIsInZhbHVlIjoiNFpuSE9tRjIzV255aGdyaUVSSnMzcmNCR2xiQlVXOU5FRG1Wa0dOZmE1Z25ncHUwMFZORjlaZFlYRzNad1cvekpRd0dwM2wwbEVkVGhWeW5qNEhmRnh0aTBHRmRoSmZlS3Zma0ZMWVVvNzlmVFY1TGNaUW9NNmZsRFQweHVBbFAiLCJtYWMiOiI2ZmJhZmU2NWFlZDllY2IzM2VlMjk5NzBkYzM0M2ZlOGI0ZGU5NWYyNzU4NjJkYmI3MGNmNjQ0NzMwNzJkM2QxIiwidGFnIjoiIn0%3D';
}