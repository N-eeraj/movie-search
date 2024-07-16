// react router imports
import { Link } from 'react-router-dom'

const PoweredBy = () => {
  return (
    <div className="flex w-full justify-center gap-x-1 text-lg">
      <span className="text-light-extra text font-extralight">
        Powered by
      </span>
      <Link to="https://www.omdbapi.com/" target="_blank" className="text-accent font-bold hover:underline">
        OMDb
      </Link>
    </div>
  )
}

export default PoweredBy
