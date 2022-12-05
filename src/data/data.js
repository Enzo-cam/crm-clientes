export async function obtClientes() {
    const resp = await fetch(import.meta.env.VITE_URL_API)
    const resultado = await resp.json()    
    return resultado;
}

export async function editarCliente(id) {
    const resp = await fetch(`${import.meta.env.VITE_URL_API}/${id}`)
    const resultado = await resp.json()    
    return resultado;
}

export async function agregarCliente(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_URL_API, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers:  {
                'Content-type' : 'application/json'
            }
        })

        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCliente(id, datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_URL_API}/${id}`, {
            method: 'PUT',
        })

        await respuesta.json()
    } catch (error) {
        console.log()
    }
}

export async function eliminarCliente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_URL_API}/${id}`, {
            method: 'DELETE'
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}