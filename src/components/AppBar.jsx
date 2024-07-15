// headless imports
import { Button, Input } from '@headlessui/react'

// react icon imports
import { FaSearch } from 'react-icons/fa'
import { FaFilter } from 'react-icons/fa6'

const AppBar = () => {
  return (
    <div className="flex justify-end gap-x-2 md:py-4 md:px-7">
      <Button className="w-10 py-1.5 px-3 bg-white/5 text-white rounded-md text-sm/6 font-semibold shadow-inner shadow-white/10 cursor-pointer focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white/25">
        <FaFilter />
      </Button>
      <Input
        placeholder="Search Movie"
        className="w-full max-w-sm py-1.5 px-3 text-white bg-white/5 border-none rounded-md ring-1 ring-white/10 focus:outline-none"
      />
      <Button className="w-10 py-1.5 px-3 bg-white/5 text-white rounded-md text-sm/6 font-semibold shadow-inner shadow-white/10 cursor-pointer focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white/25">
        <FaSearch />
      </Button>
    </div>
  )
}

export default AppBar
