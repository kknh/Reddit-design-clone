import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const useMenuToggler = (btnId, menuId) => {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const toggleMenu = (e) => {
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

		document.addEventListener('click', toggleMenu)
		return () => document.removeEventListener('click', toggleMenu)
	}, [btnId, menuId])

	return [menuOpen]
}
export default useMenuToggler

useMenuToggler.propTypes = {
	btnId: PropTypes.string.isRequired,
	menuId: PropTypes.string,
}
