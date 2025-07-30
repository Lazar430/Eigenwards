document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-button").forEach(button => {
	const content = button.nextElementSibling;

	// Store original text (without arrow)
	const baseText = button.textContent.replace(/[\u25B2\u25BC]\s*$/, '').trim();

	button.innerHTML = `${baseText} &#x25BC;`; // ▼

	button.addEventListener("click", () => {
	    const isOpen = content.classList.toggle("expanded");
	    button.innerHTML = isOpen
		? `${baseText} &#x25B2;` // ▲
		: `${baseText} &#x25BC;`; // ▼
	});
    });
});
