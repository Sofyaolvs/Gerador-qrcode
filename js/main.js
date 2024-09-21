const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Gerar código
function generateQrCode() {
    let qrCodeInputValue = qrCodeInput.value.trim();

    if (!qrCodeInputValue) {
        alert("Por favor, insira uma URL ou texto.");
        return;
    }

    qrCodeBtn.innerText = "Gerando código...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeInputValue)}`;

    qrCodeImg.onload = () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    };

    qrCodeImg.onerror = () => {
        alert("Erro ao gerar o QR Code. Tente novamente.");
        qrCodeBtn.innerText = "Gerar QR Code";
    };
}

// Adiciona eventos
qrCodeBtn.addEventListener("click", generateQrCode);
qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQrCode();
    }
});

// Limpar área do código
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
});
