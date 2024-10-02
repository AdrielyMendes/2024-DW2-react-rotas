import { PaiIndireta } from '../../components/comunicacao/indireta/PaiInDireta'
import { Pagina } from '../../components/Pagina'

export function ComunicacaoIndireta() {

    return (
        <Pagina 
            titulo="Comunicação Indireta"subtitulo="Exemplo de comunicação INDIRETA entre compomentes"
        >
            <PaiIndireta/>

            
        </Pagina>
    )
}