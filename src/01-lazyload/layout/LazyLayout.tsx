import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { LazyPageOne, LazyPageThree, LazyPageTwo } from '../pages'

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>
      <ul>
        <li>
          <NavLink to='lazy1'>Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to='lazy2'>Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to='lazy3'>Lazy 1</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='lazy1' element={<LazyPageOne />}/>
        <Route path='lazy2' element={<LazyPageTwo />}/>
        <Route path='lazy3' element={<LazyPageThree />}/>

        <Route path='*' element={<Navigate replace to='lazy1'/>}/>
      </Routes>
    </div>
  )
}

export default LazyLayout
