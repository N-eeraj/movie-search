// react imports
import { useEffect, useRef } from 'react'

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

// util imports
import { capitalize } from '@/formatter'

const types = [
  'movie',
  'series',
  'episode',
]

const AppBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams({
    q: 'Dragon Ball',
    t: 'series',
  })

  const inputField = useRef(null)

  const query = searchParams.get('q') ?? ''
  const selectedType = searchParams.get('t') ?? ''

  const handleUpdateQuery = (queryKey, value) => {
    setSearchParams(prev => {
      prev.set(queryKey, value)
      return prev
    }, { replace: true })
  }

  const handleSubmit = event => {
    event?.preventDefault()
    if (query)
      onSearch({ query, type: selectedType })
  }

  useEffect(() => {
    onSearch({ query, type: selectedType })

    const handleKeydown = event => {
      if (event.key !== '/') return
      event.preventDefault()
      inputField.current.focus()
    }
    document.addEventListener('keydown', handleKeydown)

    return () => document.removeEventListener('keydown', handleKeydown)
  }, [])

  return (
    <div className="sticky top-0 flex justify-end gap-x-3 py-4 md:px-7 bg-primary z-10">
      <Listbox
        value={selectedType}
        onChange={value => handleUpdateQuery('t', value)}>
        <ListboxButton as={Button}>
          <FaFilter />
        </ListboxButton>
        <ListboxOptions
          anchor={{
            to: 'bottom start',
            gap: 7,
          }}
          transition
          className="rounded-xl border border-white/25 bg-black/5 p-1 backdrop-blur-lg [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-10">
          {types.map(type => (
            <ListboxOption key={type} value={type} className="group flex items-center gap-2 py-1.5 px-3 text-white text-sm/6 rounded-lg cursor-pointer data-[focus]:bg-black/20">
              <FaCheck className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">
                {capitalize(type)}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      <form className="flex gap-x-3 w-full max-w-sm" onSubmit={handleSubmit}>
        <Input
          ref={inputField}
          value={query}
          type="search"
          placeholder={`Search ${selectedType}`}
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
