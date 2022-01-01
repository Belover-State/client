import React, { ReactNode } from 'react'

import cx from 'classnames'
import css from './Container.module.scss'

interface ContainerProps {
    children?: ReactNode
    className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
    <div className={cx(css.container, className)}>
        {children}
    </div>
)
