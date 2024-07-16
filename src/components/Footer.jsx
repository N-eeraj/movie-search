// react router imports
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex w-full justify-center gap-x-1 text-lg">
      <span className="text font-extralight">
        Powered by
      </span>
      <Link to="https://www.omdbapi.com/" target="_blank" className="text-accent font-bold hover:underline">
        OMDb
      </Link>
    </footer>
  )
}

export default Footer
