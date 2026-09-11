const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velPermitida = Number(document.querySelector("#inVelPerm").value);
    const velCondutor = Number(document.querySelector("#inVelCond").value);

    let mensagem = "";

    if (velCondutor <= velPermitida) {
        mensagem = "Sem multa";
    } else if (velCondutor <= velPermitida * 1.20) {
        mensagem = "Multa leve";
    } else {
        mensagem = "Multa grave";
    }

    resp.innerText = `Situação: ${mensagem}`;
});