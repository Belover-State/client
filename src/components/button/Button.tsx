import React, { CSSProperties, ReactNode } from 'react'

import cx from 'classnames'
import css from './Button.module.scss'

interface ButtonProps {
    text?: string
    onClick?: () => void
    className?: string
    styles?: CSSProperties
    icon?: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className, icon, styles }) => (
    <button className={cx(css.button, css.text, className)} onClick={onClick} style={styles}>
        {icon &&
            <div className={cx(css.button__icon)}>{icon}</div>
        }
        {text}
    </button>
);
