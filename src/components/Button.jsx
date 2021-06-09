import React from 'react'
import classnames from 'classnames'


const Button = ({children, className, outline}) => {
    return (
        <button className={classnames('button', className)}>{children}</button>
    )
}

export default Button