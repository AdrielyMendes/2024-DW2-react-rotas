import { PaiDireta } from "../../components/comunicacao/direta/PaiDireta"
import { Pagina } from "../../components/Pagina"
export function ComunicacaoDireta() {

    return (
        <Pagina 
            titulo="Comunicação Direta"subtitulo="Exemplo de comunicação DIRETA entre compomentes"
        >
            <PaiDireta/>

            
        </Pagina>
    )
}