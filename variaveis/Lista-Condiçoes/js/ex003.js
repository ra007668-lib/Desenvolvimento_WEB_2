const frm = document.querySelector("#formPaquimetro");
const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const valor = Number(frm.inValor.value);
  
    if (valor < 1.00) {
        outResp1.textContent = "Valor Insuficiente";
        outResp2.textContent = "";
        return;
    }

    let tempo = 0;
    let troco = 0;

    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
    } else if (valor >= 1.00) {
        tempo = 30;
        troco = valor - 1.00;
    }

    outResp1.textContent = `Tempo de permanência: ${tempo} minutos`;
    outResp2.textContent = troco > 0 ? `Troco: R$ ${troco.toFixed(2).replace('.', ',')}` : "Sem troco";
});