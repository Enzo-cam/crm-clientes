import { Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import { editarCliente, actualizarCliente } from "../data/data"
import Formulario from "../Components/Formulario";
import Error from "../Components/Error";

export async function loader({params}){
  const cliente = await editarCliente(params.clienteId);

  if(Object.values(cliente).length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'El cliente solicitado no existe.'
    })
  }

  return cliente;
}

export async function action({request, params}){
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  // Validation
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos deben rellenarse.')
  }

  if(Object.keys(errores).length){
    return errores;
  }

  await actualizarCliente(params.clienteId, datos)

  return redirect('/')
}


function EditarCliente () {
  const navigate = useNavigate()
  const cliente = useLoaderData()
  const errores = useActionData()


  return (
    <div>
      <h1 className='font-black text-3xl text-blue-600'>Editar cliente:</h1>
      <p className='mt-3'>Rellena los campos a editar:</p>
      
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto mt-3 px-5 py-6">

        {errores?.length && errores.map((err, i) => <Error key={i}>{err}</Error>)}

        <Form 
          method="post"
          // noValidate
        >
          <Formulario 
            cliente={cliente}
          />
          <input 
            type="submit"
            className="mt-5 w-full bg-blue-900 p-3 uppercase cursor-pointer font-bold text-white text-lg"
            value="Finalizar edición del cliente"
          />
        </Form>
      </div>

      <button 
        className="bg-blue-800 text-white px-3 py-1 font-bold uppercase mt-5"
        onClick={() => navigate('/')}  
      >
        Volver
      </button>
    </div>
  )
}

export default EditarCliente