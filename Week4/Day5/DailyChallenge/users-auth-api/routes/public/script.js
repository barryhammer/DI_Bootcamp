
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// Check whether all fields contain valid values
function validateForm(form) {
    const inputs = form.querySelectorAll('input');
    const button = form.querySelector('button');

    const allFilled = Array.from(inputs).every(input =>
        input.value.trim() !== ''
    );

    button.disabled = !allFilled || !form.checkValidity();
}

// Send form data to the server
async function submitForm(form, url) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const button = form.querySelector('button');
    button.disabled = true;
    message.textContent = 'Please wait...';
    message.className = '';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        message.textContent = result.message;
        message.className = response.ok ? 'success' : 'error';

        if (response.ok) {
            form.reset();
        }
    } catch (err) {
        console.error(err);
        message.textContent = 'Unable to connect to the server';
        message.className = 'error';
    } finally {
        validateForm(form);
    }
}

// Register form
if (registerForm) {
    registerForm.addEventListener('input', () => {
        validateForm(registerForm);
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        submitForm(registerForm, '/register');
    });
}

// Login form
if (loginForm) {
    loginForm.addEventListener('input', () => {
        validateForm(loginForm);
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        submitForm(loginForm, '/login');
    });
}
