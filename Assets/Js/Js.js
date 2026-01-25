
$(document).ready(function () {
    $('#btneMail').click(function () {
        navigator.clipboard.writeText("juancarlos.i18@outlook.es").then(() => {
            alert('Correo copiado al portapapeles');
        }).catch(err => {
            alert('Error al copiar: ', err);
        });
    });


    $('#checkbox').change(function () {
        document.body.classList.toggle("light");
        document.getElementsByClassName('data')[0].classList.toggle("light");
        document.getElementsByClassName('footImg')[0].classList.toggle("light");
        document.getElementsByClassName('contBody')[0].classList.toggle("light");
        document.getElementsByClassName('description')[0].classList.toggle("light");
        document.getElementsByClassName('perfil_d')[0].classList.toggle("light");

        document.getElementsByClassName('foot')[0].classList.toggle("light");
        document.getElementsByTagName('p')[1].classList.toggle('light');
        document.getElementsByClassName('author')[0].classList.toggle("light");

        const tagB = document.getElementsByTagName('button').length;
        for (i = 0; i < tagB; i++) {
            document.getElementsByTagName('button')[i].classList.toggle('light');
        }

        const tagA = document.getElementsByTagName('a').length;
        for (i = 0; i < tagA; i++) {
            document.getElementsByTagName('a')[i].classList.toggle('light');
        }

        // Toggle accordion elements
        var accordionItems = document.getElementsByClassName('accordion-item');
        for (i = 0; i < accordionItems.length; i++) {
            accordionItems[i].classList.toggle('light');
        }

        var accordionButtons = document.getElementsByClassName('accordion-button');
        for (i = 0; i < accordionButtons.length; i++) {
            accordionButtons[i].classList.toggle('light');
            // Buscar span dentro del botón
            var span = accordionButtons[i].querySelector('span');
            if (span) {
                span.classList.toggle('light');
            }
            // Aplicar directamente el color al botón para casos donde no hay span
            if (accordionButtons[i].textContent.trim().length > 0) {
                accordionButtons[i].style.color = accordionButtons[i].classList.contains('light') ? '#000000' : '#FFF';
            }
        }
    });
});
