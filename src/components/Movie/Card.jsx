const Card = ({ Poster, Title, Year, Type }) => {
  return (
    <article className="flex flex-col gap-y-1">
      <img src={Poster} alt={Title} className="min-h-40 rounded-md object-contain bg-top" />
      <strong className="text-light">
        {Title}
      </strong>
      <span>
        {Year}
      </span>
    </article>
  )
}

export default Card
