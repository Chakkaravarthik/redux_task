import { Provider } from 'react-redux'
import store from './assets/store/store'
import CartItem from './assets/showcomponent'
import TotalComponent from './assets/totalcomponent'


function App() {


  return (
    <>
      <Provider store={store}>
        <CartItem  />
        <TotalComponent/>
      </Provider>
    </>
  )
}


export default App
