import { useState } from 'react'
import {
  StyledSorting,
  Select,
  SortBy,
  SelectWrapper,
  OverSelect,
  Options,
  Option
} from './Sorting.styles'

const RESOURCE_SORT_BY = 'SORT BY'

const RESOURCE_LIST_SORT = ['RELEASE DATE', 'RATING', 'YEAR']

const Sorting = () => {
  const [menuVisibl, setMenuVisibl] = useState(false)
  const [selectSort, setSelectSort] = useState(RESOURCE_LIST_SORT[0])

  const handleSort = (sortingBy) => {
    setSelectSort(sortingBy)
    setMenuVisibl(false)
  }

  return (
    <StyledSorting onMouseLeave={() => setMenuVisibl(false)}>
      <SortBy htmlFor={RESOURCE_SORT_BY}>{RESOURCE_SORT_BY}</SortBy>
      <SelectWrapper onMouseOver={() => setMenuVisibl(true)}>
        <Select>
          <option>{selectSort}</option>
        </Select>
        <OverSelect />
      </SelectWrapper>
      <Options expanded={menuVisibl}>
        {RESOURCE_LIST_SORT.map(
          (sortingBy) => (
            <Option
              key={sortingBy}
              onClick={() => handleSort(sortingBy)}
            >
              {sortingBy}
            </Option>
          )
        )}
      </Options>
    </StyledSorting>
  )
}

export { Sorting }
