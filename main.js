var cliente = prompt("Informe seu Nome");

if (cliente !== null && cliente !== "") {
    var nomeCliente = document.querySelector("#nomeCliente");
    nomeCliente.textContent = `${cliente}`;
}

var saldo = prompt("Digite o Valor");
var saldoReal = parseFloat(saldo.replace("R$", "").trim());

if (!isNaN(saldoReal)) {
    var saldoCliente = document.querySelector("#saldo-valor");
    saldoCliente.textContent = `R$ ${saldoReal.toFixed(2)}`;
}

// Função para atualizar o saldo exibido
function atualizarSaldo() {
    document.querySelector("#saldo-valor").textContent = `R$ ${saldoReal.toFixed(2)}`;
}

// Função genérica para lidar com o gasto
function gasto(valorGasto, descricao) {
    if (saldoReal >= valorGasto) {
        saldoReal -= valorGasto;
        atualizarSaldo();
    } else {
        alert(`Ops!!! Saldo insuficiente para ${descricao}`);
    }
}

// Função para lidar com o gasto de comida
function gastoComida() {
    gasto(15, "comida");
}

// Função para lidar com o gasto de brinquedo
function gastoBrinquedo() {
    gasto(10, "brinquedo");
}

// Função para lidar com o gasto de circo
function gastoCirco() {
    gasto(25, "circo"); // Funciona da mesma forma que brinquedo (2 unidades)
}

// Adicione ouvintes de eventos às imagens de gastos
document.getElementById("comida").addEventListener("click", gastoComida);
document.getElementById("brinquedo").addEventListener("click", gastoBrinquedo);

// Adicione um ouvinte de eventos à imagem "circo" para que funcione como "brinquedo"
document.getElementById("circo").addEventListener("click", gastoCirco);

// Chame a função de atualização de saldo para exibir o saldo inicial
atualizarSaldo();
