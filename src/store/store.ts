import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducers } from '@/store/root-reducer';
import rootSaga from '@/store/root-saga';

const sagaMiddleware = createSagaMiddleware();

export function makeStore() {
  return configureStore<any>({
    reducer: rootReducers,
    middleware: [sagaMiddleware],
  });
}

export const store = makeStore();

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
