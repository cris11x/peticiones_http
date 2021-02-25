//centralizar la logica para realizar peticiones
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async() => {
    

    try {

        const resp = await fetch( jokeUrl );

        if( !resp.ok ) throw 'no se pudo realizar la peticion';

        const { icon_url, id, value } = await resp.json();
    
        return { icon_url, id, value };

    } catch ( err ) {

        throw err;

    }

}

export {
    obtenerChiste
}
