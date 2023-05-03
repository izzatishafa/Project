/**
 * Komponen route privat, akan redirect jika tidak sesuai dengan kondisi
 * terpisah berdasarkan halaman route menggunakan double slash
 */
import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children, redirectTo = '/auth/login', allow = [],path, ...props }) => {
	const location = useLocation()
	const routePath = path.includes(":")?path.slice(0, path.indexOf(":")):path
	const allowBoolExec = location.pathname.includes(routePath) ? allow.map((func) => func()) : [true]
	return (
		<Route
			{...props}
			render={({ _location }) =>
				!allowBoolExec.includes(false) ? (
					children
				) : (
					<Redirect
						to={{
							pathname: redirectTo,
							state: { from: _location }
						}}
					/>
				)
			}
		/>
	)
}

export default PrivateRoute