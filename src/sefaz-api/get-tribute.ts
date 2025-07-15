import axios from "axios"
import { Root } from "./type-sefazapi-tribute"

const baseUrl = `https://contribuinte.sefaz.al.gov.br/cobrancadfe/sfz-cobranca-dfe-api/api/cobranca-nfe/cobranca-paginada`

interface getTributeParams {
    numeroDocumento: string,
    competencia: string,
    receitas: number[],
    situacao: string,
    parametrosPaginacaoConsultaObrigacosDTO: {
        pagina: number,
        tamanho: number
    }
}

interface ITribute {
    seqReceita: number,
    seqConsolidacao: number,
    seqObrigacao: number,
    seqDocumentoFiscal: number,
    codigoChave: string, 
    nomeReceita: string, 
    competencia: string, 
    descricaoSituacaoObrigacao: string,
    tipoNota: string,
    valorPrincipal: number,
    dataEmissao: Date, 
    dataVencimento: Date, 
}

class Tribute {
    constructor(tribute: ITribute) {
        Object.assign(this, tribute)
    }
}

export async function getTribute(params: getTributeParams): Promise<Tribute[]> {
    const res = await axios.post(baseUrl, params)
    return transformDtoRequestTribute(res.data)
}

export async function transformDtoRequestTribute(tribute: Root) {
    let tributeList: Tribute[] = []
    tribute.content.map(content => {
        content.detalhes.map(tribute => {
            let newTribute = new Tribute({
                codigoChave: tribute.codigoChave, 
                valorPrincipal: tribute.valorPrincipal,
                nomeReceita: tribute.nomeReceita, 
                dataEmissao: new Date(tribute.dataEmissao), 
                dataVencimento: new Date(tribute.dataVencimento), 
                competencia: tribute.competencia, 
                tipoNota: tribute.tipoNota,
                descricaoSituacaoObrigacao: tribute.descricaoSituacaoObrigacao,
                seqReceita: tribute.seqReceita,
                seqConsolidacao: tribute.seqConsolidacao,
                seqDocumentoFiscal: tribute.seqDocumentoFiscal,
                seqObrigacao: tribute.seqObrigacao
            })
            tributeList.push(newTribute)
        })
    })
    return tributeList
}