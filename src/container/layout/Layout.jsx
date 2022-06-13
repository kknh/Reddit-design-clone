import './Layout.css'

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<div className="wrapper">{children}</div>
		</div>
	)
}
export default Layout
