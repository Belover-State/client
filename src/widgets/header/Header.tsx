import { ReactNode } from "react";

import cx from 'classnames'
import css from './Header.module.scss'

import { ReactComponent as AboutIcon } from '../../components/icons/about.svg'
import { ReactComponent as UserIcon } from '../../components/icons/user.svg'
import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { ReactComponent as Logo } from '../../components/icons/logo.svg'

interface HeaderProps {
    children?: ReactNode
}

export const Header: React.FC<HeaderProps> = () => (
    <header className={cx(css.header)}>
        <Container className={cx(css.header__left)}>
            <Button className={cx(css.header__button)} icon={<AboutIcon className={cx(css.header__icon)} />} />
        </Container>
        <Logo className={cx(css.header__logo)} />
        <Container className={cx(css.header__right)}>
            <Button className={cx(css.header__button)} icon={<UserIcon className={cx(css.header__icon)} />} />
        </Container>
    </header>
)