import { useContext } from 'react'
import { UserContext } from '../../context'
import './profile.css'

export const Profile = () => {
  const { user } = useContext(UserContext)
  return (
    <div className="profile">
      <h1>Профиль</h1>
      <div className="profile__content container">
        <img src={user.avatar} alt="" />
        <div className="desc">
          <div>имя: {user.name}</div>
          <div>фамилия: {user.lastName}</div>
          <div>email: {user.email}</div>
          <div>пол: {user.sex}</div>
          <div>статус: {user.status}</div>
        </div>
      </div>
    </div>
  )
}
