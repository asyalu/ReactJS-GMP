import {
  StyledSorting, ReleaseDateButton, SortBy
} from './Sorting.styles'
import triangle from '../../assets/icons/triangle.svg'

const RESOURCE_SORT_BY = 'SORT BY'
const RESOURCE_RELEASE_DATE = 'RELEASE DATE'

const Sorting = () => (
  <StyledSorting>
    <SortBy>{RESOURCE_SORT_BY}</SortBy>
    <ReleaseDateButton>
      {RESOURCE_RELEASE_DATE}
      <img src={triangle} alt="triangle" />
    </ReleaseDateButton>
  </StyledSorting>
)

export { Sorting }
