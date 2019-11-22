import React from 'react'

export default function Form(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}