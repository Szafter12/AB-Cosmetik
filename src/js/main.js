window.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('.nav')
	const navMobile = document.querySelector('.nav__mobile-items')
	const navItems = document.querySelectorAll('.nav__item-moblie')
	const burgerBtn = document.querySelector('.nav__mobile-burger')
	const wave = document.querySelector('.waves')
	const home = document.querySelector('body')
	const upBox = document.querySelector('.up-box')
	const allSection = document.querySelectorAll('.section')

	home.style.setProperty = ('--height', window.innerHeight + 'px')

	 const showUpBox = () => {
		if (window.scrollY > 300) {
			upBox.classList.add('show__up-box')
		} else {
			upBox.classList.remove('show__up-box')
		}
	 }

	const navScroll = () => {
		if (window.scrollY > 0) {
			nav.classList.add('nav-scroll')
			setTimeout(() => {
				if (window.scrollY > 0) {
					wave.style.height = '0'
				}
			}, 500)
		} else {
			nav.classList.remove('nav-scroll')
			wave.style.height = 'auto'
		}
	}

	const showMobile = () => {
		if (navMobile.classList.contains('active-mobile')) {
			navMobile.classList.remove('active-mobile')
		} else {
			navMobile.classList.add('active-mobile')
		}
	}

	const setYear = () => {
		const date = new Date()
		let year = date.getFullYear()
		const spanYear = document.querySelector('.year')

		spanYear.textContent = year
	}

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('active-mobile')
		})
	})

	setYear()
	window.addEventListener('scroll', navScroll)
	window.addEventListener('scroll', showUpBox)
	upBox.addEventListener('click', () => {window.scrollTo({top: 0})})
	burgerBtn.addEventListener('click', showMobile)
})
