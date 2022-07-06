const allElements = document.querySelectorAll('.menu__item');

for (const menuItems of allElements) {
	menuItems.addEventListener('click', (event) => {
		const findParent = event.target.closest(".menu__item");
		const subMenu = findParent.querySelector(".menu_sub");
		if (subMenu != null) {
			subMenu.classList.toggle("menu_active");
			event.preventDefault();
		}
	})
};

