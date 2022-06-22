import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const StyledFormItem = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0;
`

const StyledTextAreaFormItem = styled(StyledFormItem)`
  height: -webkit-fill-available;
`

const SelectWrapper = styled.div`
  height: 100%;
  position: relative;
`

const Select = styled.select`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.primary6};
  color: ${COLORS.primary5};
  border: none;
  border-radius: 5px;
`

const Options = styled.div`
  width: 100%;
  position: absolute;
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
  flex-direction: column;
  background-color: rgba(35, 35, 35, 0.918051);
  top: 80px;
  z-index: 1;
`

const OverSelect = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

export {
  StyledFormItem, StyledTextAreaFormItem, Select, Options, OverSelect, SelectWrapper
}
