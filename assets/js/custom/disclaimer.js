function removeDisclaimerFromDOM() {
	document.getElementById('disclaimer').style.display = 'none';
}

if (localStorage.getItem('disclaimerAccepted')) {
	removeDisclaimerFromDOM()
}

document.getElementById('disclaimer-btn').addEventListener('click', function() {
localStorage.setItem('disclaimerAccepted', true);
removeDisclaimerFromDOM()
});
