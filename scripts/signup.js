document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullname = document.getElementById('signup-fullname').value;
    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Sign Up failed');
        return;
      }

      alert('Sign Up successful');
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  });
});
