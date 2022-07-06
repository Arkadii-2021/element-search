const elementsModalMain = document.getElementsByClassName('modal').modal_main;
const elementsButton = document.getElementsByClassName('btn btn_danger modal__close show-success')[0];
const modalSuccessClose = document.getElementById('modal_success');


function elModal() {
	elementsModalMain.className = 'modal modal_active';
	elementsButton.onclick = () => {
	elementsModalMain.className = 'modal';
	document.getElementsByClassName('modal').modal_success.className = 'modal modal_active';
	};
}

document.addEventListener( 'click', (event) => {
	const modalSuccess = event.composedPath().includes(modalSuccessClose);

	if (modalSuccess) {
		modalSuccessClose.style.display = 'none';
	}
})

document.querySelector("div.modal__close.modal__close_times").onclick = () => document.getElementById('modal_main').style = "display: none";

elModal();
