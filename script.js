function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === 'agent' && password === 'rbDn2025') {
    window.location.href = 'index.html';
  } else {
    const errorEl = document.getElementById('error');
    errorEl.textContent = 'Доступ запрещён. Неверный логин или пароль';
    errorEl.style.color = '#ff5555';
    document.getElementById('username').style.borderColor = '#ff5555';
    document.getElementById('password').style.borderColor = '#ff5555';
    setTimeout(() => {
      document.getElementById('username').style.borderColor = '#0ff';
      document.getElementById('password').style.borderColor = '#0ff';
    }, 500);
  }
}
