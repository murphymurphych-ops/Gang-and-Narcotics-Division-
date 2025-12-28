function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === 'agent' && password === 'rbDn2025') {
    window.location.href = 'index.html';
  } else {
    const errorEl = document.getElementById('error');
    errorEl.textContent = 'Неверный логин или пароль';
    errorEl.style.color = '#ff5555';
  }
}
