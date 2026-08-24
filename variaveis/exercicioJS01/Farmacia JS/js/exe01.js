const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


frm.addEventListener("submit", (e)=> {
    const medicamento = frm.inRemedio.value
    const preco = Number(frm.inPreco.value)
    const promocao = preco * 2 * 0.10 
    resp1.innerText = "Promoçao" + medicamento
    resp2.ineerText =  `Leve dois por apenas R$ ${promocao.tofixed(2)}`
    e.preventDefault()

} )