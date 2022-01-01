import React, { ReactNode } from 'react'

import cx from 'classnames'
import css from './Heading.module.scss'

interface HeadingProps {
    children?: ReactNode
    className?: string
    text: string
}

export const Heading: React.FC<HeadingProps> = ({ children, className, text }) => (
    <h4 className={cx(css.heading, className)}>
        {children}
        {text}
    </h4>
)
