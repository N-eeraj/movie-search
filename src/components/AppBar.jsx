// react imports
import { useEffect } from 'react'

// react router imports
import { useSearchParams } from 'react-router-dom'

// headless ui imports
import { Input } from '@headlessui/react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

// react icon imports
import { FaSearch } from 'react-icons/fa'
import { FaFilter, FaCheck } from 'react-icons/fa6'

// component imports
import Button from '@components/Button'

const types = [
  'Movie',
  'Series',
  'Episode',
]

const AppBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams({
    q: 'Dragon Ball',
    t: JSON.stringify(types),
  })

  const query = searchParams.get('q') ?? ''
  const selectedTypes = JSON.parse(searchParams.get('t')) ?? []

  const handleUpdateQuery = (query, value) => {
    setSearchParams(prev => {
      prev.set(query, value)
      return prev
    }, { replace: true })
  }

  const handleSubmit = event => {
    event?.preventDefault()
    if (query)
      onSearch({ query, types: selectedTypes.map(type => type.toLowerCase()) })
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <div className="flex justify-end gap-x-3 md:py-4 md:px-7">
      <Listbox
        value={selectedTypes}
        multiple
        onChange={value => value.length && handleUpdateQuery('t', JSON.stringify(value))}>
        <ListboxButton as={Button}>
          <FaFilter />
        </ListboxButton>
        <ListboxOptions
          anchor={{
            to: 'bottom start',
            gap: 7,
          }}
          transition
          className="rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0">
          {types.map(type => (
            <ListboxOption key={type} value={type} className="group flex items-center gap-2 py-1.5 px-3 text-white text-sm/6 rounded-lg cursor-pointer data-[focus]:bg-white/10">
              <FaCheck className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">
                {type}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      <form className="flex gap-x-3 w-full max-w-sm" onSubmit={handleSubmit}>
        <Input
          value={query}
          type="search"
          placeholder={`Search ${selectedTypes.join(', ')}`}
          className="flex-1 py-1.5 px-3 text-white bg-white/5 border-none rounded-md ring-1 ring-white/10 focus:outline-none"
          onChange={({ target }) => handleUpdateQuery('q', target.value)} />
        <Button type="submit">
          <FaSearch />
        </Button>
      </form>
    </div>
  )
}

export default AppBar
