
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

// Smooth accordion height animation for iOS
(function () {
    var isIOS = /iP(ad|hone|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (!isIOS) return;

    // mark body so CSS rules scoped to iOS apply only on detected devices
    try { document.body.classList.add('ios-accordion'); } catch (e) {}

    // Use Bootstrap collapse events to adjust inline height for smoother transitions on iOS
    $(document).on('show.bs.collapse', '.accordion-collapse', function (e) {
        var el = e.target;
        el.style.overflow = 'hidden';
        el.style.height = '0px';
        el.style.transition = 'height .35s cubic-bezier(.4,0,.2,1)';
        var full = el.scrollHeight + 'px';
        requestAnimationFrame(function () {
            el.style.height = full;
        });
    });

    $(document).on('shown.bs.collapse', '.accordion-collapse', function (e) {
        var el = e.target;
        el.style.height = '';
        el.style.transition = '';
        el.style.overflow = '';
    });

    $(document).on('hide.bs.collapse', '.accordion-collapse', function (e) {
        var el = e.target;
        el.style.overflow = 'hidden';
        // set current height then animate to 0
        el.style.height = el.scrollHeight + 'px';
        // force reflow
        void el.offsetHeight;
        el.style.transition = 'height .35s cubic-bezier(.4,0,.2,1)';
        requestAnimationFrame(function () {
            el.style.height = '0px';
        });
    });

    $(document).on('hidden.bs.collapse', '.accordion-collapse', function (e) {
        var el = e.target;
        el.style.height = '';
        el.style.transition = '';
        el.style.overflow = '';
    });

})();
