import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy'

// eslint-disable-next-line no-undef
type JSXComponent = () => JSX.Element

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload',
    Component: LazyLayout,
    name: 'Dashboard'
  },
  {
    to: '/NoLazy',
    path: 'NoLazy',
    Component: NoLazy,
    name: 'No Lazy'
  }
]
