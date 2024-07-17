// react icon imports
import { BiSolidCameraMovie } from 'react-icons/bi'
import { PiTelevisionSimpleFill } from 'react-icons/pi'
import { BsFillPlayBtnFill } from 'react-icons/bs'

const Card = ({ Poster, Title, Year, Type }) => {
  let Icon
  switch (Type) {
    case 'movie':
      Icon = BiSolidCameraMovie
      break;
    case 'series':
      Icon = PiTelevisionSimpleFill
      break;
    case 'episode':
      Icon = BsFillPlayBtnFill
      break;
  }

  return (
    <article className="flex flex-col gap-y-1">
      <picture className="relative min-h-40">
        <img src={Poster} alt={Title} className="rounded-md object-contain bg-top" />
        <Icon className="absolute top-1 left-1 size-6 bg-accent fill-primary p-1 rounded-full" />
      </picture>
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
