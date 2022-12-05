import Formulario from "../Components/Formulario"
import Error from "../Components/Error"
import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import { agregarCliente } from "../data/data"

export async function action({request}){
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

  await agregarCliente(datos)

  return redirect('/')

}

const Nuevo = () => {
  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className='font-black text-3xl text-blue-900'>Nuevo cliente</h1>
      <p className='mt-3'>Llena los campos para registrar un cliente:</p>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto mt-3 px-5 py-6">

        {errores?.length && errores.map((err, i) => <Error key={i}>{err}</Error>)}

        <Form 
          method="post"
          // noValidate
        >
          <Formulario />
          <input 
            type="submit"
            className="mt-5 w-full bg-blue-900 p-3 uppercase cursor-pointer font-bold text-white text-lg"
            value="Registrar cliente"
          />
        </Form>
      </div>

      <button 
        className="bg-blue-800 text-white px-3 py-1 font-bold uppercase mt-5"
        onClick={() => navigate('/')}  
      >
        Volver
      </button>
    </>
  )
}

export default Nuevo