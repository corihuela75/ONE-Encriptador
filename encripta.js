$(document).ready(function () {

    const regex = /[^a-z0-9\s]/g;
    var textArea1 = document.getElementById("txt1");
    var textArea2 = document.getElementById("txt2");
    var btnEncriptar = document.getElementById("btnEncriptar");
    var btnDesencriptar = document.getElementById("btnDesencriptar");
    var btnCopiar = document.getElementById("btnCopiar");
    var notif = document.getElementById("notificacion");
    var notif = document.getElementById("info");

    btnCopiar.onclick = copiar;
    btnEncriptar.onclick = encriptar;
    btnDesencriptar.onclick = desencriptar;
    textArea1.onfocus = focoArea1;
    textArea2.onfocus = focoArea2;

    function validar(txt) {
        return regex.test(txt);
    }

    function encriptar() {
        var txt = textArea1.value

        if (validar(txt)) {
            notif.className = "alert alert-danger";
            info.textContent = "El texto se convirtió a minúsculas, se suprimieron acentos y los caracteres especiales";
            txt = txt.toLowerCase();
            let txt1 = txt.replace(/á/ig, "a").replace(/é/ig, "e").replace(/í/ig, "i").
                replace(/ó/ig, "o").replace(/ú/ig, "u");
            let txt2 = txt1.replace(regex, "");
            txt = txt2;
        }

        textArea1.value = txt;
        let txt1 = txt.replace(/e/ig, "enter").replace(/i/ig, "imes").replace(/a/ig, "ai").
            replace(/o/ig, "ober").replace(/u/ig, "ufat");
        textArea2.value = txt1;
        textArea1.value = "";
        textArea2.focus();
        btnEncriptar.disabled = true;
        btnDesencriptar.disabled = false;

    }

    function desencriptar() {
        let txt = textArea2.value
        let txt1 = txt.replace(/enter/ig, "e").replace(/imes/ig, "i").replace(/ai/ig, "a").
            replace(/ober/ig, "o").replace(/ufat/ig, "u");
        textArea1.value = txt1;
        textArea2.value = "";
        textArea1.focus();
        btnEncriptar.disabled = false;
        btnDesencriptar.disabled = true;
    }

    function focoArea1() {
        textArea1.focus();
        btnEncriptar.disabled = false;
        btnDesencriptar.disabled = true;
        notif.className = "";
        info.textContent = "* Solo letras minúsculas y sin acento";
    }

    function focoArea2() {
        textArea2.focus();
        btnEncriptar.disabled = true;
        btnDesencriptar.disabled = false;
    }

    function copiar() {
        textArea2.select();
        textArea2.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(textArea2.value);
        notif.className = "alert alert-success";
        info.textContent = "El texto ha sido copiado al portapapeles";
    }
});