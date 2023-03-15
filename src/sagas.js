import { fork } from 'redux-saga/effects';
import userSaga from './app/pages/Login/saga';

export function* rootSaga () {
    yield [
        fork(userSaga),
    ];
}