
He implementado 5 animaciones:

1º: Cambio de color y tamaño de las opciones del menú cuando el ratón entra y sale del elemento

He usado el evento hover que permite asociar una función de entrada y salida del raton sobre un elemento.
Cuando el ratón entra al elemento, el padding y el tamaño de letra se hace mas grande y el color de fondo cambia y viceversa al salir del elemento.
Ponemos primero el stop(true) para que la animación que se este llevando a cabo se pare y se ejecute inmediatamente la nueva,
así no es necesario esperar a que una animación termine para que se ejecute la nueva

2º: Aparición de elementos al desplazar hacia abajo y desvanecimiento de elementos al desplazar hacia arriba

El evento scroll se produce al hacer scroll (bajar ó subir) en la ventana.
Para poder hacer aparecer y desaparecer los elementos he tenido que calcular el fondo de la ventana y el fondo del elemento, 
cuando el fondo de la ventana es menor que el fondo del elemento significa que el elemento aun no esta en pantalla, 
mientras que cuando es al reves, significa que el elemento esta en pantalla y por tanto, aparece.

3º: Interacción con el menú desplegable

El evento slideToggle asocia los eventos slideUp y slideDown (para desplegar y contraer un elemento) a un mismo elemento.
La lista de elementos está inicialmente oculta y el propio evento la hace aparecer.
Cuando pulsamos en cualquier lugar de la página que no sea el desplegable, este se contrae también.

4º: Zoom en las imágenes al hacer scroll hacia abajo y alejar las imágenes al hacer scroll hacia arriba

Cuando el alto de la ventana es mayor (es decir, más abajo) que en la ejecución previa, significa que se ha hecho scroll hacia abajo y viceversa.
Para dar el efecto de zoom aumentamos el alto y ancho de la imagen y en el otro caso, lo reducimos para la sensación de alejamiento.
Es necesario, meter las imagenes dentro de un div con alto y ancho fijos y overflow: hidden para que al hacer zoom no modifique los tamaño del resto de elementos.

5º: Animación del carrusel con CSS

Usamos 2 @keyframes, uno de aparicion en el que la opacidad pasa de 0 a 1 y otro de desaparicion al reves.
Para poder poner los banners en la misma posicion, uno encima de otro, le asociamos position: absolute y z-index distinto.
Como el banner1 ya esta al iniciar la pagina solo necesitara desaparecer, mientras que los siguientes tienen asociados una animacion de aparicion y desaparicion.
Además, usamos la propiedad animation-fill-mode: forwards para que los cambios en el CSS al acabar la animación se consrven.

