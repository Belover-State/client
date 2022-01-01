import React, { ReactNode } from 'react'

import cx from 'classnames'
import css from './Card.module.scss'

interface CardProps {
    children?: ReactNode
    className?: string
    onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ children, className, onClick }) => (
    <div onClick={onClick} className={cx(css.card, className)}>
        {children}
    </div>
)