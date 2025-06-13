import { combineReducers } from '@reduxjs/toolkit';

import sidebarReducer from '@/lib/redux/slices/sidebarSlice';
import themeReducer from '@/lib/redux/slices/themeSlice';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
});

export default rootReducer;
