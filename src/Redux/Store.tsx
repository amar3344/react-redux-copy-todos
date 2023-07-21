import {createStore} from 'redux';

import reducer from './Reducer/AuthReducer';

const store = createStore(reducer);

export default store;
