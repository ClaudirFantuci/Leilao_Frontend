import api from "../config/axiosConfig"

class BaseService{
    constructor(endPoint){
        this.endPoint = endPoint;
        this.api = api;
    }

    async inserir(dados){
        const resposta = await this.api.post(this.endPoint,dados);
        return resposta;
    }

    async alterar(dados){
        const resposta = await this.api.put(this.endPoint, dados);
        return resposta;
    }

    async excluir(dados){
        const resposta = await this.api.delete(`${this.endPoint}/${id}`)
        return resposta;
    }

    async buscar(dados){
        const resposta = await this.api.get(this.endPoint, dados);
        return resposta;
    }
}

export default BaseService;