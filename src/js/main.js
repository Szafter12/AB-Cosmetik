window.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('.nav__mobile-items')
	const burgerBtn = document.querySelector('.nav__mobile-burger')

	const showMobile = () => {
		if (nav.classList.contains('active-mobile')) {
			nav.classList.remove('active-mobile')
		} else {
			nav.classList.add('active-mobile')
		}
	}

	burgerBtn.addEventListener('click', showMobile)
})
