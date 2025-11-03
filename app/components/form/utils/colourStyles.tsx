import type { StylesConfig } from 'react-select'

export const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: '#f0eef2',
    borderRadius: '10px',
    border: 'none',
    textAlign: 'left',
    color: '#fb733c',
    padding: '0px 2px',
    marginTop: '10px',
    fontSize: '16px',
    lineHeight: '18.3px',
    fontWeight: '700',
    height: '40px',
    cursor: 'pointer'
  }),
  placeholder: (styles) => ({
    ...styles,

    color: '#fb733c'
  }),

  indicatorsContainer: (styles) => ({
    ...styles,
    '& svg': {
      fill: '#fb733c'
    }
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none'
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#fb733c'
  }),
  input: (styles) => ({ ...styles, color: '#fb733c' }),
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? 'white' : '#fb733c',
    textAlign: 'left',
    backgroundColor: state.isSelected ? '#fb733c' : 'white',
    ':hover': {
      backgroundColor: state.isSelected ? 'white' : '#fb733c',
      color: state.isSelected ? '#fb733c' : 'white'
    }
  })
}
