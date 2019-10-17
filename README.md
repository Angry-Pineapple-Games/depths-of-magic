# Depths of Magic: Documento de Diseño de Juego

> Angry Pineapple Games

> Versión del Documento: 1.5

> Plantilla de GDD adaptada de la escrita por: [Benjamin “HeadClot” Stanley](https://docs.google.com/document/d/1-I08qX76DgSFyN1ByIGtPuqXh7bVKraHcNIA25tpAzE/ "Enlace al documento de plantilla")

> Written with [StackEdit](https://stackedit.io/).

## 1. Historial de versiones
* 0.9: Esqueleto del GDD y primeros conceptos.
* 1.0: Especificación de elementos del gameplay.
* 1.1: Milestones, posibles ampliaciones, assets requeridos, secuencias cinemáticas y modificaciones de apartados anteriores.
* 1.2: Inclusión de imágenes descriptivas, modelo de negocio y correciones menores.
* 1.3: Reestructuración de apartados, más ampliaciones, cambios en mecánicas y correciones menores.
* 1.4: Cambios de diseño, especificación del último milestone, arreglo de imágenes.
* 1.5: Finalización del documento añadiendo apartado de monetización, desarrollando el modelo de negocio e incluyendo varias imágenes.

## 2. Concepto de juego
### 2.1. Género y Setting
**Depths of Magic** es un juego del género *dungeon crawler* con elementos de *roguelike* que utiliza un sistema de combate automático basado en cortar diferentes patrones mediante el ratón o la pantalla táctil para contraatacar a los enemigos y obtener recompensas. 

Ambientado en un mundo donde la magia es posible, nuestra protagonista deberá embarcarse en la exploración de una mazmorra en la que se encontrará con numerosos enemigos a los que derrotar en frenéticos combates.

### 2.2. Mecánicas de juego principales
* **Exploración automática**: El personaje avanzará por la mazmorra por su cuenta, focalizando toda la atención del gameplay en los combates.
* **Secuencias de combates aleatorias**: La secuencia de enemigos de un nivel de la mazmorra no estará preestablecida, por lo que en cada iteración del juego se podrá disfrutar de un orden distinto a la hora de afrontar los retos o incluso aparecerán enemigos que no se han visto en la primera partida, fomentando así la rejugabilidad del título.
* **Ataques con patrones**:  Los enemigos tendrán unos ataques predeterminados que ejecutarán de forma aleatoria. Cada uno de estos ataques estará enlazado con un patrón de dibujo con el que deberá interactuar el jugador.
* **Contraataques con *slashes***: El jugador deberá cortar los patrones enemigos de la forma más rápida y precisa posible. Será su manera de interactuar con el entorno y, por tanto, de evitar que le inflijan daño y de contraatacar al enemigo.
* **Efectos**: Los patrones que dibujan los enemigos tendrán distintos efectos que se dispararán al ser cortados. Cada efecto vendrá asociado con una apariencia estética que lo identifique. Algunos de estos efectos serán curación de vida, multiplicador al daño en contraataque o modificadores de *stats* del oponente.
### 2.3. Plataformas
**Depths of Magic** está disponible para web en Itch.io, Facebook Instant Games y en la propia web del videojuego.
El juego podrá ejecutarse tanto en PC como en móviles y tabletas.
### 2.4. Idiomas
Se podrá jugar tanto en inglés como en español.
### 2.5. Alcance y escala del proyecto
* **Escala económica y de tiempo**:
	* **Presupuesto inicial**: 0 euros.
	* **Fecha de inicio**: 9 de septiembre de 2019.
	* **Fecha estimada de finalización del prototipo**:  19 de octubre de 2019.
* **Equipo**:
	* **Mario Aceituno Cordero**: Arte y animación.
	* **Javier Albaráñez Martínez**:Game design y programación.
	* **César Carbajo García**: Programación y sonido.
	* **Juan Antonio Martín García**: Gestión de proyecto, game design, documentación y community management.
	* **Laura Suonpera Lozano**: Game design, arte y animación.
### 2.6. Influencias
* **Fruit Ninja**: La mecánica de cortar elementos de manera frenética tiene inspiración en este título.
* **Danganronpa**: Los cortes también tienen inspiración en los *Rebuttal Showdown* de esta saga.
* **Pokémon**: El diseño mecánico de los enemigos basado en una serie de ataques asociados que se ejecutan de manera aleatoria se basa en las mecánicas de los enemigos de los JRPG clásicos, siendo Pokémon una de las muestras más notorias y conocidas.
* **Darkest Dungeon**: El enfoque de la cámara y la distribución de la interfaz de usuario de los combates será similar al de esta obra.
* **Octopath Traveler**: Se buscará una estética en los efectos mágicos similar a la presentada en este título.
* **Crypt of the Necrodancer**: La ambientación de la historia será similar, enfrentándose a los peligros y amenazas que se encuentren en la mazmorra.
* **Theatrhythm Final Fantasy**: El flujo de juego se desarrolla de manera similar, con la interacción del jugador en una pantalla y las animaciones de combate en la en otra.
## 3. Elevator Pitch
En **Depths of Magic** se premia al jugador habilidoso gracias al sistema de combate basado en trazados. Es un juego inmediato, frenético y rejugable gracias a la generación aleatoria de los combates.
Jugando a **Depths of Magic** el jugador se encontrará con una experiencia de *dungeon crawler* con elementos de *roguelike* alejada de los repetitivos pasillos aleatorios y sin necesidad de planificar una estrategia preestablecida para los combates enemigos. La toma de contacto es sencilla y rápida, enseñando los fundamentos del juego sin aburrir al jugador y permitiéndole disfrutar lo antes posible.
Con el fuerte y contrastado apartado visual, se busca que los jugadores puedan sentir el poder de lanzar los hechizos y acribillar a sus enemigos, incentivando así sus ganas de continuar.
La dificultad es exigente, pero justa, haciendo que la primera toma de contacto resulte interesante pero no permita ver todo a un jugador salvo que sea muy habilidoso, incentivando así al típico fenónemo de _"una vez más"._
## 4. Historia y Gameplay
### 4.1. Sinopsis de la historia
Rhaxtir es una nigromante sin rumbo, que en uno de sus viajes descubre una misteriosa mazmorra. Intrigada por ello, la protagonista se adentra dentro de la mazmorra dispuesta a descubrir todos los secretos mágicos que esta pueda albergar y que le ayuden a fortalecerse.
### 4.2. Historia en detalle
La carga de la historia es pequeña. Y en el guión se cuenta de manera sutil y sin descripción activa de lo que está ocurriendo más allá de dos imágenes.
Ambas secuencias serán omisibles, de cara a permitir a los jugadores pasar a la acción cuanto antes.
* **Secuencia introductoria**: Se muestra la siguiente frase:     _"ENG: Whoever fights with monsters should see to it that he does not become a monster in the process." / ESP: "Quien con monstruos lucha cuide de no convertirse a su vez en monstruo"_ , acto seguido, la frase desaparece y comienza a formarse una llama. Cuando la llama llega a la máxima intensidad, aparece otra frase _"ENG: And when you gaze long into an abyss, the abyss also gazes into you."  / ESP: "Cuando miras largo tiempo a un abismo, el abismo también mira dentro de ti",_ con _Friderich Nietzsche_ escrito debajo como subtítulo de autoría. Acto seguido, la frase comienza a desaparecer y se muestra un plano medio de Rhaxtir de espaldas mirando hacia la caverna, mientras el viento agita su pelo.
* **Secuencia final**: Esta secuencia se mostrará cuando Rhaxtir derrote al jefe final en el nivel 3. En ella se verá un primer plano de su mano sosteniendo una llama del color del enemigo final. Volverá a aparecer la frase _"ENG: Whoever fights with monsters should see to it that he does not become a monster in the process." / ESP: "Quien con monstruos lucha cuide de no convertirse a su vez en monstruo"_, y cuando esta desaparezca, la mano se cerrará de golpe, absorbiendo la energía mágica de la llama. Habrá un fundido a negro, en el que aparecerá otra vez la segunda parte de la frase, esta vez sin referenciar a Nietzsche: _ENG: "And when you gaze long into an abyss, the abyss also gazes into you. "/ ESP: "Cuando miras largo tiempo a un abismo, el abismo también mira dentro de ti"_, y cuando esta frase desaparezca, se verá en la oscuridad cómo se abren los ojos de Rhaxtir, emanando el color del jefe final, en señal de que ha absorbido su poder. De esta manera, se enlaza la historia con la jugabilidad, justificando que Rhaxtir ha sido consumida por su ambición de poder y ahora solo le queda continuar en la mazmorra hasta la extenuación (el _Game Over_).

![Imgur](https://i.imgur.com/RVgpn0C.jpg "Storyboard de la intro y el ending")
### 4.3. Gameplay resumido
El juego se desarrollará como una secuencia de combates, uno tras otro y con transiciones entre ellos. Habrá tres niveles, cada uno con tres salas y cuatro combates en cada sala. Al finalizar cada nivel se informará al jugador de la progresión obtenida y se pasará al siguiente.
Los combates se desarrollarán mediante la jugabilidad basada en corte de patrones planteada en los apartados anteriores.
### 4.4. Gameplay en detalle
#### 4.4.1. Información ingame
* **Rhaxtir**: Se mostrarán numéricamente sus puntos de vida (HP).
* **Enemigos**: La salud total del enemigo (HP) será información oculta para el jugador.
* **Daños y efectos**: Cuando se realice daño (tanto a Rhaxtir como a los enemigos), se mostrará en pantalla de manera numérica el daño realizado. Los buffs, debuffs y curación se mostrarán con animaciones en el momento de aplicarse.
#### 4.4.2. Progreso del juego
* **Estructura de niveles**: El juego constará de tres niveles, cada uno de ellos formados a su vez por tres salas, y en cada una de las salas se realizarán cuatro combates, dando lugar a un total de 36 combates. Al finalizar un nivel, se mostrarán los stats del personaje para reflejar el progreso. Cuando se finalice el tercer nivel, se volverá al primero con los stats de los enemigos modificados, y así sucesivamente. El juego finalizará cuando el personaje muera, perdiendo todo el progreso.
* **Aparición de los enemigos**: Los enemigos aparecerán en secuencias aleatorias, fomentando la rejugabilidad del título. En principio se contará con un abanico de 10 enemigos. En el nivel 1 podrán aparecer 3 enemigos distintos, en el nivel 2 podrán aparecer 6, incluyendo a los 3 anteriores, y en el nivel 3 podrán aparecer los 10 posibles.
* **Combate contra jefes**: Al final de cada nivel, el último enemigo será predefinido y siempre será un combate contra un jefe final. El jefe del nivel 1 será un enemigo común del nivel 2, mientras que el jefe del nivel 2 será un enemigo común del nivel 3. El jefe del nivel 3 será un enemigo exclusivo contra el que solo se podrá combatir en la batalla final.
* **Desarrollo del combate**: En todos los combates se seguirá la siguiente secuencia: el enemigo selecciona al azar uno de sus cuatro posibles ataques -> ejecuta dicho ataque dibujando el patrón de cadenas en la pantalla de acción -> el jugador corta las cadenas en el tiempo establecido -> se realizan las animaciones y se aplican los efectos en función a los cortes realizados -> si el enemigo y el jugador siguen con vida, se repite el bucle.
* **Ataques y patrones**: Cada uno de los ataques del enemigo se formará por varias cuerdas de distinto tipo. Se contará con un tiempo límite para cortar estas cuerdas, por lo que el jugador deberá ser muy hábil o tomar rápidamente una decisión de qué cuerdas le conviene dejar sin cortar. Los patrones pueden ser de dos tipos:
	* **Ordenados**: El patrón se irá dibujando poco a poco y el jugador deberá estar atento, ya que solo se le permitirá cortar las cuerdas cuando haya terminado de dibujarse y tendrá que realizarlo en el orden establecido.
	* **Desordenados**: El patrón aparece sin más y el jugador puede cortarlo sin esperas.
* **Transiciones entre combates**: Durante el combate, la protagonista recibirá cambios temporales en los atributos o en su estado. Al finalizar un combate y pasar al siguiente:
	* Los puntos de vida (HP) se mantienen como estuviesen, sin recuperación de vida de un combate a otro. Sí se recupera toda la vida al finalizar un nivel completo.
	* Los buffs y debuffs solamente actúan en el ataque en el que se han cortado sus cuerdas correspondientes.
* **Progresión de la dificultad**: El juego debe tener una curva de dificultad que aumente progresivamente y que exija al jugador demostraciones de las habilidades aprendidas, pero mantieniéndole siempre entretenido para no romper el flujo de juego. Para ello, se aplicarán las decisiones de diseño de los siguientes apartados.
![](https://cdn.discordapp.com/attachments/378114383869640714/632709209355452457/Flujo_de_recorrido_del_usuario2.png "Diagrama de flujo de juego")
#### 4.4.3. Cadenas
Las cadenas que forman los patrones mágicos de los enemigos tendrán distintas formas y efectos. Enlazar varios cortes incrementará los efectos que tengan las cadenas cortadas. Cada tipo de cadena requerirá de un corte distinto para ser destruida.
* **Cadena de contraataque:** Cortarla prevendrá el daño que se fuese a hacer al protagonista y se realizará un contraataque que dañará al enemigo en función de los stats del protagonista y del propio enemigo. Se puede cortar de cualquier manera.
* **Cadena de buff**: Cortarla aumentará los stats de Rhaxtir y fallarála aumentará los del enemigo. Debe cortarse desde la izquierda o desde arriba, dependiendo de si está en vertical u horizontal.
* **Cadena de debuff**: Cortarla disminuye los stats del enemigo y fallar disminuye los de Rhaxtir. Debe cortarse desde la derecha o desde abajo, dependiendo de si está en vertical u horizontal.
* **Cadena de curación**: Cortarla devolverá el hechizo al enemigo y le curará vida. No cortarla recuperará vida a Rhaxtir. De esta manera se incentiva a no cortar todas las cadenas sin pensar.
* **Cadena de power**: Requerirá ser cortada dos veces sin soltar el ratón/dedo de la pantalla. Aplicará todos los efectos positivos de las anteriores cadenas al ser cortada y si no se corta no tendrá castigo.
![Imgur](https://i.imgur.com/q282Rbx.png "Tipos de cadenas")
#### 4.4.4. Grimorio 
El grimorio es la segunda pantalla, el grid donde se desarrolla la acción principal del juego. Las cadenas se dispondrán sobre este grimorio y deberán ser cortadas por el jugador. El grimorio se encontrará en dos posibles estados:
* **Rojo**: Indica al jugador que en ese momento no puede interactuar, ya sea porque se está dibujando un patrón ordenado o porque está teniendo lugar una animación.
* **Azul**: El jugador puede interactuar y cortar las cuerdas antes de que finalice el tiempo.
![Imgur](https://i.imgur.com/Ha6GXvI.png "Posibles estados del Grid")
#### 4.4.5. Enemigos
* Enemigo 1:
	* **Nombre:** Glanxyor
	* **HP**: 90
	* **Base AP**: 35
	* **Base DP**: 25
![](https://i.imgur.com/dO1cXD1.png "Glanxyor")
* Enemigo 2:
	* **Nombre:** Rawbuzz
	* **HP**: 80
	* **Base AP**: 55
	* **Base DP**: 15
![](https://i.imgur.com/Yw3HYwx.png[/img] "Rawbuzz")
* Enemigo 3:
	* **Nombre:** Gorpovar
	* **HP**: 110
	* **Base AP**: 25
	* **Base DP**: 40
![](https://pbs.twimg.com/media/EG4TATNW4AATLD6?format=png&name=small "Gorpovar")
* Enemigo 4 [JEFE DEL NIVEL 1]:
	* **Nombre:** Shadrix
	* **HP**: 140
	* **Base AP**: 70
	* **Base DP**: 45
![](https://pbs.twimg.com/media/EGgthXvXoAALu2Z?format=png&name=small "Shadrix")* Enemigo 5:
	* **Nombre:** Sawyrah
	* **HP**: 135
	* **Base AP**: 85 
	* **Base DP**: 40
![](https://pbs.twimg.com/media/EGgRMp4WkAM_u-n?format=png&name=360x360 "Sawyrah")
* Enemigo 6:
	* **Nombre:** Glapdger
	* **HP**: 160
	* **Base AP**: 55
	* **Base DP**: 70
![](https://i.imgur.com/Y9brYOp.png "Glapdger")
* Enemigo 7 [JEFE DEL NIVEL 2]:
	* **Nombre:** Giwalev
	* **HP**: 180
	* **Base AP**: 95
	* **Base DP**: 80
![](https://pbs.twimg.com/media/EG_g_sUXkAEcAoL?format=png&name=900x900 "Giwalev")
* Enemigo 8:
	* **Nombre:** Gumlisar
	* **HP**: 240
	* **Base AP**: 70
	* **Base DP**: 100
![](https://i.imgur.com/kleeZHP.png "Gumlisar")
* Enemigo 9:
	* **Nombre:** Raygler
	* **HP**: 160
	* **Base AP**: 55
	* **Base DP**: 70
![](https://pbs.twimg.com/media/EGgRMp5W4AEFLXI?format=png&name=360x360 "Raygler")
* Enemigo 10 [JEFE FINAL]:
	* **Nombre:** The Abyss
	* **HP**: 250
	* **Base AP**: 145
	* **Base DP**: 120
![](https://i.imgur.com/rGlSURs.png "The Abyss")
#### 4.4.6. Cámara
Vista lateral en dos dimensiones. En todo momento se podrán apreciar a la protagonista a la izquierda y al enemigo a batir en la derecha, por encima de la imagen de fondo. La interfaz de usuario estará separada, mostrándose a la derecha o abajo en función de la navegación por la página web, y en ella será donde se lleve a cabo la jugabilidad del trazado de runas y donde se muestre la información relevante al combate, como puntos de salud.
![Imgur](https://i.imgur.com/LEZusjU.png "Vista del gameplay")
#### 4.4.7. Controles
El juego se controlará enteramente por ratón o por interacción con pantalla táctil, que controlarán las zonas donde se está cortando.
El botón ESC pone en pausa el juego, mientras que en tablets y móviles la pausa se realizará cuando se ponga en segundo plano la aplicación del navegador.
#### 4.4.8. Puntuación
El progreso del jugador se verá reflejado en un incremento en las stats de Rhaxtir, que aumentarán en función de cómo se combata: se llevará la cuenta del número de cuerdas de cada tipo que se ha cortado y, en función de ello, los stats relacionados con dichos tipos crecerán más o menos.

A su vez, se guardarán las 10 mejores puntuaciones globales del juego a modo de ranking para incentivar a los jugadores a superarse unos a otros. Estas puntuaciones se verán determinadas por el número de niveles máximo al que haya conseguido llegar cada jugador.
#### 4.4.9. Modos de juego
Habrá un único modo de juego individual en la que un jugador se enfrentará en solitario a los desafíos del juego.
#### 4.4.10. Sistema de guardado
El juego no contará con sistema de guardado, ya que está orientado a partidas de jugar hasta perder, pero sí se guarda la puntuación obtenida de cara al ranking.
## 5. Modelo de Negocio
![Imgur](https://i.imgur.com/F0elgsb.jpg "Modelo de negocio Canvas")
* **Socios clave**: Plataformas donde publicamos nuestro juego (Facebook, Itch.io y Github Pages) y plataformas que permitan publicitarnos (Youtube, Twitter, Facebook, Github, Verkami, Kickstarter).
* **Actividades clave**: Comunicación activa en redes sociales, solución de problemas con rapidez gracias a herramientas como [Mantis Bug Tracker](https://www.mantisbt.org/index.php) y focalización en la experiencia de juego: el jugador no va a encontrarse ningún tipo de publicidad dentro del propio juego, sino externo a él (en redes sociales, en la web...)
* **Recursos clave**: Adobe Animate y Photoshop con licencias de estudiante, editores gratuitos de HTML, JavaScript y CSS, plataformas online y recursos humanos (animadores, artistas, sound designers, game designers, guionista, community manager, programadores).
* **Propuesta de valor**: Ofrecer un videojuego con una experiencia distinta, al ser un dungeon crawler y roguelike sin combates por turnos y focalizado en la acción. Una mezcla de géneros poco habitual y una experiencia de juego muy inmediata.
* **Relación con los clientes**: Comunicación activa en redes sociales para obtener fidelidad y transparencia en las metas de donaciones.
* **Canales**: Distribución en Facebook e Itch.io.
* **Segmento de clientes**: El juego busca a un público juvenil y adulto, con gusto por el reto y la rejugabilidad.
* **Fuente de ingresos**: Especificado en el apartado 7 del documento.
* **Estructura de costes**: Especificado en el apartado 9 del documento.


## 6. Posibles ampliaciones
### 6.1. Más cadenas
* **Cadena de shock**: Si no se corta esta cadena, el personaje quedará expuesto al siguiente ataque enemigo, no pudiendo cortar ninguna cadena. Si se corta con éxito, infligirá una gran cantidad de daño al enemigo. Requiere de conectar dos veces para cortarla.
* **Cadena de veneno**: Cortarla envenenará al enemigo, mientras que no cortarla envenará a Rhaxtir. El efecto de veneno restará progresivamente vida y se curará tras 5 turnos o al finalizar el combate.
* **Cadena de explosión**: Al cortar esta cadena, se generará una explosión que cortará las cadenas adyacentes a esta automáticamente. No cortarla no tendrá repercusiones.
* **Cadena trampa**: Cortar esta cadena hará daño al jugador. No cortarla hace daño al enemigo.
* **Cadena tiempo extra**: Cortar esta cadena hará que el tiempo a cortar el próximo patrón se incremente en un 50% el tiempo límite para cortar. No cortarla hará lo propio reduciéndolo.
* **Cadena block**: Cortar esta cadena bloqueará al jugador y no podrá cortar ninguna otra cadena durante la secuencia actual. 
### 6.2. Más enemigos y niveles
Se puede ampliar el número de enemigos, haciendo que aparezcan en posteriores niveles del juego o incluso en los niveles ya actuales. Añadir más enemigos ofrece la posibilidad de presentar nuevos patrones de ataques donde aumentar el reto para el jugador.
### 6.3. Mejoras en accesibilidad
* **Modo daltonismo**: Se modificará el color de los sprites a varias opciones para que todos los jugadores puedan disfrutar del juego.
* **Modo slow-motion**: Se podrá reducir la velocidad del juego, haciendo que vaya entre el 50% y el 90% más lento, en intervalos del 10%. Así cada jugador podrá adaptar la experiencia respecto a sus habilidades.
* **Modo sin efectos**: Todas las cadenas harán daño cuando no se corten y devolverán el daño cuando se corten, eliminando el factor estratégico y basando todo el juego en la habilidad.
### 6.4. Nuevos modos de juego
* **Multijugador 1 vs 1**: Se desarrollará por turnos. Un jugador dibujará un patrón en el grid, se enviará al oponente y tendrá que cortarlo. A continuación, será el turno del siguiente jugador, que dibujará otro patrón y se enviará a su oponente. Se continuará este ciclo hasta que uno de los dos jugadores pierda la vida. Se podrá comunicar mediante:
	* **Matchmaking Online**: Se realizará un emparejamiento online con un criterio de lógica difusa: cada jugador tendrá un nivel online obtenido en base a su historial de victorias y derrotas, y se emparejará a jugadores dentro del mismo rango. Si no se encuentra ningún jugador del mismo rango en un tiempo determinado, se intentará emparejar con un jugador de un rango inmediatamente inferior o superior.
	* **Invitación personal**:Un jugador podrá generar un enlace y/o un código QR para compartir con un conocido, redirigiéndole a la web del juego y comenzando la partida.
* **Bestiario**: Se contará con una base de datos que se irá rellenando conforme se derrote a los enemigos, de manera que los jugadores puedan consultar los stats de cada uno de ellos, los ataques que pueden realizar y los niveles donde pueden aparecer. El jugador obtendrá una recompensa por completar este bestiario: un enemigo final secreto al que solo se podrá acceder completando todos los niveles, y que se sustituirá por el enemigo final natural 1 de cada 5 veces.
* **Editor**: Se podrán crear nuevos ataques y asociarlos a distintos enemigos. Se podrán guardar los diferentes patrones creados, pero solo se podrán jugar en este modo: tras asociar los nuevos ataques a los enemigos, se entrará en una mazmorra en la que se combatirá contra una sucesión aleatoria de estos una y otra vez hasta caer derrotado.
* **Rankings de temporada**: Se haría un sistema de _rankings_ en el que cada jugador tendrá su puntuación máxima (el número de niveles que ha conseguido superar) registrada en un _ladder_. Cada semana se recogerán a los mejores jugadores (cuántos dependerá de el número de personas que hayan jugado esa semana) y se les recompensará dándoles la opción de iniciar sus partidas con una ventaja de stats.
* **Eventos de temporada**: Para mantener a los jugadores interesados, se establecerán eventos gratuitos en ciertos momentos del año, en los que cambiarán ciertos enemigos, apariencias estéticas y jefes de acuerdo con la temporada del año. Estos eventos de temporada durarán 2 semanas y se realizarán en Halloween, Navidad, San Valentín, Pascua y al comienzo del verano en el hemisferio norte. Además, en periodos sin eventos de este tipo (comienzos de otoño y primavera), se incorporarán otros eventos gratuitos en los que poder enfrentarse a enemigos exclusivos de las ampliaciones de pago, a modo de promoción de estas e incentivando a su compra.

## 7. Monetización
Como se ha especificado en el apartado de Modelo de Negocio, *Depths of Magic* está abierto a donaciones y tendrá una serie de metas monetarias que, de ser alcanzadas, permitirán al equipo ampliar el juego con las posibles ampliaciones planteada anteriormente. El coste de la última meta deberá cubrir los salarios de todo el equipo de desarrollo durante los dos años que durará la campaña de financiación, a partir de ese tiempo se cerrarán las metas donde se hayan quedado y solo se permitirá donar por el mero hecho de ofrecer una ayuda al equipo o como premio porque alguien haya disfrutado mucho del juego.

De estas ampliaciones, no se pretende cobrar bajo ningún concepto por las mejoras de accesibilidad, ya que se considera que es un compromiso social con todo el mundo y que se debe hacer por permitir hacer llegar el juego a más gente.

Además, tampoco se requerirá alcanzar ninguna meta para los eventos de temporada, ya que son una buena forma de captar la atención de jugadores que en el camino hayan perdido interés en el juego, ofreciendo contenido adicional por tiempo limitado. Además, al ser por tiempo limitado, dicho contenido se podrá reutilizar (por ejemplo, los mismos monstruos exclusivos cada Halloween), por lo que la ganancia en cuanto a visibilidad compensa la falta de ingresos en este aspecto. 

Una vez establecido qué contenido es de pago, las metas serían las siguientes:
* **1. Rankings de temporada:** Un primer objetivo que, al ser incorporado al juego, permite tener a los jugadores enganchados en el reto de superarse unos a otros durante bastante tiempo, dando así más margen de tiempo al equipo para obtener financiación de las otras metas antes de que exista la posibilidad de que el juego sea olvidado por el público. Se desarrollará cuando se alcance la meta de **20.000 euros.**
* **2. Ola de enemigos 1:** 5 enemigos nuevos que presentarán como nuevas mecánicas las cadenas de veneno y de tiempo extra. Estos enemigos solamente aparecerán de manera aleatoria en cualquier nivel a partir de la segunda vuelta al juego, siendo significativamente más difíciles que los enemigos del nivel 3 y aumentando la dificultad del juego una vez se ha eliminado por primera vez al jefe final. Se desarrollará cuando se alcance la meta de **50.000 euros.**
* **3. Bestiario:** Una vez se tiene un número más grande de enemigos, comienza a ser interesante tener un bestiario para que el jugador comience a poder descubrir sus stats y a poder ver sus ataques sin necesidad de combatir con él. Se desarrollará cuando se alcance la meta de **70.000 euros.**
* **4. Traducciones:** a Alemán, Francés e Italiano, intentando así llegar a un público más amplio y contentando a jugadores cuyo lenguaje nativo sea este. Es interesante realizar estas traducciones tras haber incluído el bestiario en el juego, ya que es cuando comienza a haber un texto más complejo. Se desarrollará cuando se alcance la meta de **100.000 euros.**
* **5. Ola de enemigos 2:** 5 enemigos nuevos que presentarán como nuevas mecánicas las cadenas de shock y de trampa. Al igual que los de la ola 1, solo aparecerán a partir de la segunda vuelta. Se desarrollará cuando se alcance la meta de **120.000 euros.**
* **6. Multijugador 1 vs 1:** Se introducirá este nuevo modo previamente explicado. Se desarrollará cuando se alcance la meta de **150.000 euros.**
* **7. Ola de enemigos 3:** 5 enemigos nuevos (haciendo un total de 25) que traerán como nuevas mecánicas las cadenas de block y de explosión. Al igual que los de anteriores olas, solo aparecerán a partir de la segunda vuelta. Se desarrollará cuando se alcance la meta de **185.000 euros.**
* **8. Editor de ataques y enemigos:** Como recompensa final en caso de llegar a la meta, se proveerá al juego con un editor de ataques y enemigos, de manera que los jugadores puedan disfrutar de sus creaciones y ampliar aún más el juego. Se desarrollará cuando se alcance la meta de **210.000 euros.**

## 8. Assets necesarios
### 8.1. Sprites
* Protagonista
* Enemigos 1 a 9
* Jefe final
* Cadenas mágicas
* Grid
### 8.2. Fondos
* Fondos del nivel 1
* Fondos del nivel 2
* Fondos del nivel 3
* Fondo del grid
### 8.3. Cinemáticas
* Escena de intro
* Escena de ending
### 8.4. Efectos
* Efectos daño
* Efectos buff/debuff
* Efectos cura
### 8.5. Sonido
* Efectos sonoros personaje
* Efectos sonoros enemigos
* Efectos sonoros ambientales
* Efectos sonoros cadenas
	* Ruptura de cadena
	* Corte
* Efectos de combate
	* Daño
	* Curación
	* Buff / Debuff
* Cambio de enemigo
* Cambio de escena
* Música cinemáticas
	* Intro
	* Ending
* Música ingame
	* Combate
	* Final Boss
* Música menús
	* Carga
### 8.6. Código
* Implementación de objetos de gameplay
* Implementación de la pausa
* Implementación de interacción con la interfaz
* Implementación de la reproducción de animaciones
* Implementación de la reproducción de sonido y música
* Implementación de la transición entre pantallas
* Implementación de cálculo de stats del protagonista
* Implementación del servidor
	* Implementación de comunicación cliente-servidor
* Implementación del multijugador cooperativo
* Implementación del *switch* de idioma
### 8.7. Animaciones
* Spritesheet protagonista
* Spritesheet enemigos 1 a 9
* Spritesheet jefe final
* Spritesheet cinemáticas
	* Intro
	* Ending
### 8.8. Interfaz
* Botón de inicio
* Botón de continuar (tras finalizar nivel)
* Símbolo de ataque
* Símbolo de defensa
* Símbolo de salud
* Símbolos de buff/debuff
## 9. Objetivos del proyecto
### 9.1. Estimación del coste en tiempo de las tareas
* **Mario:**
	* Documentación para diseños: 20 horas
	* Logos de la empresa y el juego: 7 horas
	* Bocetos de personaje y enemigos: 3 horas
	* Diseño de personaje y enemigos: 25 horas
	* Diseño de grid y cadenas: 15 horas
	* Animaciones de personaje y enemigos: 40 horas
	* Bocetos de interfaz: 2 horas
	* Diseño de assets de la interfaz: 5 horas
* **Javier:**
	* Implementación del Framework del juego: 65 horas
	* Implementación del Gameplay principal: 25 horas
	* Implementación del esqueleto de la web: 5 horas
	* Implementación de mecánicas específicas: 25 horas
	* Implementación de parámetros y decisiones de diseño: 8 horas
	* Testeo: 40 horas
* **César**:
	* Implementación del servidor: 5 horas
	* Documentación sobre animar con JavaScript: 10 horas
	* Implementación de animaciones con JSON: 12 horas
	* Documentación sobre sonido: 5 horas
	* Diseño de sonido: 25 horas
	* Documentación de música: 15 horas
	* Diseño de música: 30 horas
* **Laura**:
	*  Boceto de enemigo y búsqueda de referencias: 2 horas 30 minutos por enemigo.
	* Limpieza y coloreado del boceto: 30 minutos por enemigo.
	* Spritesheet completa del enemigo: 5 horas por enemigo.
	* Boceto de fondo y sombras: 1 hora por fondo.
	* Mejorado de fondo: 2 horas por fondo.
	* Spritesheets de efectos: 3 horas por efecto.
* **Juan**:
	* Planteamiento básico del juego: 10 horas
	* Game Design en profundidad: 30 horas
	* Gestión de Redes Sociales: 25-40 horas
	* Gestión de la Web: 15-20 horas
	* Preparación de presentación PowerPoint: 3-5 horas
	* Storyboard y guión: 2 horas
	* Creación de las cinemáticas: 10 horas
	* Creación del tráiler: 15 horas
	* Diseño de enemigos, cadenas y niveles: 15 horas
	* Balanceo y testing: 25-35 horas
	* Canvas de Modelo de Negocio + documentación: 5 horas
	* Modelo de monetización: 3 horas
	* Redacción, revisión y mantenimiento del GDD: 40 horas
### 9.2. Milestones
#### Milestone 1 - 27/ 09 / 2019 [FINALIZADO]
##### Objetivo: Concepto de juego
* **Programación**: Engine principal. Dos lienzos: uno de la visualización de la acción y otro donde se desarrolle la jugabilidad.
* **Game Design**: Establecimiento de mecánicas principales, desarrollo del juego, ambientación y reglas básicas.
* **Assets**: Arte conceptual, propuestas de diseños enemigos y de fondos.
* **Marketing y gestión**: Cuentas de redes sociales, establecimiento de objetivos, primera versión del GDD.
#### Milestone 2 - 06 / 10 / 2019 [FINALIZADO]
##### Objetivo: Primer prototipo
* **Programación**: Game loop, clases para la gestión de los distintos objetos, desarrollo de combate.
* **Game Design**: Guión, storyboard, diseño de los enemigos (ataques y parámetros), diseño de los niveles (número de salas por nivel, número de enemigos por sala, jefes finales), diseño de los efectos de las cadenas, mockup del diseño de interfaz.
* **Assets**: Diseños definitivos, fondos, animaciones de la protagonista.
* **Marketing y gestión**: Movimiento en cuentas de Twitter, canvas del modelo de negocio, planes de monetización, lanzamiento de la web definitiva por Github Pages.
#### Milestone 3 - 11 / 10 / 2019 [FINALIZADO]
##### Objetivo: Finalización del grueso del proyecto
* **Programación**: Se puede jugar una partida de principio a fin, con todas sus pantallas (inicio, game over, cinemáticas, todos los niveles y combates).
* **Game Design**: Balanceo de tiempo límite para cortar, de los buffs/debuffs, de los stats de personaje y enemigos y de la curva de dificultad.
* **Assets**: Interfaz, sonido y música, animaciones finales, fondos finales.
* **Marketing y gestión**: Mantenimiento y actualización de las redes sociales y la web. 
#### Milestone 4 - 18 / 10 / 2019
##### Objetivo: Pequeños detalles, corrección de errores y publicación
* **Programación**: Finalización de la implementación de todo el flujo de juego y corrección de bufs finales.
* **Game Design**: Ajustes finales de balanceo e integración de la última mecánica (patrones con tiempo). Mockups de las posibles ampliaciones del juego.
* **Assets**: Animaciones, sonidos y efectos que hayan quedado pendientes del anterior milestrone.
* **Marketing y gestión**: Creación del tráiler, PowerPoint de presentación y planificación de la exposición al público. Campaña de marketing en las redes sociales. Detallar y decorar los modelos de negocio y monetización de cara a la presentación.
## 10. Contacto y Enlaces de interés

> [Twitter](https://twitter.com/AngryPineappleG "Twitter de la compañía")

> [Itch.io](https://angrypineapplegames.itch.io/ "Itch.io de la compañía")

> [Youtube](https://www.youtube.com/channel/UC-beom-Ex559oRHYl8knUAQ "Canal de Youtube de la compañía")

> [Facebook](https://www.facebook.com/juanantonio.martingarcia.33671?ref=bookmarks "Facebook de la compañía")
