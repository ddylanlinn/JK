import './styles.css'
import React, {useState} from 'react'
import {RouteContext, DevelopingContext} from './context'
import {Product, Cart, Home} from './pages'
import {DevelopingPop} from './components'

const App = () => {
  const [route, setRoute] = useState<'product' | 'cart' | 'home'>('cart')
  const [displayDevelopingPop, setDisplayDevelopingPop] = useState(false)
  console.log(route)

  const renderContent = () => {
    switch (route) {
      case 'product':
        return <Product />
      case 'cart':
        return <Cart />
      case 'home':
        return <Home />
      default:
        return <Home />
    }
  }

  return (
    <DevelopingContext.Provider
      value={{displayDevelopingPop, setDisplayDevelopingPop}}
    >
      {displayDevelopingPop && <DevelopingPop />}
      <RouteContext.Provider value={{route, setRoute}}>
        {renderContent()}
      </RouteContext.Provider>
    </DevelopingContext.Provider>
  )
}

export default App
