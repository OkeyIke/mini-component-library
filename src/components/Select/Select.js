import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <CustomSelect>
        {displayedValue}
        <StyledIcon style={{ '--size': 24 + 'px' }}>
          <Icon id='chevron-down' size={24} strokeWidth={2} />
        </StyledIcon>
      </CustomSelect>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`

const CustomSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  border: none;
  border-radius: 8px;
  ${StyledSelect}:focus + & {
    outline: 2px dotted #212121; /* older Browser */
    outline: auto 3px activeborder; /* Chrome */
    outline: auto 3px -moz-mac-focusring; /* Firefox */
    outline: 5px auto -webkit-focus-ring-color; /* Webkit, Safari */
  }
  ${StyledSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  width: var(--size);
  height: var(--size);
  margin: auto;
  pointer-events: none;
`

export default Select
