export interface Root {
  content: Content[]
  last: boolean
  totalElements: number
  totalPages: number
  first: boolean
  sort: any
  numberOfElements: number
  size: number
  number: number
}

export interface Content {
  resumo: Resumo
  detalhes: Detalhe[]
}

export interface Resumo {
  numNfe: number
  seqDocumentoFiscal: any
  codigoChave: any
  numeroDocumentoResponsavel: any
  valorPrincipal: number
  nomeReceita: string
  seqObrigacao: number
  seqConsolidacao: any
  codSituacaoObrigacao: number
  descricaoSituacaoObrigacao: string
  existeDarGerado: boolean
  seqReceita: any
  codMotivoSituacao: any
  descricaoMotivoSituacao: any
  seqDocumentofiscalCTE: any
  numChaveDfeCTE: any
  seqTermo: any
  tipoNota: string
  dataEmissao: string
  dataVencimento: string
  competencia: string
}

export interface Detalhe {
  numNfe: number
  seqDocumentoFiscal: number
  codigoChave: string
  numeroDocumentoResponsavel: string
  valorPrincipal: number
  nomeReceita: string
  seqObrigacao: number
  seqConsolidacao: number
  codSituacaoObrigacao: number
  descricaoSituacaoObrigacao: string
  existeDarGerado: boolean
  seqReceita: number
  codMotivoSituacao: any
  descricaoMotivoSituacao: any
  seqDocumentofiscalCTE: any
  numChaveDfeCTE: any
  seqTermo: any
  tipoNota: string
  dataEmissao: string
  dataVencimento: string
  competencia: string
}
