// pagination import
import Pagination from 'rc-pagination'

// react icon imports
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi'

// component imports
import Button from '@components/Button'

// clsx import for dynamic classnames
import clsx from 'clsx'

const BasePagination = ({ page, totalResults, className, onPageChange }) => {
  const pageButton = (current, type, element) => type === 'page' ? <Button className={clsx('h-full', page === current && '!bg-accent hover:!bg-accent hover:brightness-110 text-primary')}>{current}</Button> : element

  const from = (page - 1) * 10 + 1
  const to = Math.min(totalResults, page * 10)

  return (
    <div className={`flex max-sm:flex-col justify-between items-center sm:items-baseline gap-y-2 ${className}`}>
      <span>
        Showing {from} {to !== 1 && `- ${to}` } of {totalResults}
      </span>

      { totalResults > 10 &&
        <Pagination
          defaultCurrent={page}
          total={totalResults}
          itemRender={pageButton}
          nextIcon={to != totalResults && <Button className="h-full"><BiSolidRightArrow className="text-xs" /></Button>}
          prevIcon={from !== 1 && <Button className="h-full"><BiSolidLeftArrow className="text-xs" /></Button>}
          showTitle={false}
          className="flex justify-end gap-x-2"
          onChange={onPageChange} />
      }
    </div>
  )
}

export default BasePagination
