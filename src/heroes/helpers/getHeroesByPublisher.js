import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'] 

    // Si ese publisher no existe en la lista de los validos muestra un error.
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    }

    // Filtra los heroes del publisher correspondiente.
    return heroes.filter(heroe => heroe.publisher === publisher)
}