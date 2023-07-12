import React from "react"

// Importation des differentes View
import Home from "../Views/Home/Home"
import Error from "../Views/Error/Error"

// Création des routes
const routes = [
	{
		path: "/",
		component: <Home />,
	},
	// {
	// 	path: "/employee",
	// 	component: <Employee />,
	// },
	{
		path: "/*",
		component: <Error />,
	},
]

const Path = (route) => route.component

export { Path, routes }
