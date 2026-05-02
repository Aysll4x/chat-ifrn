function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const usuarios = [
    { user: "mimmarcelo", pass: "Teste123" },
    { user: "ayslla", pass: "123" },
    { user: "myllena", pass: "123" },
    { user: "isaac", pass: "123" },
    { user: "ariel", pass: "123" }
  ];

  const valido = usuarios.find(u => u.user === usuario && u.pass === senha);

  if (valido) {
    localStorage.setItem("logado", "true");
    window.location.href = "../index.html";
  } else {
    document.getElementById("erro").innerText = "Login inválido!";
  }
}