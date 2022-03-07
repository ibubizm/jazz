import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context'
import { Button } from '../button/button'

export const Navbar = () => {
  const { isAuth, user, setIsAuth, setUser } = useContext(UserContext)

  const logOff = () => {
    setIsAuth(false)
    setUser({})
  }
  return (
    <nav className="nav">
      <div className="container nav__content">
        <ul className="nav__left">
          <li>
            <Link className="nav__link" to="/">
              главная
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={'profile'}>
              профиль
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={'info'}>
              информация
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={'table'}>
              таблица
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={'calendar'}>
              календарь
            </Link>
          </li>
        </ul>
        <div className="nav__right">
          {!isAuth ? (
            <Link className="nav__link" to={'login'}>
              login
            </Link>
          ) : (
            <div className="nav__user">
              {`${user.name} ${user.lastName}`}
              <Button className={'btn__nav'} onClick={logOff}>
                выйти
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
