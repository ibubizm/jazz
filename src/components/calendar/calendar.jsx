import React, { useContext, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { Button } from '../button/button'
import { Modal } from '../modal/modal'
import { UserContext } from '../../context'
import './calendar.css'
import { settings } from './calendarSettings'

export const Calendar = () => {
  const { setContextEvents, contextEvents } = useContext(UserContext)
  const [visible, setVisible] = useState(false)
  const [values, setValues] = useState({ date: '', title: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(contextEvents)
    setContextEvents([...contextEvents, values])
    setVisible(false)
    setValues({ date: '', title: '' })
  }
  return (
    <div className="calendar">
      <Button style={{ marginTop: '40px' }} onClick={() => setVisible(true)}>
        создать
      </Button>
      <FullCalendar {...settings} events={contextEvents} />

      {visible && (
        <Modal onClose={() => setVisible(false)} title={'создайте событие'}>
          <form onSubmit={onSubmit}>
            <input
              className="input"
              value={values.date}
              onChange={(e) =>
                setValues({ ...values, date: e.target.value, id: Date.now() })
              }
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
          <Button onClick={onSubmit}>создать</Button>
        </Modal>
      )}
    </div>
  )
}
