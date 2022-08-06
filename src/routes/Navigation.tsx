import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { LazyPageOne, LazyPageTwo, LazyPageThree } from '../01-lazyload/pages'
import logo from '../assets/react.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='logo'/>
          <ul>
            <li>
              <NavLink to='/Lazy1' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 1</NavLink>
            </li>
            <li>
              <NavLink to='/Lazy2' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
            </li>
            <li>
              <NavLink to='/Lazy3' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='lazy1' element={<LazyPageOne />} />
          <Route path='lazy2' element={<LazyPageTwo />} />
          <Route path='lazy3' element={<LazyPageThree />} />
          <Route path='*' element={<Navigate to='/lazy1' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
