import React from 'react'
import { useNavigate, Form, redirect } from 'react-router-dom';
import { eliminarCliente } from '../data/data';

export async function action({params}){
    await eliminarCliente(params.id)
    return redirect('/')
}


const Cliente = ({cliente}) => {
    const {id, nombre, telefono, email, empresa} = cliente;
    const navigate = useNavigate()


    return (
        <tr className='border-b'>
            <td className="p-6">
                <p className='text-2xl text-gray-800'>{nombre}</p>
                <p className='mt-1 text-blue-800 font-bold'>{empresa}</p>
            </td>

            <td className='p-6'>
                <p className='text-gray-700'><span className='text-gray-900 uppercase font-bold'>Email: </span>{email}</p>
                <p className='text-gray-700'><span className='text-gray-900 uppercase font-bold'>Teléfono: </span>{telefono}</p>
            </td>

            <td className='p-6 flex gap-3 justify-center'>
                <button
                    type='button'
                    className='text-blue-700 hover:text-blue-900 uppercase font-bold'
                    onClick={() => navigate(`/clientes/${id}/editar`)}
                >
                    Editar
                </button>

                <Form
                    method='post'
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={(e) => {
                        if(!confirm('Desea eliminar al cliente??')){
                            e.preventDefault();
                        }
                    }}
                >
                    <button
                        type='submit'
                        className='text-red-700 hover:text-red-900 uppercase font-bold'
                    >
                        Eliminar
                    </button>
                </Form>
            </td>
        </tr>
    )
}

export default Cliente