import http from 'k6/http';
import { getCustomerBaseUrl,getCampanha, getToken, getCookie, getCampanhaId } from './rifa-config.js';
import { check } from 'k6';

export default function () {
  let data = { 
    campanha_id: getCampanhaId(),
    telefone: generateRandomPhoneNumber(),
    nome: 'CIT',
    sobrenome:'Sobrenome',
    cpf : generateRandomCPF().toString(),
    email: 'm' + generateRandomCPF().toString()  + '-' +   Math.floor(Math.random() * 2) +'@gmail.com',
    qtd_numeros: 1
 };

 console.log(data);

  let params = {
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Csrf-Token' : getToken(),
        'Cookie': getCookie()
    }};

    let payload = '';

    let result = http.request('POST', getCustomerBaseUrl() + 'publicoapi/participar-campanha?' + toQueryString(data), payload, params);

    check(result,{
        'status is ok': (r) => {
            if(r.status != 200){
                console.log('Request.Headers:', result.headers);
                console.error('Response.StatusCode: ', r.status);
                console.error('Response.Body: ', r.body);
                console.error('Response.Url:', r.url );
                console.error('Response.Headers:', r.headers);
                console.error(r);
            }
            return r.status == 200;
        }
    });
}

function toQueryString(objeto) {
    return Object.entries(objeto)
        .map(([chave, valor]) => chave + '=' + valor)
        .join('&');
}

function generateRandomPhoneNumber() {
    const ddd = Math.floor(100 + Math.random() * 900); // Gera um DDD aleatório entre 100 e 999
    const firstPart =  Math.floor(10000 + Math.random() * 90000); // Gera uma parte do número aleatória entre 10000 e 99999
    const secondPart = Math.floor(1000 + Math.random() * 9000); // Gera outra parte do número aleatória entre 1000 e 9999
    return `${ddd}${firstPart}${secondPart}`;
}

function generateRandomCPF() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10);
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let firstDigit = 11 - (sum % 11);
    if (firstDigit > 9) {
        firstDigit = 0;
    }

    cpf += firstDigit;

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let secondDigit = 11 - (sum % 11);
    if (secondDigit > 9) {
        secondDigit = 0;
    }

    cpf += secondDigit;

    return cpf;
}