// component imports
import AppBar from '@components/AppBar'

const list = () => {
  const handleSearch = ({ query, types }) => {
    console.log(query)
    console.log(types)
  }

  return (
    <AppBar onSearch={handleSearch} />
  )
}

export default list
