const Local = 'Local';
const DSV = 'DSV';
const HML = 'HML';
const PRD = 'PRD';


export function getEnv(){
    return __ENV.ENV || Local;
}

export function IsLocal() { return getEnv() == Local;}
export function IsDSV() { return getEnv() == DSV;}
export function IsHML() { return getEnv() == HML;}
export function IsPRD() { return getEnv() == PRD;}