document.getElementById('image-input').addEventListener('input', display_image);

function display_image(event) {
	let imageDisplay = document.getElementById('image-display');
	imageDisplay.src = URL.createObjectURL(event.target.files[0]);
}
