import { combineReducers } from 'redux';
import { IRootState } from '../../types';
import todo from './todo';


export default combineReducers<IRootState>({
  todo
});