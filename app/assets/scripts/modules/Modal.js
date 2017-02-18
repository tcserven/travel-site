import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $('.open-modal'); 
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events() {
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// clicking the X close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// user pushes the scape key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass('modal--is-visible');
		// why do we need this? Its because when we click on a link that points to #, the browser will by default scroll back to the top. This prevents it.
		return false;
	}

	closeModal() {
		// the this key doesnt refer to our main class anymore. we cant access the modal property. This is because we are running these methods through the events method (event handler). This instead refers to the element that was just clicked on.  
		this.modal.removeClass('modal--is-visible');
	}

}

export default Modal;