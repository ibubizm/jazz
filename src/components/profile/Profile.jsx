import { useContext, useState } from 'react'
import { UserContext } from '../../context'
import { Button } from '../button/button'
import { Modal } from '../modal/modal'
import './profile.css'

export const Profile = () => {
  const { user, contextEvents, setContextEvents } = useContext(UserContext)
  const [visible, setVisible] = useState({ visible: false, currentItem: {} })
  const [values, setValues] = useState({ date: '', title: '' })

  const editEvent = (item) => {
    const list = contextEvents.map((i) => {
      if (i.id === item.id) {
        i.title = values.title
        i.date = values.date
      }
      return i
    })
    setContextEvents(list)
    setValues({ date: '', title: '' })
    setVisible({ visible: false, currentItem: {} })
  }

  return (
    <div className="profile">
      <h1>Профиль</h1>
      <div className="card">
        <img className="profile__img" src={user.avatar} alt="" />
        <div className="desc">
          <h1>{`${user.name} ${user.lastName}`}</h1>
          <p className="email">{user.email}</p>
          <p>пол: {user.sex}</p>
          <p>статус: {user.status}</p>
          {contextEvents.length > 0 && (
            <div className="">
              <h3>запланированные события</h3>
              {contextEvents.map((i) => (
                <div className="event" key={i.id}>
                  <span className="event__date">
                    {i.date.split('-').reverse().join('-')}
                  </span>
                  <strong className="event__title">{i.title}</strong>
                  <Button
                    className="btn--black"
                    onClick={() =>
                      setVisible({ visible: true, currentItem: i })
                    }
                  >
                    изменить
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {visible.visible && (
        <Modal onClose={() => setVisible(false)} title={'изменить событие'}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="input"
              value={values.date}
              onChange={(e) => setValues({ ...values, date: e.target.value })}
              type="date"
              placeholder="date"
            />
            <input
              className="input"
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              type="text"
              placeholder="title"
            />
          </form>

          <Button onClick={() => editEvent(visible.currentItem)}>
            изменить
          </Button>
        </Modal>
      )}
    </div>
  )
}
