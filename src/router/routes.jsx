// page imports
import Layout from '@pages/layout'
import List from '@pages/list'
import Movie from '@pages/movie'

export default [
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
]
