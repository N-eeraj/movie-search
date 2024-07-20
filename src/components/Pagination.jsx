// component imports
import Button from '@components/Button'

// clsx import for dynamic classnames
import clsx from 'clsx'

const Pagination = ({ page, pageCount, className, onPageChange }) => {
  return (
    <div className={`flex max-sm:flex-col justify-between items-baseline gap-y-2 ${className}`}>
      <span>
        Showing page: {page} of {pageCount}
      </span>

      <div className="flex gap-x-2">
        {Array.from({ length: pageCount }).map((_, index) => 
          <Button className={clsx('aspect-square', page === index + 1 && 'bg-accent hover:!bg-accent hover:brightness-110 text-primary')} key={index} onClick={() => page !== index + 1 && onPageChange(index + 1)}>
            {index + 1}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Pagination
