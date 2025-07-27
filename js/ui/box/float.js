document.querySelectorAll('.floating-container').forEach(container => {
    
    const top = container.dataset.top;
    const left = container.dataset.left;
    container.style.top = top + 'px';
    container.style.left = left + 'px';

    const floater = container.querySelector('.floater');

    let pos = { x: 100, y: 100 };
    let velocity = {
        x: Math.random(),
        y: Math.random()
    };

    const bounds = {
        width: container.clientWidth - floater.clientWidth - 0.5,
        height: container.clientHeight - floater.clientHeight
    };

    function updatePosition() {
        velocity.x += (Math.random() - 0.5) * 0.05;
        velocity.y += (Math.random() - 0.5) * 0.05;

        let speed = 0.5;
        let magnitude = Math.hypot(velocity.x, velocity.y);

        pos.x += (velocity.x / magnitude) * speed;
        pos.y += (velocity.y / magnitude) * speed;

        if (pos.x <= 0 || pos.x >= bounds.width) {
            velocity.x = -velocity.x + (Math.random() - 0.5); 
            pos.x = Math.max(0, Math.min(bounds.width, pos.x));
        }

        if (pos.y <= 0 || pos.y >= bounds.height) {
            velocity.y = -velocity.y + (Math.random() - 0.5);
            pos.y = Math.max(0, Math.min(bounds.height, pos.y));
        }

        floater.style.left = pos.x + "px";
        floater.style.top = pos.y + "px";

        requestAnimationFrame(updatePosition);
    }

    requestAnimationFrame(updatePosition);
});

function drawConnections() {
    const container = document.getElementById('connection-layer');
    container.innerHTML = '';

    const boxes = document.querySelectorAll('.box[data-connect-to]');
    const lines = [];

    boxes.forEach(sourceBox => {
	const targetId = sourceBox.dataset.connectTo;
	const targetBox = document.getElementById(targetId);
	if (!targetBox) return;

	const line = document.createElement('div');
	line.className = 'connection-line';
	container.appendChild(line);

	lines.push({ line, sourceBox, targetBox });
    });

    function updateLines() {
	const scrollX = window.scrollX;
	const scrollY = window.scrollY;

	lines.forEach(({ line, sourceBox, targetBox }) => {
	    const sourceRect = sourceBox.getBoundingClientRect();
	    const targetRect = targetBox.getBoundingClientRect();

	    const startX = sourceRect.left + scrollX;
	    const startY = sourceRect.top + sourceRect.height / 2 + scrollY;
	    const endX = targetRect.right + scrollX;
	    const endY = targetRect.top + targetRect.height / 2 + scrollY;

	    const deltaX = endX - startX;
	    const deltaY = endY - startY;
	    const length = Math.sqrt(deltaX ** 2 + deltaY ** 2);
	    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

	    line.style.width = `${length}px`;
	    line.style.left = `${startX}px`;
	    line.style.top = `${startY}px`;
	    line.style.transform = `rotate(${angle}deg)`;
	});

	requestAnimationFrame(updateLines);
    }

    updateLines(); // Start the animation loop
}

window.addEventListener('load', drawConnections);
window.addEventListener('resize', drawConnections);
