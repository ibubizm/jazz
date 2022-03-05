import './table.css'
import db from './data.json'
import { useState } from 'react'
import { Modal } from '../modal/modal'
import { Button } from '../button/button'

export const Table = () => {
  const [data, setData] = useState(db)
  const [list, setList] = useState([])
  const [active, setActive] = useState([])
  const [visible, setVisible] = useState({
    visible: false,
    feald: null,
    currentItem: {},
  })
  const [input, setInput] = useState('')

  const addRow = (row) => {
    if (!active.includes(row.id)) {
      setActive([...active, row.id])
    } else {
      setActive(active.filter((i) => i != row.id))
    }
    setList([...list, row.id])
  }

  const modalVisible = (i, fealdName) => {
    setVisible({ visible: true, feald: fealdName, currentItem: i })
  }

  const onChangeRow = (i, fealdName) => {
    const newData = data.map((item) => {
      if (item.id == i.id) {
        if (fealdName == 'имя') {
          item.first_name = input
        }
        if (fealdName == 'фамилия') {
          item.last_name = input
        }
        if (fealdName == 'email') {
          item.email = input
        }
        if (fealdName == 'пол') {
          alert('пол менять нельзя!!!!')
        }
        if (fealdName == 'ip') {
          alert('ip менять нельзя!!!!')
        }
      }
      return item
    })
    setData(newData)
    setInput('')
    setVisible({ ...visible, visible: false })
  }

  return (
    <div className="container" id="page">
      <h1>Таблица</h1>
      <div className="counter">
        <div>
          Всего строк <strong>{data.length}</strong>
        </div>
        <div>
          Выделено строк <strong>{active.length}</strong>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>фамилия</th>
              <th>имя</th>
              <th>email</th>
              <th>пол</th>
              <th>ip адрес</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr
                className={active.includes(i.id) ? 'active' : ''}
                onClick={() => addRow(i)}
                key={i.id}
              >
                <td>{i.id}</td>
                <td
                  onDoubleClick={() => {
                    modalVisible(i, 'фамилия')
                  }}
                >
                  {i.last_name}
                </td>
                <td
                  onDoubleClick={() => {
                    modalVisible(i, 'имя')
                  }}
                >
                  {i.first_name}
                </td>
                <td
                  onDoubleClick={() => {
                    modalVisible(i, 'email')
                  }}
                >
                  {i.email}
                </td>
                <td
                  onDoubleClick={() => {
                    modalVisible(i, 'пол')
                  }}
                >
                  {i.gender}
                </td>
                <td
                  onDoubleClick={() => {
                    modalVisible(i, 'ip')
                  }}
                >
                  {i.ip_address}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visible.visible && (
        <Modal
          title={visible.feald}
          onClose={() => {
            setVisible({ ...visible, visible: false })
          }}
        >
          <form
            onSubmit={() => onChangeRow(visible.currentItem, visible.feald)}
          >
            <input
              type="text"
              active
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
            // onClick={() => onChangeRow(visible.currentItem, visible.feald)}
            >
              save
            </Button>
          </form>
        </Modal>
      )}
    </div>
  )
}
