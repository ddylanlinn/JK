import {createContext} from 'react'

type RouteContextT = {
  route: 'product' | 'cart' | 'home'
  setRoute: React.Dispatch<React.SetStateAction<'product' | 'cart' | 'home'>>
}

export const RouteContext = createContext<RouteContextT>({
  route: 'home',
  setRoute: () => {}
})

type DevelopingT = {
  displayDevelopingPop: boolean
  setDisplayDevelopingPop: React.Dispatch<React.SetStateAction<boolean>>
}

export const DevelopingContext = createContext<DevelopingT>({
  displayDevelopingPop: false,
  setDisplayDevelopingPop: () => {}
})
