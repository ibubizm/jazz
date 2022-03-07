import { Navbar } from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes'
import { useState } from 'react'
import { UserContext } from './context'
import { Calendar } from './components/calendar/calendar'

import './App.css'

const obj = [
  {
    date: '2022-03-08',
    title: 'Захватить мир',
    id: 1646663505527,
  },
  {
    date: '2022-03-10',
    title: 'Сходить за хлебом',
    id: 1646663510808,
  },
]

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})
  const [contextEvents, setContextEvents] = useState(obj)

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          isAuth,
          setIsAuth,
          user,
          setUser,
          contextEvents,
          setContextEvents,
        }}
      >
        <BrowserRouter>
          <Navbar />
          {/* <Calendar /> */}
          {isAuth ? (
            <Routes>
              {privateRoutes.map((route) => (
                <Route
                  path={route.path}
                  key={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          ) : (
            <Routes>
              {publicRoutes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              ))}
            </Routes>
          )}
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App
