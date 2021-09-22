import { take, takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers); // код, ниже call дожидается завершения функции вызванной в call, без колбэков, then или async await
    yield put(actions.getUsersSuccess({
      items: result.data
    }));
  } catch (e) {
    yield put(actions.usersError({
      error: 'Something goes wrong when we trying to get users...'
    }));
  };
}; 

function* createUser(action) {
  try {
    yield call(api.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName
    });
    yield call(getUsers);
  } catch (e) {
    yield put(actions.usersError({
      error: 'Something goes wrong when we trying to create users...'
    }));
  };
}; 

function* deleteUser(action) {
  try {
    yield call(api.deleteUser, {
      id: action.payload.id
    });
    yield call(getUsers);
  } catch (e) {
    yield put(actions.usersError({
      error: 'Something goes wrong when we trying to delete users...'
    }));
  };
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
};

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
};

function* watchDeleteUserRequest() {
  yield takeLatest(actions.Types.DELETE_USER_REQUEST, deleteUser);
};

// function* watchDeleteUserRequest(){
//   while(true){
//       const {payload} = yield take(actions.Types.DELETE_USER_REQUEST);
//       console.log(payload)
//       yield call(deleteUser, payload.id);
//   }
// }

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSagas;
