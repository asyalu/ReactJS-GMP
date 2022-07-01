import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'
import triangle from '../../assets/icons/triangle.svg'

const StyledSorting = styled.div`
  position: relative;
  width: 300px;
  height: 60px;
  display flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid  ${COLORS.primary2};
`

const SortBy = styled.label`
  color: ${COLORS.primary5};
  opacity: 0.6;
  text-transform: uppercase;
`

const ReleaseDateButton = styled.div`
  width: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.primary5};
`

const SortingSelect = styled.select`
  width: 150px;
  color: ${COLORS.primary5};
  background-color: ${COLORS.transparent};
  outline: 0;
  border: none;
  cursor: pointer;

  select[multiple] {
    padding: 10px;
  }
`

const SelectWrapper = styled.div`
  height: 100%;
  position: relative;
  cursor: pointer;
`

const Select = styled.select`
  width: 150px;
  height: 100%;
  background-color: ${COLORS.transparent};
  color: ${COLORS.primary5};
  border: none;
  appearance: none;
  background: url(${triangle});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 25px;
`

const OverSelect = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Options = styled.div`
  width: 160px;
  position: absolute;
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
  flex-direction: column;
  color: ${COLORS.primary5};
  top: 45px;
  right: -5px;
  background-color: ${COLORS.primary2};
  z-index: 1;
`

const Option = styled.div`
  padding: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.primary4};
  }
`

export {
  StyledSorting,
  SortBy,
  ReleaseDateButton,
  SortingSelect,
  Select,
  SelectWrapper,
  OverSelect,
  Options,
  Option
}
