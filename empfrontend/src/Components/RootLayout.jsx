import Header from './Header'
import { Outlet } from 'react-router'
import { useContext } from 'react'
import { counterContexObj } from '../contexts/ContextProvider'

function RootLayout() {
  const { counter } = useContext(counterContexObj);

  return (
    <div>
      <Header />
      <div>
      <Outlet />
      </div>
    </div>
  )
}

export default RootLayout