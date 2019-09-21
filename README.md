# Depths of Magic: Documento de Diseño de Juego

### Angry Pineapple Games
### Versión del Documento: 0.9
### Plantilla de GDD adaptada de la escrita por: Benjamin “HeadClot” Stanley. https://docs.google.com/document/d/1-I08qX76DgSFyN1ByIGtPuqXh7bVKraHcNIA25tpAzE/edit#

## Concepto
### Género y Setting
**Depths of Magic** es un juego del género *dungeon crawler* con un sistema de combate automático basado en cortar diferentes patrones mediante el ratón o la pantalla táctil para contraatacar a los enemigos y obtener recompensas. 

Ambientado en un mundo donde la magia es posible, nuestr@ protagonista deberá embarcarse en la exploración de una mazmorra en la que se encontrará con numerosos enemigos a los que derrotar en frenéticos combates.

### Mecánicas de juego principales
* **Exploración automática**: El personaje avanzará por la mazmorra por su cuenta, focalizando toda la atención del gameplay en los combates.
* **Secuencias de combates aleatorias**: La secuencia de enemigos de un nivel de la mazmorra no estará preestablecida, por lo que en cada iteración del juego se podrá disfrutar de un orden distinto a la hora de afrontar los retos o incluso aparecerán enemigos que no se han visto en la primera partida, fomentando así la rejugabilidad del título.
* **Ataques con patrones**:  Los enemigos tendrán unos ataques predeterminados que ejecutarán de forma aleatoria. Cada uno de estos ataques estará enlazado con un patrón de dibujo con el que deberá interactuar el jugador.
* **Contraataques con *slashes***: El jugador deberá cortar los patrones enemigos de la forma más rápida y precisa posible. Será su manera de interactuar con el entorno y, por tanto, de evitar que le inflijan daño y de contraatacar al enemigo.
* **Efectos**: Los patrones que dibujan los enemigos tendrán distintos efectos que se dispararán al ser cortados. Cada efecto vendrá asociado con una apariencia estética que lo identifique. Algunos de estos efectos serán curación de vida, daño sorpresa, multiplicador al daño en contraataque o modificadores de *stats* del oponente.
### Plataformas
**Depths of Magic** estará disponible para web en Itch.io, Facebook Games y en la propia web del videojuego. (Pendiente de completar con enlaces).
El juego podrá ejecutarse tanto en PC como en móviles y tabletas.

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
## Elevator Pitch
En **Depths of Magic** se premia al jugador habilidoso gracias al sistema de combate basado en trazados. Es un juego inmediato, frenético y rejugable gracias a la generación aleatoria de los combates.
Jugando a **Depths of Magic** el jugador se encontrará con una experiencia de *dungeon crawler* alejada de los repetitivos pasillos aleatorios y sin necesidad de planificar una estrategia preestablecida para los combates enemigos. La toma de contacto es sencilla y rápida, enseñando los fundamentos del juego sin aburrir al jugador y permitiéndole disfrutar lo antes posible.
Con el fuerte y contrastado apartado visual, se busca que los jugadores puedan sentir el poder de lanzar los hechizos y acribillar a sus enemigos, incentivando así sus ganas de continuar.
## Historia y Gameplay
### Sinopsis de la historia
Rhaxtir es una nigromante sin rumbo, que en uno de sus viajes descubre una misteriosa mazmorra que emana una extraña aura. Intrigada por ello, la protagonista se adentra dentro de la mazmorra dispuesta a descubrir todos los secretos mágicos que esta pueda albergar.
### Historia en detalle
Las secuencias introductorias y final (únicas escenas del juego), se especificarán en versiones posteriores del documento. Ambas deberán ser omisibles.
### Gameplay en detalle
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
### Twitter: https://twitter.com/AngryPineappleG
