export class EnderecoDTO {
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cep?: string;
    municipio?: MunicipioDTO;
    estado?: EstadoDTO;
}

export class MunicipioDTO {
    id?: number;
    nome?: string;
    estado?: EstadoDTO;
    codigoIbge?: number;
}

export class EstadoDTO {
    id?: number;
    codigoIbge?: number;
    nome?: string;
    sigla?: string;
    regiao?: RegiaoDTO;
    nomeComSigla?: string;
}

export class RegiaoDTO {
    id?: number;
    nome?: string;
}
