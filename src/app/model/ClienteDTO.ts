import {EnderecoDTO} from "./EstadoDTO";

export class ClienteDTO {
    id?: number;
    nome?: string;
    email?: string;
    cpf?: string;
    endereco?: EnderecoDTO = new EnderecoDTO();
}
