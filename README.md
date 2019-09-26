# Depths of Magic: Documento de Diseño de Juego

### Angry Pineapple Games
### Versión del Documento: 1.0
### Plantilla de GDD adaptada de la escrita por: [Benjamin “HeadClot” Stanley](https://docs.google.com/document/d/1-I08qX76DgSFyN1ByIGtPuqXh7bVKraHcNIA25tpAzE/ "Enlace al documento de plantilla")

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
**Depths of Magic** estará disponible para web en Itch.io, Facebook Games y en la propia web del videojuego. (Pendiente de completar con enlaces).
El juego podrá ejecutarse tanto en PC como en móviles y tabletas.
### Modelo de monetización
TODO_
Enlace al modelo de negocio completo: TODO_
### Alcance y escala del proyecto
* **Escala económica y de tiempo**:
	* **Presupuesto inicial**: 0 euros.
	* **Fecha de inicio**: 9 de septiembre de 2019.
	* **Fecha estimada de finalización del prototipo**: 18 de octubre de 2019.
* **Equipo**:
	* **Mario Aceituno Cordero**: Arte y animación.
	* **Javier Albaráñez Martínez**:Game design y programación.
	* **César Carbajo García**: Programación y sonido.
	* **Juan Antonio Martín García**: Game design, documentación y community manager.
	* **Laura Suonpera Lozano**: Game design, arte y animación.
### Influencias
* **Fruit Ninja**: La mecánica de cortar elementos de manera frenética tiene inspiración en este título.
* **Danganronpa**: Los cortes también tienen inspiración en los *Rebuttal Showdown* de esta saga.
* **Pokémon**: El diseño mecánico de los enemigos basado en una serie de ataques asociados que se ejecutan de manera aleatoria se basa en las mecánicas de los enemigos de los JRPG clásicos, siendo Pokémon una de las muestras más notorias y conocidas.
* **Darkest Dungeon**: El enfoque de la cámara y la distribución de la interfaz de usuario de los combates será similar al de esta obra.
* **Octopath Traveler**: Se buscará una estética en los efectos mágicos similar a la presentada en este título.
* **Crypt of the Necrodancer**: La ambientación de la historia será similar, enfrentándose a los peligros y amenazas que se encuentren en la mazmorra.
### Descripción del proyecto (breve)
2-3 párrafos
### Descripción del proyecto (detallada)
4-6 párrafos
## Elevator Pitch
En **Depths of Magic** se premia al jugador habilidoso gracias al sistema de combate basado en trazados. Es un juego inmediato, frenético y rejugable gracias a la generación aleatoria de los combates.
Jugando a **Depths of Magic** el jugador se encontrará con una experiencia de *dungeon crawler* alejada de los repetitivos pasillos aleatorios y sin necesidad de planificar una estrategia preestablecida para los combates enemigos. La toma de contacto es sencilla y rápida, enseñando los fundamentos del juego sin aburrir al jugador y permitiéndole disfrutar lo antes posible.
Con el fuerte y contrastado apartado visual, se busca que los jugadores puedan sentir el poder de lanzar los hechizos y acribillar a sus enemigos, incentivando así sus ganas de continuar.
## Historia y Gameplay
### Sinopsis de la historia
Rhaxtir es una nigromante sin rumbo, que en uno de sus viajes descubre una misteriosa mazmorra que emana una extraña aura. Intrigada por ello, la protagonista se adentra dentro de la mazmorra dispuesta a descubrir todos los secretos mágicos que esta pueda albergar y que le ayuden a fortalecerse.
### Historia en detalle
Las secuencias introductorias y final (únicas escenas del juego), se especificarán en versiones posteriores del documento. Ambas deberán ser omisibles.
### Gameplay resumido
El juego se desarrollará como una secuencia de combates, uno tras otro y con transiciones entre ellos. Habrá tres niveles, cada uno con tres salas y varios combates en cada sala. Al finalizar cada nivel se informará al jugador de la progresión obtenida y se pasará al siguiente.
Los combates se desarrollarán mediante la jugabilidad basada en corte de patrones planteada en los apartados anteriores.
### Gameplay en detalle
#### Información ingame
* **Rhaxtir**: Se mostrarán numéricamente sus puntos de vida (HP), así como si tiene algún buff / debuff en ataque (AP) y defensa (DP), pero sin reflejo numérico de estos stats.
* **Enemigos**: La salud total del enemigo (HP) será información oculta para el jugador. Los buff / debuff del enemigo se mostrarán en el momento de aplicarse, pero no habrá información estática en la interfaz que lo refleje.
* **Daños y efectos**: Cuando se realice daño (tanto a Rhaxtir como a los enemigos), se mostrará en pantalla de manera numérica el daño realizado. Los buffs, debuffs y efectos de veneno se mostrarán con animaciones en el momento de aplicarse.
#### Progreso del juego
* **Estructura de niveles**: El juego constará de tres niveles, cada uno de ellos formados a su vez por tres salas, y en cada una de las salas se realizarán cuatro combates, dando lugar a un total de 36 combates. Al finalizar un nivel, se mostrarán los stats del personaje para reflejar el progreso.
* **Aparición de los enemigos**: Los enemigos aparecerán en secuencias aleatorias, fomentando la rejugabilidad del título. En principio se contará con un abanico de 10 enemigos. En el nivel 1 podrán aparecer 3 enemigos distintos, en el nivel 2 podrán aparecer 6, incluyendo a los 3 anteriores, y en el nivel 3 podrán aparecer los 10 posibles.
* **Combate contra jefes**: Al final de cada nivel, el último enemigo será predefinido y siempre será un combate contra un jefe final. Queda abierta la posibilidad de que los jefes de los niveles 1 y 2 sean enemigos normales de los niveles superiores. El jefe del nivel 3 será un enemigo exclusivo contra el que solo se podrá combatir en la batalla final.
* **Desarrollo del combate**: En todos los combates se seguirá la siguiente secuencia: el enemigo selecciona al azar uno de sus cuatro posibles ataques -> ejecuta dicho ataque dibujando el patrón de cadenas en la pantalla de acción -> el jugador corta las cadenas en el tiempo establecido -> se realizan las animaciones y se aplican los efectos en función a los cortes realizados -> si el enemigo y el jugador siguen con vida, se repite el bucle.
* **Transiciones entre combates**: Durante el combate, la protagonista recibirá cambios temporales en los atributos o en su estado. Al finalizar un combate y pasar al siguiente:
	* Los puntos de vida (HP) se mantienen como estuviesen, sin recuperación de vida de un combate a otro. Sí se recupera toda la vida al finalizar un nivel completo.
	* El veneno se cura al terminar un combate y comenzar el siguiente.
	* Los buffs y debuffs se pasan de un combate a otro, pero se resetean al finalizar una sala.
* **Progresión de la dificultad**: El juego debe tener una curva de dificultad que aumente progresivamente y que exija al jugador demostraciones de las habilidades aprendidas. Para ello, se aplicarán las siguientes decisiones de diseño:
#### Cadenas
Las cadenas que forman los patrones mágicos de los enemigos tendrán distintas formas y efectos.
* **Cadena de contraataque:** Cortarla prevendrá el daño que se fuese a hacer al protagonista y se realizará un contraataque que dañará al enemigo en función de los stats del protagonista y del propio enemigo.
* **Cadena de buff**: Cortarla aumentará un stat del personaje (ataque o defensa, al azar) hasta finalizar una sala. Fallar el corte aumentará un stat del enemigo y se mantendrá hasta que este sea derrotado.
* **Cadena de debuff**: Cortarla disminuye un stat del enemigo hasta que este sea derrotado. Fallar disminuirá un stat del personaje hasta finalizar la sala. Los buffs y debuffs son acumulativos (se pueden tener varios buffs en el mismo stat), y uno anula a otro si se aplican al mismo stat.
* **Cadena de curación**: Cortarla devolverá el hechizo al enemigo y le curará vida. No cortarla recuperará vida a Rhaxtir. De esta manera se incentiva a no cortar todas las cadenas sin pensar.
* **Cadena de veneno**: Cortarla envenenará al enemigo, mientras que no cortarla envenará a Rhaxtir. El efecto de veneno restará progresivamente vida y se curará tras 5 turnos o al finalizar el combate.
* **Cadena de shock**: Si no se corta esta cadena, el personaje quedará expuesto al siguiente ataque enemigo, no pudiendo cortar ninguna cadena. Si se corta con éxito, infligirá una gran cantidad de daño al enemigo. Requiere de conectar dos veces para cortarla.
#### Enemigos
A continuación se detalla el esquema del primer enemigo. Se ampliará el documento con el diseño de todos los enemigos en posteriores versiones.
* Enemigo 1:
	* **Nombre:** Raygler
	* **HP**: 90
	* **Base AP**: 35
	* **Base DP**: 25
#### Cámara
Vista lateral en dos dimensiones. En todo momento se podrán apreciar a la protagonista a la izquierda y al enemigo a batir en la derecha, por encima de la imagen de fondo. La interfaz de usuario estará separada, mostrándose a la derecha o abajo en función de la navegación por la página web, y en ella será donde se lleve a cabo la jugabilidad del trazado de runas y donde se muestre la información relevante al combate, como puntos de salud.
#### Controles
El juego se controlará enteramente por ratón o por interacción con pantalla táctil.
#### Puntuación
No hay establecido un sistema de puntuación. Queda abierto a modificación en posteriores versiones del documento.
#### Modos de juego
Habrá dos modos de juego:
* Individual: Campaña principal en la que un único jugador se enfrentará al desafío principal.
* Cooperativo: Dos jugadores podrán participar a la vez, enfrentándose a combates distintos a los del modo individual.
#### Sistema de guardado
No se ha especificado un sistema de guardado. En función de la duración de las partidas, queda abierto a ser implementado y se recogerá en posteriores versiones del documento.
## Enlaces de interés
### [Twitter](https://twitter.com/AngryPineappleG "Twitter de la compañía")
### [Itch.io](https://angrypineapplegames.itch.io/ "Itch.io de la compañía")
### [Youtube](https://www.youtube.com/channel/UC-beom-Ex559oRHYl8knUAQ "Canal de Youtube de la compañía")
