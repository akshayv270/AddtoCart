import React from 'react'
import { Provider } from 'react-redux'
import GetProduct from './components/GetProduct'
import store from './store/store'
import './App.css'
import Addtocartcom from './components/Addtocartcom'
import { Route, Routes,Navigate } from 'react-router-dom'
import Header from './pages/Header'
import NotFound from './pages/NotFound'



const App = () => {
  return (
    <>
      <Provider store={store}>
      <Header/>
        <Routes>
          <Route path='/' element={<GetProduct />} />
          <Route path='cart' element={<Addtocartcom />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>

      </Provider>
    </>
  )
}

export default App