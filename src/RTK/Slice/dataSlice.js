import { createSlice } from "@reduxjs/toolkit"

import data from "../../data/mockEmplyeeList.json"

const initialState = {
	data: [],
	newEmployee: [],
	showMockData: false,
}

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		toggleMockData: (state) => {
			!state.showMockData ? (state.data = data) : (state.data = [])
			state.showMockData = !state.showMockData
		},
		addEmployee: (state, action) => {
			state.newEmployee.push(action.payload)
		},
	},
})
export const { toggleMockData, addEmployee } = dataSlice.actions

export default dataSlice.reducer
