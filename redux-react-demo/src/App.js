import {Provider} from 'react-redux';
import HooksCakeShop from './components/HooksCakeShop';
import IceCreamShop from './components/IceCreamShop';
import User from './components/User';
import store from './redux/store';

// const { default: CakeShop } = require("./components/CakeShop");

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      {/* <CakeShop/> */}
      {/* <HooksCakeShop/>
      <IceCreamShop/> */}
      <User/>
      </div>
    </Provider>
  );
}

export default App;
