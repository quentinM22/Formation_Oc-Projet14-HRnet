import { Route, Routes } from "react-router-dom"
import { routes, Path } from "../Routes/routes"
import "./App.css"

function App() {
	return (
		<Routes>
			{routes.map((route, index) => (
				<Route key={index} path={route.path} element={<Path {...route} />} />
			))}
		</Routes>
	)
}

export default App
