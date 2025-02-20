$(document).ready(function () {
    // $('.selectpicker').selectpicker();
    $('#qrType').selectpicker();

    $('input[name="qroptions"]').on('change', function () {
        let selectedValue = $(this).val();
        $('#result').html('');
        let qrCodeDiv = document.getElementById("qrcode");
        let downloadBtn = document.getElementById("downloadBtn");
        let qrPreview = document.getElementById("qrcode");
        qrCodeDiv.innerHTML = "";
        downloadBtn.style.display = "none";
        qrPreview.style.display = "none";
        $('#textInput').val('');
        stopScanner();

        if (selectedValue === "scanQR") {
            $('#scanner').removeClass('d-none');
            $('#generator').addClass('d-none');
        } else if (selectedValue === "genQR") {
            $('#scanner').addClass('d-none');
            $('#generator').removeClass('d-none');
        }
    });
});