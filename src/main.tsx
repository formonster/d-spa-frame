import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import routes from './routes'
import lazyComponent from '@/components/LazyComponent'
import { store } from '@/store'
import Popup from '@/features/popup'
import { Provider } from 'react-redux'
import './index.less'

console.log('ENV', import.meta.env)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {routes.map((route) => {
            const Element = lazyComponent(route.element)
            return <Route key={route.path} {...route} element={<Element />} />
          })}
        </Routes>
      </BrowserRouter>
      <Popup />
    </Provider>
  </React.StrictMode>
)
