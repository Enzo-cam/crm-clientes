import { useLoaderData } from "react-router-dom";
import Cliente from "../Components/Cliente";
import { obtClientes } from "../data/data";


export function loader(){
  const clientes = obtClientes()
  return clientes;
}
// Error boundaries: componentes de react que obtiene los errores en caulq lugar del componente.
const Clientes = () => {

  const clientes = useLoaderData()

  return (
    <>
      <h1 className='font-black text-3xl text-blue-800'>Clientes</h1>
      <p className='mt-3'>Administra tus clientes:</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

            <tbody>
              {clientes.map(cliente => (
                <Cliente 
                  cliente={cliente} 
                  key={cliente.id}  
                />  
              ))}
            </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes registrados.</p>
      )}
    </>
  )
}

export default Clientes