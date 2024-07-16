// react imports
import { forwardRef } from 'react'

// headless ui imports
import { Button } from '@headlessui/react'

const BaseButton = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <Button ref={ref} {...props} className={`py-1.5 px-3 bg-white/5 text-white rounded-md text-sm/6 font-semibold shadow-inner shadow-white/10 cursor-pointer focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white/25 ${className}`}>
      {children}
    </Button>
  )
})

export default BaseButton
