import Hello from './hello';

document.addEventListener('DOMContentLoaded', () => {
	document.body.innerHTML = `<h1>${Hello.getGreeting()}</h1>`;
});
