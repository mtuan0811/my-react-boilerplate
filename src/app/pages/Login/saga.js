import { call, put, takeLatest , all , delay} from 'redux-saga/effects'
import { createAction } from '@reduxjs/toolkit';
import { login } from '../../../services/user'
import { AUTH_LOGIN_REQUEST } from './action'
import { createNotification, TYPE_NOTIFICATION } from '../../../utils/notification';
import { hideLoading, showLoading } from '../../../store/global';

export const createInfo = createAction('user/createInfo');

function* authLogin(action) {
  const navigate = action.payload.navigate
  try {
    yield put(showLoading())
    const user = yield call(login, action.payload.data)
    yield put(createInfo(user.data.data))
    yield delay(3000)
    yield createNotification(TYPE_NOTIFICATION.SUCCESS, 'Login Successfully')
    yield put(hideLoading())
    if(navigate){
      yield put(navigate('/'))
    }
  } catch (e) {
    yield put(hideLoading())
    yield createNotification(TYPE_NOTIFICATION.ERROR, 'Login Error')
  }
}

function* userSaga() {
  yield takeLatest(AUTH_LOGIN_REQUEST, authLogin)
}

export default function* userAuthSaga(){
  yield all([userSaga()]);
}