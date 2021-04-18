document.getElementById('image-input').addEventListener('input', display_image);
document.getElementById('image-display').addEventListener('load', fit_image_to_canvas);
document.getElementById('input-image-opacity-slider').addEventListener('input', (event) => {
	document.getElementById('image-display').style.opacity = event.target.value + '%';
});

let canvas = document.getElementById('image-canvas');
let ctx = canvas.getContext('2d');

let mousePos = {x: 0, y: 0};
canvas.addEventListener('mousemove', set_mouse_pos);
canvas.addEventListener('click', mark_canvas);

function display_image(event) {
	let imageDisplay = document.getElementById('image-display');
	imageDisplay.src = URL.createObjectURL(event.target.files[0]);
}

function fit_image_to_canvas(event) {
	let imageCanvas = document.getElementById('image-canvas')
	imageCanvas.height = event.target.naturalHeight;
	imageCanvas.width = event.target.naturalWidth;
}

function set_mouse_pos(event) {
	var boundingRect = canvas.getBoundingClientRect();
	mousePos.x = event.clientX - boundingRect.left;
	mousePos.y = event.clientY - boundingRect.top;
}

function mark_canvas(event) {
	push_mark();
	increment_counter();
	render_canvas();
}

let marker = {
	marks: [],
	color: '#000000'
}

function push_mark() {
	marker.marks.push({...mousePos});
};

function render_canvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for(let i = 0; i < marker.marks.length; i++) {
		ctx.beginPath();
		ctx.fillStyle = marker.color;
		ctx.rect(marker.marks[i].x, marker.marks[i].y, 4, 4);
		ctx.fill();
	}
}

function increment_counter() {
	let counter = document.getElementById('mark-counter');
	let count = parseInt(counter.innerHTML) + 1;
	counter.innerHTML = count;
}
