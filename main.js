document.getElementById('image-input').addEventListener('input', display_image);
document.getElementById('image-display').addEventListener('click', fit_image_to_canvas);

function display_image(event) {
	let imageDisplay = document.getElementById('image-display');
	imageDisplay.src = URL.createObjectURL(event.target.files[0]);
}
