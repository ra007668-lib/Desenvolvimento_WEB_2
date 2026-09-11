const form = document.getElementById('meuFormulario');
const outResp1 = document.getElementById('outResp1');
const outResp2 = document.getElementById('outResp2');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const numero = Number(document.getElementById('inNumero').value);
    if (numero % 2 === 0) {
        outResp1.innerText = `Tradicional: O número ${numero} é PAR.`;
    } else {
        outResp1.innerText = `Tradicional: O número ${numero} é ÍMPAR.`;
    }
    const resultadoTernario = (numero % 2 === 0) ? "PAR" : "ÍMPAR";
    outResp2.innerText = `Ternário: O número ${numero} é ${resultadoTernario}.`;
});