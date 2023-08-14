import React from "react"

// Importation des differentes View
import Home from "../Views/Home/Home"
import Error from "../Views/Error/Error"
import EmployeeList from "../Views/Employee_List/EmployeeList"

// Création des routes
const routes = [
	{
		path: "/",
		component: <Home />,
	},
	{
		path: "/employee",
		component: <EmployeeList />,
	},
	{
		path: "/*",
		component: <Error />,
	},
]

const Path = (route) => route.component

export { Path, routes }
