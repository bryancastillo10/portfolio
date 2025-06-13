import { combineReducers } from '@reduxjs/toolkit';

import sidebarReducer from '@/lib/redux/slices/sidebarSlice';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export default rootReducer;
