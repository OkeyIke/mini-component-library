/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--padding': 0,
    '--radius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--padding': 0,
    '--radius': 8 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--radius': 8 + 'px',
  },
}

/* Self Build Progress Bar */

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }

  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={styles}
    >
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value + '%'};
  height: var(--height);
  border-radius: 4px 0 0 4px;
`

/* Semantic way using the <progress> element. */
/* Currently not working with all web browser properly */

/* const ProgressBar = ({ value, size }) => { */
/*   const styles = SIZES[size] */
/*   return ( */
/*     <> */
/*       <StyledBar max='100' value={value} style={styles}></StyledBar> */
/*       <VisuallyHidden>{value}%</VisuallyHidden> */
/*     </> */
/*   ) */
/* } */

/* Styles for ProgressBar */

/* const StyledBar = styled.progress` */
/*   box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35}; */
/*   border: none; */
/*   border-radius: var(--radius); */
/*   background-color: ${COLORS.transparentGray15}; */
/*   height: var(--height); */
/*   width: 370px; */
/*   padding: var(--padding); */
/*   appearance: none; */
/*   -webkit-appearance: none; */
/*   -moz-appearance: none; */
/*   &::-webkit-progress-bar { */
/*     background-color: ${COLORS.transparentGray15}; */
/*   } */
/**/
/*   &::-moz-progress-bar { */
/*     background-color: ${COLORS.primary}; */
/*   } */
/**/
/*   &[value]::-moz-progress-bar { */
/*     background-color: ${COLORS.primary}; */
/*     border-radius: var(--radius); */
/*   } */
/**/
/*   &[value]::-webkit-progress-value { */
/*     background-color: ${COLORS.primary}; */
/*     border-radius: var(--radius); */
/*   } */
/* ` */
export default ProgressBar
