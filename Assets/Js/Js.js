
$(document).ready(function(){
    CopyText();
});

function CopyText() {
    $('#btneMail').click(function() {
        navigator.clipboard.writeText("juancarlos.i18@outlook.es").then(() => {
            alert('Correo copiado al portapapeles');
        }).catch(err => {
            alert('Error al copiar: ', err);
        });
    });
}