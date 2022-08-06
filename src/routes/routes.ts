import { lazy, LazyExoticComponent } from 'react'

// eslint-disable-next-line no-undef
type JSXComponent = () => JSX.Element

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPageOne'))
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPageTwo'))
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPageThree'))

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy-1'
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy-2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy-3'
  }
]
