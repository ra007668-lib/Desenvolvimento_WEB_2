const frm = document.querySelector("#formTriangulo");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

   
    const condicao = (ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB);

    if (!condicao) {
        resp1.innerText = "Os valores informados não podem formar um triângulo.";
        resp2.innerText = "";
        return;
    }

    resp1.innerText = "Os lados podem formar um triângulo!";

   
    if (ladoA === ladoB && ladoB === ladoC) {
        resp2.innerText = "Tipo: Triângulo Equilátero (3 lados iguais)";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        resp2.innerText = "Tipo: Triângulo Isósceles (2 lados iguais)";
    } else {
        resp2.innerText = "Tipo: Triângulo Escaleno (3 lados diferentes)";
    }
});