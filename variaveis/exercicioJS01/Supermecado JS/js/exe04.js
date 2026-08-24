const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


frm.addEventListener("submit", (e)=> {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const quantidade = preco * 3
    resp1.innerText = "Promoçao: " + produto
    resp2.innerText = `Leve 3 produtos por apenas : R$ ${quantidade.toFixed(2)}`
    e.preventDefault()


}
)