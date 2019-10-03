# Depths of Magic: Documento de Diseño de Juego

> Angry Pineapple Games

> Versión del Documento: 1.1

> Plantilla de GDD adaptada de la escrita por: [Benjamin “HeadClot” Stanley](https://docs.google.com/document/d/1-I08qX76DgSFyN1ByIGtPuqXh7bVKraHcNIA25tpAzE/ "Enlace al documento de plantilla")

> Written with [StackEdit](https://stackedit.io/).
## Concepto
### Género y Setting
**Depths of Magic** es un juego del género *dungeon crawler* con un sistema de combate automático basado en cortar diferentes patrones mediante el ratón o la pantalla táctil para contraatacar a los enemigos y obtener recompensas. 

Ambientado en un mundo donde la magia es posible, nuestra protagonista deberá embarcarse en la exploración de una mazmorra en la que se encontrará con numerosos enemigos a los que derrotar en frenéticos combates.

### Mecánicas de juego principales
* **Exploración automática**: El personaje avanzará por la mazmorra por su cuenta, focalizando toda la atención del gameplay en los combates.
* **Secuencias de combates aleatorias**: La secuencia de enemigos de un nivel de la mazmorra no estará preestablecida, por lo que en cada iteración del juego se podrá disfrutar de un orden distinto a la hora de afrontar los retos o incluso aparecerán enemigos que no se han visto en la primera partida, fomentando así la rejugabilidad del título.
* **Ataques con patrones**:  Los enemigos tendrán unos ataques predeterminados que ejecutarán de forma aleatoria. Cada uno de estos ataques estará enlazado con un patrón de dibujo con el que deberá interactuar el jugador.
* **Contraataques con *slashes***: El jugador deberá cortar los patrones enemigos de la forma más rápida y precisa posible. Será su manera de interactuar con el entorno y, por tanto, de evitar que le inflijan daño y de contraatacar al enemigo.
* **Efectos**: Los patrones que dibujan los enemigos tendrán distintos efectos que se dispararán al ser cortados. Cada efecto vendrá asociado con una apariencia estética que lo identifique. Algunos de estos efectos serán curación de vida, daño sorpresa, multiplicador al daño en contraataque o modificadores de *stats* del oponente.
### Plataformas
**Depths of Magic** estará disponible para web en Itch.io, Facebook Instant Games y en la propia web del videojuego.
El juego podrá ejecutarse tanto en PC como en móviles y tabletas.
### Idiomas
Se podrá jugar tanto en inglés como en español.
### Alcance y escala del proyecto
* **Escala económica y de tiempo**:
	* **Presupuesto inicial**: 0 euros.
	* **Fecha de inicio**: 9 de septiembre de 2019.
	* **Fecha estimada de finalización del prototipo**: 16 de octubre de 2019.
* **Equipo**:
	* **Mario Aceituno Cordero**: Arte y animación.
	* **Javier Albaráñez Martínez**:Game design y programación.
	* **César Carbajo García**: Programación y sonido.
	* **Juan Antonio Martín García**: Gestión de proyecto, game design, documentación y community management.
	* **Laura Suonpera Lozano**: Game design, arte y animación.
### Influencias
* **Fruit Ninja**: La mecánica de cortar elementos de manera frenética tiene inspiración en este título.
* **Danganronpa**: Los cortes también tienen inspiración en los *Rebuttal Showdown* de esta saga.
* **Pokémon**: El diseño mecánico de los enemigos basado en una serie de ataques asociados que se ejecutan de manera aleatoria se basa en las mecánicas de los enemigos de los JRPG clásicos, siendo Pokémon una de las muestras más notorias y conocidas.
* **Darkest Dungeon**: El enfoque de la cámara y la distribución de la interfaz de usuario de los combates será similar al de esta obra.
* **Octopath Traveler**: Se buscará una estética en los efectos mágicos similar a la presentada en este título.
* **Crypt of the Necrodancer**: La ambientación de la historia será similar, enfrentándose a los peligros y amenazas que se encuentren en la mazmorra.
## Elevator Pitch
En **Depths of Magic** se premia al jugador habilidoso gracias al sistema de combate basado en trazados. Es un juego inmediato, frenético y rejugable gracias a la generación aleatoria de los combates.
Jugando a **Depths of Magic** el jugador se encontrará con una experiencia de *dungeon crawler* con elementos de *roguelike* alejada de los repetitivos pasillos aleatorios y sin necesidad de planificar una estrategia preestablecida para los combates enemigos. La toma de contacto es sencilla y rápida, enseñando los fundamentos del juego sin aburrir al jugador y permitiéndole disfrutar lo antes posible.
Con el fuerte y contrastado apartado visual, se busca que los jugadores puedan sentir el poder de lanzar los hechizos y acribillar a sus enemigos, incentivando así sus ganas de continuar.
## Historia y Gameplay
### Sinopsis de la historia
Rhaxtir es una nigromante sin rumbo, que en uno de sus viajes descubre una misteriosa mazmorra que emana una extraña aura. Intrigada por ello, la protagonista se adentra dentro de la mazmorra dispuesta a descubrir todos los secretos mágicos que esta pueda albergar y que le ayuden a fortalecerse.
### Historia en detalle
La carga de la historia es pequeña. Y en el guión se cuenta de manera sutil y sin descripción activa de lo que está ocurriendo más allá de dos imágenes.
Ambas secuencias serán omisibles, de cara a 
* **Secuencia introductoria**: Se muestra la siguiente frase:     _"ENG: Whoever fights with monsters should see to it that he does not become a monster in the process." / ESP: "Quien con monstruos lucha cuide de no convertirse a su vez en monstruo"_ , acto seguido, la frase desaparece y comienza a formarse una llama. Cuando la llama llega a la máxima intensidad, aparece otra frase _"ENG: And when you gaze long into an abyss, the abyss also gazes into you."  / ESP: "Cuando miras largo tiempo a un abismo, el abismo también mira dentro de ti",_ con _Friderich Nietzsche_ escrito debajo como subtítulo de autoría. Acto seguido, la frase comienza a desaparecer y se muestra un plano medio de Rhaxtir de espaldas mirando hacia la caverna, mientras el viento agita su pelo.
* **Secuencia final**: Esta secuencia se mostrará cuando Rhaxtir derrote al jefe final en el nivel 3. En ella se verá un primer plano de su mano sosteniendo una llama del color del enemigo final. Volverá a aparecer la frase _"ENG: Whoever fights with monsters should see to it that he does not become a monster in the process." / ESP: "Quien con monstruos lucha cuide de no convertirse a su vez en monstruo"_, y cuando esta desaparezca, la mano se cerrará de golpe, absorbiendo la energía mágica de la llama. Habrá un fundido a negro, en el que aparecerá otra vez la segunda parte de la frase, esta vez sin referenciar a Nietzsche: _ENG: "And when you gaze long into an abyss, the abyss also gazes into you. "/ ESP: "Cuando miras largo tiempo a un abismo, el abismo también mira dentro de ti"_, y cuando esta frase desaparezca, se verá en la oscuridad cómo se abren los ojos de Rhaxtir, emanando el color del jefe final, en señal de que ha absorbido su poder. De esta manera, se enlaza la historia con la jugabilidad, justificando que Rhaxtir ha sido consumida por su ambición de poder y ahora solo le queda continuar en la mazmorra hasta la extenuación (el _Game Over_).

![](https://github.com/Angry-Pineapple-Games/depths-of-magic/blob/master/Game%20Design/Storyboard.jpg "Storyboard")

### Gameplay resumido
El juego se desarrollará como una secuencia de combates, uno tras otro y con transiciones entre ellos. Habrá tres niveles, cada uno con tres salas y varios combates en cada sala. Al finalizar cada nivel se informará al jugador de la progresión obtenida y se pasará al siguiente.
Los combates se desarrollarán mediante la jugabilidad basada en corte de patrones planteada en los apartados anteriores.
### Gameplay en detalle
#### Información ingame
* **Rhaxtir**: Se mostrarán numéricamente sus puntos de vida (HP), así como si tiene algún buff / debuff en ataque (AP) y defensa (DP), pero sin reflejo numérico de estos stats.
* **Enemigos**: La salud total del enemigo (HP) será información oculta para el jugador. Los buff / debuff del enemigo se mostrarán en el momento de aplicarse, pero no habrá información estática en la interfaz que lo refleje.
* **Daños y efectos**: Cuando se realice daño (tanto a Rhaxtir como a los enemigos), se mostrará en pantalla de manera numérica el daño realizado. Los buffs, debuffs y efectos de veneno se mostrarán con animaciones en el momento de aplicarse.
TODO_: Muestra de la interfaz de usuario.
#### Progreso del juego
* **Estructura de niveles**: El juego constará de tres niveles, cada uno de ellos formados a su vez por tres salas, y en cada una de las salas se realizarán cuatro combates, dando lugar a un total de 36 combates. Al finalizar un nivel, se mostrarán los stats del personaje para reflejar el progreso. Cuando se finalice el tercer nivel, se volverá al primero con los stats de los enemigos modificados, y así sucesivamente. El juego finalizará cuando el personaje muera, perdiendo el progreso.
* **Aparición de los enemigos**: Los enemigos aparecerán en secuencias aleatorias, fomentando la rejugabilidad del título. En principio se contará con un abanico de 10 enemigos. En el nivel 1 podrán aparecer 3 enemigos distintos, en el nivel 2 podrán aparecer 6, incluyendo a los 3 anteriores, y en el nivel 3 podrán aparecer los 10 posibles.
* **Combate contra jefes**: Al final de cada nivel, el último enemigo será predefinido y siempre será un combate contra un jefe final. El jefe del nivel 1 será un enemigo común del nivel 2, mientras que el jefe del nivel 2 será un enemigo común del nivel 3. El jefe del nivel 3 será un enemigo exclusivo contra el que solo se podrá combatir en la batalla final.
* **Desarrollo del combate**: En todos los combates se seguirá la siguiente secuencia: el enemigo selecciona al azar uno de sus cuatro posibles ataques -> ejecuta dicho ataque dibujando el patrón de cadenas en la pantalla de acción -> el jugador corta las cadenas en el tiempo establecido -> se realizan las animaciones y se aplican los efectos en función a los cortes realizados -> si el enemigo y el jugador siguen con vida, se repite el bucle.
* **Transiciones entre combates**: Durante el combate, la protagonista recibirá cambios temporales en los atributos o en su estado. Al finalizar un combate y pasar al siguiente:
	* Los puntos de vida (HP) se mantienen como estuviesen, sin recuperación de vida de un combate a otro. Sí se recupera toda la vida al finalizar un nivel completo.
	* Los buffs y debuffs se pasan de un combate a otro, pero se resetean al finalizar una sala.
* **Progresión de la dificultad**: El juego debe tener una curva de dificultad que aumente progresivamente y que exija al jugador demostraciones de las habilidades aprendidas, pero mantieniéndole siempre entretenido para no romper el flujo de juego. Para ello, se aplicarán las decisiones de diseño de los siguientes apartados.
#### Cadenas
Las cadenas que forman los patrones mágicos de los enemigos tendrán distintas formas y efectos. Enlazar varios cortes incrementará los efectos que tengan las cadenas cortadas.
* **Cadena de contraataque:** Cortarla prevendrá el daño que se fuese a hacer al protagonista y se realizará un contraataque que dañará al enemigo en función de los stats del protagonista y del propio enemigo.
* **Cadena de buff**: Cortarla aumentará un stat del personaje (ataque primero, luego defensa) hasta finalizar una sala. Fallar el corte aumentará un stat del enemigo y se mantendrá hasta que este sea derrotado.
* **Cadena de debuff**: Cortarla disminuye un stat del enemigo hasta que este sea derrotado. Fallar disminuirá un stat del personaje hasta finalizar la sala. Los buffs y debuffs no son acumulativos (no se pueden tener varios buffs en el mismo stat, cortar una tercera cadena simplemente no tiene efecto), y uno anula a otro si se aplican al mismo stat.
* **Cadena de curación**: Cortarla devolverá el hechizo al enemigo y le curará vida. No cortarla recuperará vida a Rhaxtir. De esta manera se incentiva a no cortar todas las cadenas sin pensar.
* **Cadena de shock**: Si no se corta esta cadena, el personaje quedará expuesto al siguiente ataque enemigo, no pudiendo cortar ninguna cadena. Si se corta con éxito, infligirá una gran cantidad de daño al enemigo. Requiere de conectar dos veces para cortarla.
#### Enemigos
A continuación se detalla el esquema del primer enemigo. Se ampliará el documento con el diseño de todos los enemigos en posteriores versiones.
* Enemigo 1:
	* **Nombre:** Raygler
	* **HP**: 90
	* **Base AP**: 35
	* **Base DP**: 25
* _TODO_: Resto de enemigos
#### Cámara
Vista lateral en dos dimensiones. En todo momento se podrán apreciar a la protagonista a la izquierda y al enemigo a batir en la derecha, por encima de la imagen de fondo. La interfaz de usuario estará separada, mostrándose a la derecha o abajo en función de la navegación por la página web, y en ella será donde se lleve a cabo la jugabilidad del trazado de runas y donde se muestre la información relevante al combate, como puntos de salud.
#### Controles
El juego se controlará enteramente por ratón o por interacción con pantalla táctil, que controlarán las zonas donde se está cortando.
El botón ESC pone en pausa el juego, mientras que en tablets y móviles la pausa se realizará cuando se ponga en segundo plano la aplicación del navegador.
#### Puntuación
El progreso del jugador se verá reflejado en un incremento en las stats de Rhaxtir, que aumentarán en función de cómo se combata.
TODO: Explicación detallada de este desarrollo de stats.
#### Modos de juego
Habrá dos modos de juego:
* Individual: Campaña principal en la que un único jugador se enfrentará al desafío principal.
* Cooperativo: Dos jugadores podrán participar a la vez. Se enfrentarán a enemigos más fuertes (stats incrementados) desde un inicio y cortarán las cadenas por turnos: ataque del enemigo -> corta el jugador 1 -> siguiente ataque -> corta el jugador 2. En este modo de juego, el _Game Over_ llegará cuando ambos jugadores pierdan, y si solo uno de los dos muere en combate, se le restaurará la vida al finalizar una sala.
#### Sistema de guardado
El juego no contará con sistema de guardado, ya que está orientado a partidas de jugar hasta perder. Queda abierta la posibilidad de guardar el progreso de los jugadores al finalizar las partidas a modo de ranking.
## Modelo de Negocio
![](https://github.com/Angry-Pineapple-Games/depths-of-magic/blob/master/Bussiness%2C%20Marketing%20and%20Management/Canvas.jpg "Modelo de negocio - Canvas")
## Assets necesarios
### Sprites
* Protagonista
* Enemigos 1 a 9
* Jefe final
* Cadenas mágicas
* Grid
### Fondos
* Fondos del nivel 1
* Fondos del nivel 2
* Fondos del nivel 3
* Fondo del grid
### Cinemáticas
* Escena de intro
* Escena de ending
### Efectos
* Efectos daño
* Efectos buff/debuff
* Efectos cura
### Sonido
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
### Código
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
### Animaciones
* Spritesheet protagonista
* Spritesheet enemigos 1 a 9
* Spritesheet jefe final
* Spritesheet cinemáticas
	* Intro
	* Ending
### Interfaz
* Botón de inicio
* Botón de continuar (tras finalizar nivel)
* Símbolo de ataque
* Símbolo de defensa
* Símbolo de salud
* Símbolos de buff/debuff
## Objetivos del proyecto
### Estimación del coste en tiempo de las tareas
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
### Milestones
#### Milestone 1 - 27/ 09 / 2019 [FINALIZADO]
##### Objetivo: Concepto de juego
* **Programación**: Engine principal. Dos lienzos: uno de la visualización de la acción y otro donde se desarrolle la jugabilidad.
* **Game Design**: Establecimiento de mecánicas principales, desarrollo del juego, ambientación y reglas básicas.
* **Assets**: Arte conceptual, propuestas de diseños enemigos y de fondos.
* **Marketing y gestión**: Cuentas de redes sociales, establecimiento de objetivos, primera versión del GDD.
#### Milestone 2 - 06 / 10 / 2019
##### Objetivo: Primer prototipo
* **Programación**: Game loop, clases para la gestión de los distintos objetos, desarrollo de combate.
* **Game Design**: Guión, storyboard, diseño de los enemigos (ataques y parámetros), diseño de los niveles (número de salas por nivel, número de enemigos por sala, jefes finales), diseño de los efectos de las cadenas, mockup del diseño de interfaz.
* **Assets**: Diseños definitivos, primeros fondos, animaciones de la protagonista.
* **Marketing y gestión**: Movimiento en cuentas de Twitter, canvas del modelo de negocio, planes de monetización, lanzamiento de la web definitiva por Github Pages.
#### Milestone 3 - 11 / 10 / 2019
##### Objetivo: Finalización del grueso del proyecto
* **Programación**: Se puede jugar una partida de principio a fin, con todas sus pantallas (inicio, game over, cinemáticas, todos los niveles y combates).
* **Game Design**: Balanceo de tiempo límite para cortar, de los buffs/debuffs, de los stats de personaje y enemigos y de la curva de dificultad.
* **Assets**: Interfaz, sonido y música, animaciones finales, fondos finales.
* **Marketing y gestión**: Mantenimiento y actualización de las redes sociales y la web. Detallar y decorar los modelos de negocio y monetización de cara a la presentación.
#### Milestone 4 - 15 / 10 / 2019
##### Objetivo: Pequeños detalles, corrección de errores y publicación
* **Programación**: Testing, corrección de bugs e integración de los últimos assets. Implementación del modo multijugador.
* **Game Design**: Ajustes finales de balanceo. Mockups de las posibles ampliaciones del juego.
* **Assets**: Animaciones y efectos que hayan quedado pendientes del anterior milestrone.
* **Marketing y gestión**: Creación del tráiler, PowerPoint de presentación y planificación de la exposición al público. Campaña de marketing en las redes sociales.

## Posibles ampliaciones
### Más cadenas
* **Cadena de veneno**: Cortarla envenenará al enemigo, mientras que no cortarla envenará a Rhaxtir. El efecto de veneno restará progresivamente vida y se curará tras 5 turnos o al finalizar el combate.
* **Cadena de explosión**: Al cortar esta cadena, se generará una explosión que cortará las cadenas adyacentes a esta automáticamente. No cortarla no tendrá repercusiones.
* **Cadena trampa**: Cortar esta cadena hará daño al jugador. No cortarla hace daño al enemigo.
* **Cadena tiempo extra**: Cortar esta cadena hará que el tiempo a cortar el próximo patrón se incremente en un 50% el tiempo límite para cortar. No cortarla hará lo propio reduciéndolo.
* **Cadena block**: Cortar esta cadena bloqueará al jugador y no podrá cortar ninguna otra cadena durante la secuencia actual. 
### Más enemigos y niveles
Se puede ampliar el número de enemigos, haciendo que aparezcan en posteriores niveles del juego o incluso en los niveles ya actuales. Añadir más enemigos ofrece la posibilidad de presentar nuevos patrones de ataques donde aumentar el reto para el jugador.
### Mejoras en accesibilidad
* **Modo daltonismo**: Se modificará el color de los sprites a varias opciones para que todos los jugadores puedan disfrutar del juego.
* **Modo slow-motion**: Se podrá reducir la velocidad del juego, haciendo que vaya entre el 50% y el 90% más lento, en intervalos del 10%. Así cada jugador podrá adaptar la experiencia respecto a sus habilidades.
* **Modo sin efectos**: Todas las cadenas harán daño cuando no se corten y devolverán el daño cuando se corten, eliminando el factor estratégico y basando todo el juego en la habilidad.
### Nuevos modos de juego
* **Multijugador 1 vs 1**: Se desarrollará por turnos. Un jugador dibujará un patrón en el grid, se enviará al oponente y tendrá que cortarlo. A continuación, será el turno del siguiente jugador, que dibujará otro patrón y se enviará a su oponente. Se continuará este ciclo hasta que uno de los dos jugadores pierda la vida. Se podrá comunicar mediante:
	* **Matchmaking Online**: Se realizará un emparejamiento online con un criterio de lógica difusa: cada jugador tendrá un nivel online obtenido en base a su historial de victorias y derrotas, y se emparejará a jugadores dentro del mismo rango. Si no se encuentra ningún jugador del mismo rango en un tiempo determinado, se intentará emparejar con un jugador de un rango inmediatamente inferior o superior.
	* **Invitación personal**:Un jugador podrá generar un enlace y/o un código QR para compartir con un conocido, redirigiéndole a la web del juego y comenzando la partida.
* **Bestiario**: Se contará con una base de datos que se irá rellenando conforme se derrote a los enemigos, de manera que los jugadores puedan consultar los stats de cada uno de ellos, los ataques que pueden realizar y los niveles donde pueden aparecer. El jugador obtendrá una recompensa por completar este bestiario: un enemigo final secreto al que solo se podrá acceder completando todos los niveles, y que se sustituirá por el enemigo final natural 1 de cada 5 veces.
* **Editor**: Se podrán crear nuevos ataques y asociarlos a distintos enemigos. Se podrán guardar los diferentes patrones creados, pero solo se podrán jugar en este modo: tras asociar los nuevos ataques a los enemigos, se entrará en una mazmorra en la que se combatirá contra una sucesión aleatoria de estos una y otra vez hasta caer derrotado.
## Enlaces de interés
> [Twitter](https://twitter.com/AngryPineappleG "Twitter de la compañía")

> [Itch.io](https://angrypineapplegames.itch.io/ "Itch.io de la compañía")

> [Youtube](https://www.youtube.com/channel/UC-beom-Ex559oRHYl8knUAQ "Canal de Youtube de la compañía")

> [Facebook](https://www.facebook.com/juanantonio.martingarcia.33671?ref=bookmarks "Facebook de la compañía")
