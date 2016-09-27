
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import reducer from './reducers';
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
    autoRehydrate(),
    devTools({
      name: 'flatapp', realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
