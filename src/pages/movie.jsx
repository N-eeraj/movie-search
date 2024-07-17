// react router imports
import { Link } from 'react-router-dom'

// react icon imports
import { IoArrowBackOutline } from 'react-icons/io5'
import { FaStar } from 'react-icons/fa6'

// component imports
import Button from '@components/Button'
import Chip from '@components/Chip'

// util imports
import { capitalize } from '@/formatter'

const movie = () => {
  const {
    Title,
    Type,
    Year,
    Released,
    Runtime,
    imdbRating,
    imdbVotes,
    Poster,
    Genre,
    Plot,
    Director,
    Writer,
    Actors
  } = data

  const titleDetails = [
    capitalize(Type),
    Type === 'series' ? Year: Released,
    Runtime,
  ]

  const genreList = Genre.split(', ')

  const people = {
    Director,
    Writer,
    Actors,
  }

  return (
    <>
      <Link to="/">
        <Button className="aspect-square">
          <IoArrowBackOutline className="text-xl" />
        </Button>
      </Link>

      <section className="flex flex-col gap-y-4 md:w-10/12 max-w-screen-lg my-5 mx-auto px-2">
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between items-end flex-wrap gap-y-2">
            <h1 className="text-light text-5xl">
              {Title}
            </h1>
            <div className="flex items-center gap-x-2">
              <span className="flex items-center gap-x-1">
                <strong className="text-light">
                  {imdbRating}
                </strong>
                /10
                <FaStar className="fill-accent" />
              </span>
              <small>
                ({imdbVotes})
              </small>
            </div>
          </div>

          <div className="flex gap-x-3">
            { titleDetails.map((text, index) => <span className="pr-3 [&:not(:last-child)]:border-r border-r-light-extra/50" key={index}>
              {text}
            </span>) }
          </div>
        </div>

        <div className="flex max-sm:flex-col max-sm:items-center gap-x-12 gap-y-4">
          <img src={Poster} alt={Title} className="max-sm:max-w-72 rounded-md" />

          <div className="flex flex-col items-center gap-y-4">
            <div className="flex gap-x-2 w-full">
              { genreList.map((genre, index) => <Chip key={index}>
                {genre}
              </Chip>) }
            </div>

            <p>
              {Plot}
            </p>

            <div className="flex flex-col gap-y-1 w-full">
              {
                Object.entries(people).map(([key, value]) => (
                  value !== 'N/A' &&
                  <div key={key}>
                    <span className="inline">
                      {key}:
                      &nbsp;
                      <strong className="inline">
                        {value}
                      </strong>
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default movie
