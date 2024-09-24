
$(document).ready(function(){
    $('#btneMail').click(function() {
        navigator.clipboard.writeText("juancarlos.i18@outlook.es").then(() => {
            alert('Correo copiado al portapapeles');
        }).catch(err => {
            alert('Error al copiar: ', err);
        });
    });

    const tagA = document.getElementsByTagName('a').length;

    $('#checkbox').change(function() {
        document.body.classList.toggle("light");
        document.getElementsByClassName('data')[0].classList.toggle("light");
        document.getElementsByClassName('footImg')[0].classList.toggle("light");
        document.getElementsByClassName('contBody')[0].classList.toggle("light");
        document.getElementsByClassName('description')[0].classList.toggle("light");
        document.getElementsByClassName('txtRow')[0].classList.toggle("light");

        for (i = 0; i < tagA; i++) {
            document.getElementsByTagName('a')[i].classList.toggle('light');
        }

        document.getElementsByTagName('button')[0].classList.toggle('light');
        document.getElementsByClassName('txtRowSocial')[0].classList.toggle("light");
        document.getElementsByClassName('foot')[0].classList.toggle("light");
        document.getElementsByTagName('p')[1].classList.toggle('light');
        document.getElementsByClassName('author')[0].classList.toggle("light");
    });
});
