import { ReactElement } from 'react'

export interface Product {
  id: string,
  title: string,
  img?: string
}

export interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[]
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  // eslint-disable-next-line no-undef
  ({ children, product }: ProductCardProps): JSX.Element;
  // eslint-disable-next-line no-undef
  Title: ({ title }: { title?: string | undefined }) => JSX.Element
  // eslint-disable-next-line no-undef
  Image: ({ img }: { img?: string | undefined }) => JSX.Element
  // eslint-disable-next-line no-undef
  Buttons: () => JSX.Element
}
