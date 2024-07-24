document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Simulating login logic
            if (email === 'user@example.com' && password === 'password') {
                document.getElementById('welcomeMessage').classList.remove('hidden');
                document.getElementById('welcomeMessage').textContent = `Welcome back, ${email}!`;
            } else {
                alert('Invalid email or password.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Simulating sign-up logic
            alert('Sign-up successful!');
            document.getElementById('welcomeMessage').classList.remove('hidden');
            document.getElementById('welcomeMessage').textContent = `Welcome to our platform, ${email}!`;
        });
    }
});
