let scanner;

function startScanner() {
    scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    scanner.render(qrCodeSuccessCallback);
}

function stopScanner() {
    if (scanner) {
        scanner.clear();
    }
}

function qrCodeSuccessCallback(decodedText) {
    document.getElementById("result").innerText = decodedText;
    stopScanner(); // Stop scanning after success
}

function scanFromFile() {
    let fileInput = document.getElementById("qrFile");
    if (fileInput.files.length === 0) {
        alert("Please select an image with a QR code.");
        return;
    }

    let reader = new Html5Qrcode("reader");
    reader.scanFile(fileInput.files[0], true)
        .then(decodedText => document.getElementById("result").innerText = decodedText)
        .catch(err => alert("QR Code not found in image."));
}