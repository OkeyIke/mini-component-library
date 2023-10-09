import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    fontSize: 14,
    height: 24,
    iconSize: 16,
    strokeWidth: 1,
  },
  large: {
    fontSize: 18,
    height: 36,
    iconSize: 24,
    strokeWidth: 2,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...props
}) => {
  const styles = STYLES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`)
  }

  return (
    <Wrapper size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledIcon style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </StyledIcon>
      <Input
        placeholder={placeholder}
        {...props}
        style={{
          '--width': width + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
          '--height': styles.height / 16 + 'rem',
          '--stroke-width': styles.strokeWidth + 'px',
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const Input = styled.input`
  appearance: none;
  width: var(--width);
  height: var(--height);
  border: none;
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  border-bottom: var(--stroke-width) solid ${COLORS.black};
  padding-left: var(--height);
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
`

export default IconInput
