import BaseService from "./BaseService";

class AutenticacaoService extends BaseService{
    constructor(){
        super("/autenticacao");
    }

    async login(dados){
        console.log("http://localhost:8080");
        const resposta = await this.api.post(`${this.endPoint}/login`, dados);
        return resposta;
    }
}

export default AutenticacaoService;