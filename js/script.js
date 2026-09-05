const data = {
    "RmFjdVV6dW1ha2k=": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="],
    "Q2FteVdvb2YxMDAlUmVhbE5vRmFrZQ==": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="],
    "THVsaVBhbnF1ZXF1ZXM=": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="],
    "TWFydUNhbG1hdGVDb25MYXNNYXRlcmlhcw==": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="],
    "Q2FteVF1ZVNlRXNjb25kZQ==": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="],
    "TW9ub1NlTGFDb21l": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="],
    "QWd1c0JhcmJh": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="],
    "SnVsaVRvcnR1Z2E=": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="],
    "SmVubllKYWM=": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="],
    "RmFsY29uVmVyZGU=": ["MyBkZSBvY3R1YnJlIDIwOjAwIC0gR2VudGlGZXN0IERlbHV4ZQ==", "Tk8gRElWVUxHQVIgLSBQb2RlcyB0cmFlciAxIHBlcnNvbmE="]
};

function encriptarTexto(texto) {
    return btoa(texto.trim());
}

function verificarCodigo() {
    const inputVal = document.getElementById('codigoInput').value;
    const resultadoDiv = document.getElementById('resultado');

    if (!inputVal) {
        resultadoDiv.className = "error";
        resultadoDiv.innerHTML = "Por favor, ingrese un código.";
        return;
    }

    const data = encriptarTexto(inputVal);

    if (diccionarioCifrado.hasOwnProperty(codigoCifradoIngresado)) {
        const partesCifradas = data[codigoCifradoIngresado];
        const linea1 = atob(partesCifradas[0]);
        const linea2 = atob(partesCifradas[1]);

        resultadoDiv.className = "";
        resultadoDiv.innerHTML = `${linea1}<span class="aviso-privado">${linea2}</span>`;
    } else {
        resultadoDiv.className = "error";
        resultadoDiv.innerHTML = "Código inválido o desconocido.";
    }
}

document.getElementById("codigoInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        verificarCodigo();
    }
});
