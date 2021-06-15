import React from 'react'
import classnames from 'classnames'


const Button = ({children, className, outline, onClick}) => {
    return (
        <button onClick={onClick} className={classnames('button', className)}>{children}</button>
    )
}

export default Button