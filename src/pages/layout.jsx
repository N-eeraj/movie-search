// react router imports
import { Outlet } from 'react-router-dom'

// component imports
import PoweredBy from '@components/PoweredBy'

const Layout = () => {
  return (
    <main className="flex flex-col justify-between min-h-dvh p-4 bg-primary">
      <Outlet />
      <PoweredBy />
    </main>
  )
}

export default Layout
