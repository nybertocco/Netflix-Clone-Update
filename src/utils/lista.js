export function getLista() {
    const lista = localStorage.getItem("minhaLista");
    return lista ? JSON.parse(lista) : [];
}

export function addLista(item) {
    const lista = getLista();

    const existe = lista.includes(item);

    if (!existe) {
        const novaLista = [...lista, item];
        localStorage.setItem("minhaLista", JSON.stringify(novaLista));
    }
}

export function removeLista(item) {
    const lista = getLista();

    const novaLista = lista.filter((filme) => filme !== (item));

    localStorage.setItem("minhaLista", JSON.stringify(novaLista));
}