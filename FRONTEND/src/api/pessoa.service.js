const URL_API = 'http://localhost:7000/api'

const getPessoas = async () =>{
    try {
        const resposta = await fetch(`${URL_API}/pessoa`);

        if (!resposta.ok) {
            throw new Error('Falha na requisção')
        }

        return await resposta.json();
    } catch (error) {
        throw new Error('Não foi possível carregar os dados')
    }
}


export default getPessoas;