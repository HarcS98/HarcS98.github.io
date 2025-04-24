function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = (chatbot.style.display === "none" || chatbot.style.display === "") ? "flex" : "none";
}

function sendMessage() {
  const input = document.getElementById("chatbot-input");
  const body = document.getElementById("chatbot-body");
  const message = input.value.trim().toLowerCase();

  if (message === "") return;

  const userMessage = document.createElement("p");
  userMessage.innerHTML = `<strong>Tú:</strong> ${input.value}`;
  body.appendChild(userMessage);

  const botMessage = document.createElement("p");

  // Respuesta con un pequeño retraso para simular que el bot está escribiendo
  botMessage.innerHTML = `<strong>Bot:</strong> Estoy escribiendo...`;
  body.appendChild(botMessage);
  body.scrollTop = body.scrollHeight;

  setTimeout(() => {
    if (
      /informe|reportes|reporte|exportar|estadísticas|descargar/i.test(message)
    ) {
      botMessage.innerHTML = `<strong>Bot:</strong> ¡Claro! Los informes te permiten analizar y visualizar los datos...`;
    } else {
      botMessage.innerHTML = `<strong>Bot:</strong> Gracias por tu mensaje. ¿En qué más puedo ayudarte?`;
    }

    body.appendChild(botMessage);
    input.value = "";
    body.scrollTop = body.scrollHeight;
  }, 1500);  // Retraso para simular "escribiendo..."
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}
