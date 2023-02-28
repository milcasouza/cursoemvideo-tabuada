function gerar() {
  let ftr1 = document.getElementById("ftr1")
  let tab = document.getElementById("tab")

  // Se o "ftr1" estiver vazio irá disparar a mensagem de "Erro! Digite um número!"
  if (ftr1.value.length == 0) {
    window.alert("Erro! Digite um número!")
  } else {
    let ft1 = Number(ftr1.value)
    tab.innerHTML = "" // Irá limpar a área antes de exibir uma nova tabuada
    for (let ft2 = 1; ft2 <= 10; ft2++) {
      let item = document.createElement("option")
      item.value = `tab${ft2}` // Como o "option" também precisa do value, ele irá chamar como `tab${1, 2, 3}` - conforme o fator2 da tabuada (Obs: no JavaScript isso não é algo muito necessário, mas para outras linguagens é importante para saber qual foi o elemento selecionado)
      item.text = `${ft1} x ${ft2} = ${ft1 * ft2}`
      tab.appendChild(item)
    }
  }
}
