import greeting from "./greeting.html";
import mainCss from "./styles/main.css";

const styleSheet = document.createElement("style");

styleSheet.textContent = mainCss.toString();
document.head.appendChild(styleSheet);

document.body.innerHTML = greeting;
