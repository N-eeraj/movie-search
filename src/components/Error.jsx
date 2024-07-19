const Error = ({ message }) => {
  return (
    <h2 className="fixed top-1/2 left-1/2 w-full text-5xl md:text-7xl text-accent text-center leading-snug -translate-x-1/2 -translate-y-1/2">
      {message || 'Oops, Something Went Wrong!'}
    </h2>
  )
}

export default Error
