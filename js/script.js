const brigadeiroPrice = 2.50;
const quantityInput = document.getElementById('Quantidade');
const totalDisplay = document.getElementById('total');
const whatsappLink = document.getElementById('whatsappLink');
const nameInput = document.getElementById('nome');
const addressInput = document.getElementById('endereco');
const cidade = document.getElementById("cty");
const estado = document.getElementById("estado");

// Função para calcular o total
function calculateTotal() {
    const quantity = parseInt(quantityInput.value) || 0;
    const total = quantity * brigadeiroPrice;
    totalDisplay.textContent = total.toFixed(2);
    updateWhatsAppLink();
}

// Função para atualizar o link do WhatsApp com as informações preenchidas
function updateWhatsAppLink() {
    const nome = nameInput.value;
    const endereco = addressInput.value;
    const quantity = quantityInput.value;
    const city = cidadeInput.value;
    const estado = estadoInput.value;
    const total = (quantity * brigadeiroPrice).toFixed(2);

    const message = `Olá, meu nome é ${nome}, meu endereço é ${endereco}, sou da cidade ${city}, estado ${estado}. Gostaria de comprar ${quantity} brigadeiros. O total da compra é R$ ${total}.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511913250705&text=${encodeURIComponent(message)}`;

    whatsappLink.href = whatsappUrl;
}

// Adiciona os eventos para atualizar o link do WhatsApp e calcular o total
quantityInput.addEventListener('input', calculateTotal);
nameInput.addEventListener('input', updateWhatsAppLink);
addressInput.addEventListener('input', updateWhatsAppLink);