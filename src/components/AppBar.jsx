// react imports
import { useState } from 'react'

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

const AppBar = () => {
  const [selectedTypes, setSelectedTypes] = useState(types)
  const [query, setQuery] = useState('')

  return (
    <div className="flex justify-end gap-x-3 md:py-4 md:px-7">
      <Listbox
        value={selectedTypes}
        multiple
        onChange={value => value.length && setSelectedTypes(value)}>
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

      <Input
        value={query}
        placeholder={`Search ${selectedTypes.join(', ')}`}
        className="w-full max-w-sm py-1.5 px-3 text-white bg-white/5 border-none rounded-md ring-1 ring-white/10 focus:outline-none"
        onChange={({ target }) => setQuery(target.value)}
      />
      <Button>
        <FaSearch />
      </Button>
    </div>
  )
}

export default AppBar
