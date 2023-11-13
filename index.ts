import "@t_g/default-ui";

import "./index.css";

const APP_URL = "http://0.0.0.0:8787";

async function helloCloudflareWorker() {
  const res = await fetch(APP_URL);
  const data = await res.json();

  const messageContainer = document.getElementById("message-container");
  if (messageContainer) {
    const codeElement = document.createElement("code");
    codeElement.innerHTML = JSON.stringify(data, null, 2);
    messageContainer.appendChild(codeElement);
  }
}

helloCloudflareWorker();
