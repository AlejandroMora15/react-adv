import { FormikAbstract, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from '../03-forms/pages'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../assets/react.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='logo'/>
          <ul>
            <li>
              <NavLink to='/register' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik basic</NavLink>
            </li>
            <li>
              <NavLink to='/formik-yup' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to='/formik-components' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik components</NavLink>
            </li>
            <li>
              <NavLink to='/formik-abstract' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik abstract</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='register' element={<RegisterPage />} />
          <Route path='formik-basic' element={<FormikBasicPage />} />
          <Route path='formik-yup' element={<FormikYupPage />} />
          <Route path='formik-components' element={<FormikComponents/>} />
          <Route path='formik-abstract' element={<FormikAbstract />} />
          <Route path='*' element={<Navigate to='/register' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
