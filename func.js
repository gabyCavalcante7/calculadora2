const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";

buttons.forEach(button => {
  button.onclick = () => {
    const value = button.textContent;

    if (value === "AC") {
      current = "";
      display.value = "0";
    } else if (value === "=") {
      try {
        current = eval(current
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/−/g, "-")
        ).toString();
        display.value = current;
      } catch {
        display.value = "Erro";
        current = "";
      }
    } else {
      current += value;
      display.value = current;
    }
  };
});