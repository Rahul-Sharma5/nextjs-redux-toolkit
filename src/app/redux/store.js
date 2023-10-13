const { configureStore } = require("@reduxjs/toolkit");
import usersReducers from './slice'
import todoReducers from './todoSlice'

export const store = configureStore({
    reducer: {
        usersData:usersReducers,
        todosData:todoReducers
    }
})