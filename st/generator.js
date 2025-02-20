function generateQRCode() {
    let inputText = document.getElementById("textInput").value;
    let qrCodeDiv = document.getElementById("qrcode");
    let downloadBtn = document.getElementById("downloadBtn");
    let qrPreview = document.getElementById("qrcode");

    qrCodeDiv.innerHTML = "";
    downloadBtn.style.display = "none";
    qrPreview.style.display = "none";

    if (inputText.trim() !== "") {
        let qr = new QRCode(qrCodeDiv, {
            text: inputText,
            width: 200,
            height: 200
        });

        setTimeout(() => {
            let qrCanvas = qrCodeDiv.querySelector("canvas");
            if (qrCanvas) {
                let qrImage = qrCanvas.toDataURL("image/png");
                downloadBtn.href = qrImage;
                downloadBtn.style.display = "inline-block";
                qrPreview.style.display = "inline-block";
            }
        }, 500);
    } else {
        alert("Please enter text or a number.");
    }
}