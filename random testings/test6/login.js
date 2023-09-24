function checkLogin() {
    // Obter as informações de login do usuário do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Verificar se o nome de usuário e senha são válidos
    if (username === 'admin' && password === '1234') {
      alert('Login bem-sucedido!');
      window.location.href = 'destino.html'; // redirecionar o usuário para a página de destino
    } else {
      alet('Nome de usuário ou senha inválido!');
    }
  }