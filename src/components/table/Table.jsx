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
    field: null,
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

  const modalVisible = (i, fieldName) => {
    setVisible({ visible: true, field: fieldName, currentItem: i })
  }

  const onChangeRow = (i, fieldName) => {
    const newData = data.map((item) => {
      if (item.id == i.id) {
        if (fieldName == 'имя') {
          item.first_name = input
        }
        if (fieldName == 'фамилия') {
          item.last_name = input
        }
        if (fieldName == 'email') {
          item.email = input
        }
        if (fieldName == 'пол') {
          alert('пол менять нельзя!!!!')
        }
        if (fieldName == 'ip') {
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
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">id</th>
              <th className="th">фамилия</th>
              <th className="th">имя</th>
              <th className="th">email</th>
              <th className="th">пол</th>
              <th className="th">ip адрес</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr
                className={active.includes(i.id) ? 'tr active' : 'tr'}
                onClick={() => addRow(i)}
                key={i.id}
              >
                <td className="td">{i.id}</td>
                <td
                  className="td"
                  onDoubleClick={() => {
                    modalVisible(i, 'фамилия')
                  }}
                >
                  {i.last_name}
                </td>
                <td
                  className="td"
                  onDoubleClick={() => {
                    modalVisible(i, 'имя')
                  }}
                >
                  {i.first_name}
                </td>
                <td
                  className="td"
                  onDoubleClick={() => {
                    modalVisible(i, 'email')
                  }}
                >
                  {i.email}
                </td>
                <td
                  className="td"
                  onDoubleClick={() => {
                    modalVisible(i, 'пол')
                  }}
                >
                  {i.gender}
                </td>
                <td
                  className="td"
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
          title={visible.field}
          onClose={() => {
            setVisible({ ...visible, visible: false })
          }}
        >
          <form
            onSubmit={() => onChangeRow(visible.currentItem, visible.field)}
          >
            <input
              type="text"
              active
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button>save</Button>
          </form>
        </Modal>
      )}
    </div>
  )
}
