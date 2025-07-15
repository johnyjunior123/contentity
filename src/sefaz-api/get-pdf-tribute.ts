import axios from "axios"

const urlAtivarConsolidacao = `https://contribuinte.sefaz.al.gov.br/cobrancadfe/cobranca-dfe-obrigacao-api/api/obrigacao/gerar-evento-alteracao-situacao
`

interface DarSefaz {
    dataVencimento: Date,
    numeroProcessamento: number
}

interface downloadPDFTributeParams {
    informacoesDar: DarSefaz[]
}

const urlDownloadPdf = `https://contribuinte.sefaz.al.gov.br/cobrancadfe/cobranca-dfe-obrigacao-api/api/dar/visualizar?filter=true`
async function downloadPdfTribute(params: downloadPDFTributeParams) {
    await axios.post(urlDownloadPdf, params)
    console.log(' ainda em construção ')
}