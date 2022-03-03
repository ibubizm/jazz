import { Navbar } from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes'
import { useState } from 'react'
import { UserContext } from './context'

import './App.css'
import { Table } from './components/table/Table'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <UserContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
        <BrowserRouter>
          <Navbar />
          {/* <Table /> */}
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
