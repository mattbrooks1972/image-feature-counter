document.getElementById('image-input').addEventListener('input', display_image);
document.getElementById('image-display').addEventListener('load', fit_image_to_canvas);

let canvas = document.getElementById('image-canvas');
let ctx = canvas.getContext('2d');

function display_image(event) {
	let imageDisplay = document.getElementById('image-display');
	imageDisplay.src = URL.createObjectURL(event.target.files[0]);
}

function fit_image_to_canvas(event) {
	let imageCanvas = document.getElementById('image-canvas')
	imageCanvas.height = event.target.naturalHeight;
	imageCanvas.width = event.target.naturalWidth;
}
