import PropTypes from 'prop-types'
import { useState } from 'react'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'
import { TextArea } from '../TextArea/TextArea'
import {
  StyledFormItem,
  StyledTextAreaFormItem,
  Select,
  Options,
  OverSelect,
  SelectWrapper
} from './FormItem.styles'

const MIN_DATE = '1900-01-01'
const MAX_DATE = '2023-01-01'

const FormItemType = {
  number: 'number',
  url: 'url',
  date: 'date',
  textArea: 'textArea',
  select: 'select',
  default: 'default'
}

const FormItem = ({ type, label, ...restProps }) => {
  const [expanded, setExpanded] = useState(false)
  const [selectOptions, setSelectOptions] = useState([])
  const [value, setValue] = useState(restProps.value || null)

  const handleChangeInput = (e) => setValue(e.target.value)

  const handleSelectEvent = (e, opt) => (
    e.target.checked
      ? setSelectOptions((prev) => [...prev, opt])
      : setSelectOptions((prev) => prev.filter((el) => el !== opt))
  )

  switch (type) {
    case (FormItemType.date):
      return (
        <StyledFormItem>
          <Label label={label} />
          <Input.Date
            type={type}
            min={MIN_DATE}
            max={MAX_DATE}
            id={label}
            value={value}
            onChange={handleChangeInput}
          />
        </StyledFormItem>
      )
    case (FormItemType.url):
      return (
        <StyledFormItem>
          <Label label={label} />
          <Input
            type={type}
            id={label}
            value={value}
            onChange={handleChangeInput}
          />
        </StyledFormItem>
      )
    case (FormItemType.number):
      return (
        <StyledFormItem>
          <Label label={label} />
          <Input.Number
            type={type}
            id={label}
            value={value}
            onChange={handleChangeInput}
          />
        </StyledFormItem>
      )
    case (FormItemType.select):
      return (
        <StyledFormItem onMouseLeave={() => setExpanded(false)}>
          <Label label={label} />
          <SelectWrapper onClick={() => setExpanded(!expanded)}>
            <Select>
              {!selectOptions.length
                ? <option>{restProps.placeholder}</option>
                : (
                  <option>
                    {selectOptions.reduce((acc, el) => {
                      // eslint-disable-next-line no-param-reassign
                      acc += `${el} `
                      return acc
                    }, '')}
                  </option>
                )}
            </Select>
            <OverSelect />
          </SelectWrapper>
          <Options expanded={expanded}>
            {restProps.options.map((opt) => (
              <label htmlFor={opt} key={opt}>
                <Input.Checkbox
                  id={opt}
                  key={opt}
                  onClick={(e) => handleSelectEvent(e, opt)}
                />
                {opt}
              </label>
            ))}
          </Options>
        </StyledFormItem>
      )
    case (FormItemType.textArea):
      return (
        <StyledTextAreaFormItem>
          <Label label={label} />
          <TextArea
            value={value}
            onChange={handleChangeInput}
          />
        </StyledTextAreaFormItem>
      )
    default:
      return (
        <StyledFormItem>
          <Label label={label} />
          <Input
            {...restProps}
            value={value}
            onChange={handleChangeInput}
          />
        </StyledFormItem>
      )
  }
}

FormItem.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export { FormItem, FormItemType }
