import { configureStore } from "@reduxjs/toolkit"
import dataReducer from "../RTK/Slice/dataSlice"

export const store = configureStore({
	reducer: {
		data: dataReducer,
	},
})
