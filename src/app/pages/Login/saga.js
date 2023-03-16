import { call, put, takeEvery, takeLatest , all } from 'redux-saga/effects'
import { createAction } from '@reduxjs/toolkit';
import { login } from '../../../services/user'
import { AUTH_LOGIN_REQUEST } from './action'
import { createNotification, TYPE_NOTIFICATION } from '../../../utils/notification';

export const createInfo = createAction('user/createInfo');

function* authLogin(action) {
  try {
    const user = yield call(login, action.payload)
    yield put(createInfo(user.data.data))
    yield createNotification(TYPE_NOTIFICATION.SUCCESS, 'Login Successfully')
  } catch (e) {
    yield createNotification(TYPE_NOTIFICATION.ERROR, 'Login Error')
  }
}

function* userSaga() {
  yield takeEvery(AUTH_LOGIN_REQUEST, authLogin)
}

export default function* userAuthSaga(){
  yield all([userSaga()]);
}