import { fork , all} from 'redux-saga/effects';
import userAuthSaga from './app/pages/Login/saga';

export function* rootSaga () {
    yield all([
        fork(userAuthSaga),
    ]);
}