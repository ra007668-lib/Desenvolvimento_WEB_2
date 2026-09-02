const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")


frm.addEventListener("submit", (e)=>{
    const tempo = frm.inTempo.value
    const preco = Number(frm.inPreco.value)
    const valor = preco / 15 * 3
    resp1.innerText = `Valor a pagar R$ ${valor.toFixed(2)}`
    e.preventDefault()
} ) 