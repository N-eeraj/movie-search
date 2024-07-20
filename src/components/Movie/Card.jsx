const Card = ({ Poster, Title, Year }) => {
  return (
    <article className="group relative flex flex-col gap-y-1 pb-20 hover:outline outline-light/50 rounded-lg overflow-hidden">
      <img src={Poster} alt={Title} className="group-hover:scale-125 object-contain h-full bg-top origin-top ease-in-out duration-300" />
      <div className="absolute bottom-0 w-full p-2 flex flex-col gap-y-1 group-hover:bg-gradient-to-b from-black/25 to-black backdrop-blur-lg rounded-b-lg">
        <strong className="text-light">
          {Title}
        </strong>
        <span>
          {Year}
        </span>
      </div>
    </article>
  )
}

export default Card
