
const form = document.getElementById("formFrutas");
const outResp1 = document.getElementById("outResp1");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const fruta = document.getElementById("inFruta").value.trim();
    const numero = Number(document.getElementById("inNumero").value);
    let resultado = [];
    for (let i = 0; i < numero; i++) {
        resultado.push(fruta);
    }
    outResp1.innerText = resultado.join(" * ");
});