function gerarLista(final = 20) {
    const lista = []
    for (let i = 1; i <= final; i++) {
        lista.push(<span key={i}>{i}, </span>)
    }
    return lista;
}


export default function jsx() {

    return (
        <div>
            <div>
                {gerarLista(100)}
            </div>
            <div>
                {gerarLista(50)}
            </div>
        </div>

    )
}