import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layouts/Layout'
import Clientes, {loader as clientesLoader} from './Paginas/Clientes'
import EditarCliente, {loader as editarLoader, action as editarAction} from './Paginas/EditarCliente'
import NuevoCliente, {action as actionNuevoCl} from './Paginas/NuevoCliente'
import ErrorPage from './Components/ErrorPage'
import React from 'react'
import {action as eliminarAction} from './Components/Cliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // Hace que la página principal tome el Layout y tmb se pueda meter mas elementos.
        index: true,
        element: <Clientes />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: actionNuevoCl,
        errorElement: <ErrorPage />
      },
      {
        path:'/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarLoader,
        errorElement: <ErrorPage />,
        action: editarAction
      },
      {
        path:'/clientes/:clienteId/eliminar',
        action: eliminarAction
      }
    ]
  },
  
])


function App() {

  return (
    <React.StrictMode>
      <RouterProvider 
        router={router}
      />
    </React.StrictMode>
  )
}

export default App
