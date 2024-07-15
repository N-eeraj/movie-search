import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Outlet />
      <div>
        Powered by OMDb
      </div>
    </>
  )
}

export default Layout
