import React from 'react'

const Button = ({
  onClickHandler = () => window.alert('Hello world'), // eslint-disable-line
  children
}) => (
  <button type='button' onClick={onClickHandler}>
    {children || 'Click me!'}
  </button>
)

export default Button
