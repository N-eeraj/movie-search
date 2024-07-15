// react router imports
import { createBrowserRouter } from 'react-router-dom'

// page imports
import Layout from '@pages/layout'
import List from '@pages/list'
import Movie from '@pages/movie'

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <List />,
      },
      {
        path: ':id',
        element: <Movie />,
      },
    ],
  },
])
