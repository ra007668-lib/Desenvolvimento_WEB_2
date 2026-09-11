const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
});

const btMostrar = document.querySelector("#btMostrar");
btMostrar.addEventListener("click", () => {
    const num = Number(document.getElementById("inNum").value);
    const anos = Number(document.getElementById("inAnos").value);

    if (num < 2) {
        alert("O número inicial de chinchilas deve ser no mínimo 2.");
        document.getElementById("inNum").focus();
        return;
    }

    let resposta = "";
    let total = num;

    for (let i = 1; i <= anos; i++) {
        if (i === 1) {
            resposta += `Ano ${i}: ${total} chinchila(s)\n`;
        } else {
            total = total * 3;
            resposta += `Ano ${i}: ${total} chinchila(s)\n`;
        }
    }

    resp.innerText = resposta;
});