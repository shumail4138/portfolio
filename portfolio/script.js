const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbyd5H_KOJtLeiRl9lGq1dHEDpNO3a2zGwhT8agGC3lTrg9Rk7EISE5KMGlnUU27YBBSeA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
});
