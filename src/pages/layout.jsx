// react router imports
import { Outlet } from 'react-router-dom'

// component imports
import Footer from '@components/Footer'

const Layout = () => {
  return (
    <main className="flex flex-col justify-between min-h-dvh p-4 bg-primary">
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}

export default Layout
