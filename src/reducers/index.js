import { combineReducers } from 'redux';
import DeckReducer from './deck_reducer';
import HandsReducer from './hands_reducer';

const rootReducer = combineReducers({
  deck: DeckReducer,
  hands: HandsReducer,
});

export default rootReducer;
