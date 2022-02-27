// Animaciones con JQuery

// Cambio de color y tamaño de las opciones del menú cuando el ratón entra y sale del elemento

// El evento hover permite asociar una función de entrada y salida del ratón
$('.opc').hover(agrandar, disminuir);
$('.opc').focus(agrandar);
$('.opc').focusout(disminuir);

// Cuando el ratón entra al elemento, el padding y el tamaño de letra se hace mas grande y el color de fondo cambia
// Ponemos primero el stop(true) para que la animación que se este llevando a cabo se pare y se ejecute inmediatamente la nueva
// Así no es necesario esperar a que una animación termine para que se ejecute la nueva
function agrandar() {
    $(this).stop(true).animate({
        padding: "10px 6%",
        fontSize: "1.2em",
    }, 1000).css('backgroundColor', 'rgb(170, 20, 20)');
}

// Y viceversa
function disminuir() {
    $(this).stop(true).animate({
        padding: "5px 5%",
        fontSize: "1em",
    }, 'fast').css('backgroundColor', 'rgb(140, 139, 139)');
}

// Aparición de elementos al desplazar hacia abajo y desvanecimiento de elementos al desplazar hacia arriba

// El evento scroll se produce al hacer scroll (bajar ó subir) en la ventana
$(window).scroll(scroll);

function scroll() {
    // Calculamos la parte más baja de la ventana sumando la parte más alta de la ventana a la altura total de la ventana
    var fondoVentana = $(window).scrollTop() + $(window).height();
    $(".fade").each(fade);

    function fade() {
        // Calculamos la parte más baja del elemento sumando la parte más alta del elemento a la altura total del elemento
        var fondoElemento = $(this).offset().top + $(this).height();
        // Si la parte más baja del elemento es menor que la parte más baja de la ventana, significa que el elemento está dentro de los límites de la ventana y por tanto, lo hacemos aparecer (si no estaba ya)
        if (fondoElemento < fondoVentana + 300) {
            if ($(this).css('opacity') == 0) {
                $(this).fadeTo(1500, 1);
            }
            // Si la parte más baja del elemento es mayor que la parte más baja de la ventana, significa que el elemento está fuera de los límites de la ventana y por tanto, lo hacemos desaparecer (si no estaba ya)
        } else if (fondoElemento > fondoVentana) {
            if ($(this).css('opacity') == 1) {
                $(this).fadeTo('fast', 0);
            }
        }
    }
}

// Interacción con el menú desplegable

$('#imgcateg').click(desplegar);

// El evento slideToggle asocia los eventos slideUp y slideDown (para desplegar y contraer un elemento) a un mismo elemento
function desplegar(e) {
    e.preventDefault();
    $('#categcontent').slideToggle(2000);
}

$(window).click(ocultar);

// Cuando pulsamos en cualquier lugar de la página que no sea el desplegable, este se contrae también.
function ocultar(evento) {
    var obj = evento.target;
    // Comprobamos que donde se ha pulsado no sea ni la imagen del desplegable (ya que al pulsar ahí se contrae más despacio) ni el elemento 'ul' ni ninguno de sus hijos (que conforman el desplegable)
    if (!$(obj).is('#imgcateg') && !$(obj).is('#imgcateg img') && !$(obj).is('#categcontent') && !$(obj).is($('#categcontent').children())) {
        $('#categcontent').slideUp('fast');
    }
}

// Zoom en las imágenes al hacer scroll hacia abajo y alejar las imágenes al hacer scroll hacia arriba

var posicionInicial = 0;
$(window).scroll(scroll2);

function scroll2() {
    var posicionActual = $(window).scrollTop();
    // Cuando el alto de la ventana es mayor (es decir, más abajo) que en la ejecución previa, significa que se ha hecho scroll hacia abajo
    if (posicionActual > posicionInicial) {
        zoomIn();
        // Y viceversa    
    } else {
        zoomOut();
    }
    posicionInicial = posicionActual;
}

// zoomIn aumenta el alto y ancho de la foto para dar el efecto de zoom
function zoomIn() {
    $('.zoom').css({
        'height': "+=0.5px",
        'width': "+=0.5px"
    }, 'fast');
}

function zoomOut() {
    $('.zoom').css({
        'height': "-=0.5px",
        'width': "-=0.5px"
    }, 'fast');
}