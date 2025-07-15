import express, { Request, Response } from 'express'
import { getTokenAPISefaz } from './sefaz-api/get-token'
import { getTribute } from './sefaz-api/get-Tribute'

const app = express()
app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
    const token = await getTokenAPISefaz('24832957', 'Matias287')
    const tributes = await getTribute({
        competencia: '06/2025',
        numeroDocumento: '01005259000198',
        parametrosPaginacaoConsultaObrigacosDTO: {
            pagina: 0,
            tamanho: 500
        },
        receitas: [1220,1546],
        situacao: 'Em Aberto'
    })
    console.log(token.id_token)
    console.log(tributes)
    res.json({
        message: 'hello world'
    })
})

app.listen(3000, () => {
    console.log("Inicializado na porta 3000...")
})