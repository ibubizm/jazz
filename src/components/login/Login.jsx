import { useContext, useState } from 'react'
import { UserContext } from '../../context'
import { Button } from '../button/button'
import './login.css'
import { useNavigate } from 'react-router-dom'

const admin = {
  userName: 'admin',
  password: 12345678,
}

const user = {
  name: 'Ernest',
  lastName: 'Ibubizm',
  email: 'a1234765@yandex.ru',
  sex: 'мужской',
  avatar: 'https://avatars.githubusercontent.com/u/66380357?v=4',
  status: 'продам гараж',
}

export const Login = () => {
  const navigate = useNavigate()
  const { isAuth, setIsAuth, setUser } = useContext(UserContext)
  const [values, setValues] = useState({ login: '', password: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    if (values.login == admin.userName && values.password == admin.password) {
      //получил даннык с сервера и закинул в контекст
      setIsAuth(true)
      setUser(user)
      navigate('profile')
    } else {
      alert('Имя пользователя или пароль введены неверно')
    }
  }
  return (
    <div className="login">
      <h1>login</h1>
      <form onSubmit={onSubmit}>
        <div className="input__block">
          <label htmlFor="login">login</label>
          <input
            value={values.login}
            onChange={(e) => {
              setValues({ ...values, login: e.target.value })
            }}
            placeholder="login"
            id="login"
            type="text"
          />
        </div>
        <div className="input__block">
          <label htmlFor="password">password</label>
          <input
            value={values.password}
            onChange={(e) => {
              setValues({ ...values, password: e.target.value })
            }}
            placeholder="password"
            id="password"
            type="password"
          />
        </div>
        <Button>войти</Button>
      </form>
    </div>
  )
}
