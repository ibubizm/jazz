import { Login } from '../components/login/Login'
import { Profile } from '../components/profile/Profile'
import { Info } from '../components/info/Info'
import { Main } from '../components/main/Main'
import { Table } from '../components/table/Table'

export const publicRoutes = [
  { path: 'login', element: <Login /> },
  { path: '/', element: <Main /> },
  { path: '*', element: <Login /> },
]

export const privateRoutes = [
  { path: '/', element: <Main /> },
  { path: 'info', element: <Info /> },
  { path: 'profile', element: <Profile /> },
  { path: 'table', element: <Table /> },
  { path: '*', element: <Profile /> },
]
