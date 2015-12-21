import shadowrunApp from '../reducers/ShadowrunApp'
import { createStore }  from 'redux';
const store = createStore(shadowrunApp);

module.exports = store;
