import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const useMenuToggler = (btnId, menuId) => {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const toggleNav = (e) => {
			const btnClicked = e.target.closest(btnId)
			let menuAndBtnNotClicked = ''

			if (btnClicked) {
				setMenuOpen((prev) => !prev)
			}

			if (menuId) {
				menuAndBtnNotClicked =
					!e.target.closest(menuId) && !e.target.closest(btnId)
			}

			if (menuAndBtnNotClicked) {
				setMenuOpen(false)
			}
		}

		document.addEventListener('click', toggleNav)
		return () => document.removeEventListener('click', toggleNav)
	}, [btnId, menuId])

	return [menuOpen]
}
export default useMenuToggler

useMenuToggler.propTypes = {
	btnId: PropTypes.string.isRequired,
	menuId: PropTypes.string,
}
