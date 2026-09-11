const form = document.getElementById("formNumero");
const outResp1 = document.getElementById("outResp1");
const outResp2 = document.getElementById("outResp2");


form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const numero = Number(document.getElementById("inNumero").value);
    
    let divisores = [];
    let soma = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
            soma += i;
        }
    }

    outResp1.innerText = `Divisores do ${numero}: ${divisores.join(", ")} (Soma: ${soma})`;


    if (soma === numero) {
        outResp2.innerText = `${numero} é um número perfeito!`;
        outResp2.className = "text-success font-weight-bold"; 
    } else {
        outResp2.innerText = `${numero} NÃO é um número perfeito.`;
        outResp2.className = "text-danger font-weight-bold"; 
    }
});