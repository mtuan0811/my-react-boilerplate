import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { createAction } from '@reduxjs/toolkit';
import { login } from '../../../services/user'
import { AUTH_LOGIN_REQUEST } from './action'

export const createInfo = createAction('user/createInfo');

function* authLogin(action) {
  try {
    console.log(action.payload)
    const user = yield call(login, action.payload)
    yield put(createInfo(user.data.data))
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* userSaga() {
  yield takeEvery(AUTH_LOGIN_REQUEST, authLogin)
}

export default userSaga