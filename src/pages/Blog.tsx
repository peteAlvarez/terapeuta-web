import blog1 from "../assets/imagennueva1.png";
import blog2 from "../assets/imagennueva2.png";
import blog3 from "../assets/imagennueva3.png";
import blog4 from "../assets/imagennueva4.png";



export default function Blog() {
  return (
    <section className="blog-section">

      <div className="blog-grid">

        {/* BLOG 1 */}
        <article className="blog-card">
          <img src={blog1} alt="Señales de alerta en el desarrollo infantil" className="blog-image" />

          <h2 className="blog-title">
            Cuando algo no encaja: <br />
            <span>Señales de alerta en el desarrollo infantil</span>
          </h2>

          <p className="blog-summary">
            El desarrollo infantil no ocurre de la misma manera ni al mismo ritmo en todos los niños.
            Existen señales que pueden indicar la necesidad de una evaluación temprana.
          </p>

          <details className="blog-details">
            <summary className="blog-button">Leer más</summary>

            <div className="blog-content">
              <p>
                El desarrollo infantil no ocurre de la misma manera ni al mismo ritmo en todos los niños.
                Cada pequeño tiene su propio proceso; sin embargo, existen señales de alerta que pueden
                indicar la necesidad de una evaluación temprana por parte de un profesional.
              </p>

              <p>
                Detectar a tiempo posibles dificultades en la etapa preescolar (aproximadamente de los 3 a
                los 5 años) permite intervenir de manera oportuna, favoreciendo el bienestar emocional,
                social y académico del niño.
              </p>

              <h4>¿Qué son las señales de alerta?</h4>

              <p>
                Son comportamientos o habilidades que no aparecen, se pierden o se presentan de forma
                limitada para la edad del niño. No significan necesariamente que exista un diagnóstico,
                pero sí indican que es recomendable observar con mayor atención.
              </p>

              <h4>En niños de 3 a 5 años:</h4>

              <h5>Señales de alerta en el área del lenguaje</h5>
              <ul>
                <li>Dificultad para expresarse con frases sencillas.</li>
                <li>Habla poco o no se le entiende la mayor parte del tiempo.</li>
                <li>No sigue instrucciones simples.</li>
                <li>No muestra interés por comunicarse o conversar.</li>
                <li>Presenta regresión en palabras que ya utilizaba.</li>
              </ul>

              <h5>Señales de alerta en el área social y emocional</h5>
              <ul>
                <li>Poco contacto visual o escaso interés en interactuar con otros niños.</li>
                <li>Dificultad para compartir, esperar turnos o jugar en grupo.</li>
                <li>Reacciones emocionales muy intensas o desproporcionadas.</li>
                <li>Preferencia constante por jugar solo.</li>
                <li>Problemas para adaptarse a cambios en la rutina.</li>
              </ul>

              <h5>Señales de alerta en el área motora</h5>
              <ul>
                <li>Dificultad para correr, saltar o subir escaleras.</li>
                <li>Problemas para manipular objetos pequeños (lápices, tijeras, botones).</li>
                <li>Torpeza frecuente o movimientos poco coordinados.</li>
                <li>Evita actividades físicas propias de su edad.</li>
              </ul>

              <h5>Señales de alerta en el área cognitiva y de aprendizaje</h5>
              <ul>
                <li>Dificultad para seguir rutinas.</li>
                <li>Problemas para recordar instrucciones o secuencias simples.</li>
                <li>Poco interés por juegos de construcción, rompecabezas o actividades guiadas.</li>
                <li>Dificultad para identificar colores, formas o conceptos básicos acorde a su edad.</li>
              </ul>

              <h4>¿Cuándo buscar apoyo profesional?</h4>

              <p>
                Si notas una o varias señales de forma constante, o si tienes dudas sobre el desarrollo
                de tu hijo, lo más recomendable es consultar con un especialista.
              </p>

              <p>
                La intervención temprana no solo ayuda al niño, sino que también brinda orientación y
                tranquilidad a la familia.
              </p>

              <p>
                Observar, acompañar y escuchar a nuestros hijos es una de las herramientas más valiosas
                que tenemos. Pedir ayuda a tiempo es un acto de amor, no una etiqueta.
              </p>

              <p>
                Cada niño tiene un enorme potencial que puede florecer con el apoyo adecuado.
              </p>

              <p>
                En nuestro centro de terapia infantil estamos comprometidos con el desarrollo integral
                de cada niño y el acompañamiento cercano a sus familias. Consulta por tu sesión de
                orientación, para resolver dudas e indagar más en el desarrollo de tu hijo.
              </p>
            </div>
          </details>
        </article>

        {/* BLOG 2 */}
        <article className="blog-card">
          <img src={blog2} alt="Terapia infantil" className="blog-image" />

          <h2 className="blog-title">
            ¿Cuándo iniciar terapia infantil? <br />
            <span>Derribando mitos y tomando decisiones a tiempo</span>
          </h2>

          <p className="blog-summary">
            Iniciar terapia infantil genera dudas en muchos padres. Conocer cuándo consultar
            puede marcar una gran diferencia en el desarrollo del niño.
          </p>

          <details className="blog-details">
            <summary className="blog-button">Leer más</summary>

            <div className="blog-content">
              <p>
                Muchos padres sienten dudas cuando aparece la recomendación de iniciar terapia para su
                hijo ¿Será muy pequeño? ¿Es realmente necesario? ¿Estoy exagerando?
              </p>

              <p>
                La terapia infantil no busca etiquetar, sino acompañar el desarrollo y entregar
                herramientas tanto al niño como a su familia.
              </p>

              <h4>¿Cuándo es recomendable consultar?</h4>

              <ul>
                <li>El desarrollo del niño no avanza como se espera para su edad.</li>
                <li>Existen dificultades en el lenguaje, atención, juego o regulación emocional.</li>
                <li>Se observan conductas que interfieren en la vida diaria.</li>
                <li>Padres o educadores sienten que “algo no está funcionando del todo”.</li>
              </ul>

              <h4>Mitos frecuentes sobre iniciar terapia infantil</h4>

              <p><strong>“Es muy pequeño para terapia”</strong><br />La infancia temprana es el mejor momento para intervenir.</p>

              <p><strong>“Si va a terapia, significa que tiene algo grave”</strong><br />Muchas veces la terapia es preventiva.</p>

              <p><strong>“Ya va a madurar solo”</strong><br />Esperar sin apoyo puede dificultar el proceso.</p>

              <p><strong>“La terapia reemplaza el rol de los padres”</strong><br />Los padres son parte fundamental del proceso.</p>

              <p><strong>“Ir a terapia es ponerle una etiqueta”</strong><br />La terapia acompaña, no define al niño.</p>

              <h4>¿Por qué iniciar terapia a tiempo?</h4>

              <ul>
                <li>Favorece el desarrollo integral del niño.</li>
                <li>Previene dificultades futuras.</li>
                <li>Entrega herramientas prácticas a la familia.</li>
                <li>Promueve autonomía, seguridad y bienestar emocional.</li>
              </ul>

              <p>
                Iniciar terapia no significa que algo esté mal, significa que estás observando,
                escuchando y acompañando activamente a tu hijo en su desarrollo.
              </p>

              <p>
                En nuestro centro de terapia infantil estamos comprometidos con el desarrollo integral
                de cada niño y el acompañamiento cercano a sus familias. Consulta por tu sesión de
                orientación.
              </p>
            </div>
          </details>
        </article>

        
       
        {/* BLOG 3 */}
        <article className="blog-card">
          <img src={blog3} alt="Berrinche o Crisis Sensorial" className="blog-image" />

          <h2 className="blog-title">
            ¿Berrinche o Crisis Sensorial? <br />
            <span>La guía para entender qué le pasa a tu hijo</span>
          </h2>

          <p className="blog-summary">
            Imagina que estás en un supermercado. Para ti, es una compra de 10 minutos. Para tu hijo, es un bombardeo: luces fluorescentes que parpadean, el chirrido de las ruedas del carro, el olor intenso de la sección de limpieza y el roce de la etiqueta de su camiseta nueva.
          </p>

          <details className="blog-details">
            <summary className="blog-button">Leer más</summary>

            <div className="blog-content">

              <p>
                Imagina que estás en un supermercado. Para ti, es una compra de 10 minutos. Para tu hijo, es un bombardeo: luces fluorescentes que parpadean, el chirrido de las ruedas del carro, el olor intenso de la sección de limpieza y el roce de la etiqueta de su camiseta nueva.
              </p>

              <p>
                De pronto, explota. Se tira al suelo, grita y no hay negociación que valga. ¿Es un berrinche por un dulce o es su sistema nervioso diciendo "ya no puedo más"?
              </p>

              <h4>La diferencia clave que todo padre debe conocer</h4>

              <p>
                El Berrinche (Conducta): Tiene un objetivo. El niño quiere algo (un juguete, atención, evitar una tarea). Si le das lo que quiere, el berrinche suele detenerse mágicamente. Hay "audiencia": el niño mira para ver si estás reaccionando.
              </p>

              <p>
                La Crisis Sensorial (Desregulación): Es una respuesta involuntaria al estrés. El cerebro recibió más información de la que puede procesar y entra en modo de "lucha o huida". No hay negociación posible porque el niño ha perdido el control total de sus emociones y cuerpo.
              </p>

              <h4>¿Por qué sucede esto?</h4>

              <p>
                Como terapeutas ocupacionales, vemos el cuerpo como una antena. Algunos niños tienen antenas muy sensibles (hipersensibilidad) y sienten el mundo con el volumen al máximo. Otros tienen antenas que captan poco (hiposensibilidad) y necesitan moverse o tocar todo para sentirse "conectados".
              </p>

              <p>
                Cuando el entorno supera la capacidad de procesamiento del niño, ocurre la saturación sensorial. Es como un vaso de agua que se desborda: no importa cuánto le pidas al agua que deje de caer, el vaso ya no tiene espacio.
              </p>

              <h4>📝 Checklist Sensorial: ¿Qué está intentando decirte su cuerpo?</h4>

              <p>Usa esta guía rápida para observar a tu pequeño y entender sus señales:</p>

              <h5>🚩 Señales de Evitación (Hipersensibilidad)</h5>
              <ul>
                <li>[ ] Se tapa los oídos ante ruidos repentinos (licuadora, secador, aplausos).</li>
                <li>[ ] Le molestan las etiquetas de la ropa o las costuras de los calcetines.</li>
                <li>[ ] Evita los juegos "sucios" (arena, pintura de dedos, lodo).</li>
                <li>[ ] Se irrita mucho en lugares con mucha gente o luces muy brillantes.</li>
                <li>[ ] Es muy selectivo con las texturas de la comida (solo come cosas crujientes o solo purés).</li>
              </ul>

              <h5>🚩 Señales de Búsqueda (Hiposensibilidad)</h5>
              <ul>
                <li>[ ] No puede dejar de moverse; parece que tiene un "motor" interno.</li>
                <li>[ ] Choca contra muebles o personas a propósito.</li>
                <li>[ ] Toca todo lo que ve en el supermercado o en la calle.</li>
                <li>[ ] Le gusta el contacto físico fuerte o los abrazos "de oso".</li>
                <li>[ ] No parece notar cuando tiene la cara sucia o la nariz goteando.</li>
              </ul>

              <h4>¿Qué hacer en el momento de la crisis?</h4>

              <ul>
                <li>Reduce el estímulo: Apaga la música, baja la luz o retira al niño del lugar concurrido.</li>
                <li>Menos palabras, más presencia: Un cerebro desregulado no puede procesar sermones. Usa frases cortas: "Estoy aquí", "Estás a salvo".</li>
                <li>Presión profunda: Si tu hijo lo tolera, un abrazo firme o presión en los hombros puede ayudar a su sistema propioceptivo a calmarse.</li>
              </ul>

              <p>
                Conclusión: Entender que no es "rebeldía" sino "sensibilidad" cambia por completo la forma en que conectas con tu hijo. La próxima vez que sientas que el mundo te juzga en el supermercado, recuerda: no eres un mal padre, tienes un hijo que percibe el mundo de forma extraordinaria.
              </p>

            </div>
          </details>
        </article>

        {/* BLOG 4 */}
  
        <article className="blog-card">
          <img src={blog4} alt="Regreso a clases" className="blog-image" />

          <h2 className="blog-title">
            ¿Dificultades en el regreso a clases? <br />
            <span>Cómo la Terapia Ocupacional facilita la transición</span>
          </h2>

          <p className="blog-summary">
            El inicio del año escolar es mucho más que comprar uniformes y útiles nuevos. Para muchos niños y niñas, este periodo representa un desafío significativo para su sistema nervioso.
          </p>

          <details className="blog-details">
            <summary className="blog-button">Leer más</summary>

            <div className="blog-content">

              <p>
                El inicio del año escolar es mucho más que comprar uniformes y útiles nuevos. Para muchos niños y niñas, este periodo representa un desafío significativo para su sistema nervioso: nuevos ruidos, cambios bruscos de rutina, mayor demanda cognitiva y la gestión emocional de estar lejos de casa.
              </p>

              <p>
                Si notas que tu hijo o hija está más irritable de lo normal, presenta dificultades para dormir o se siente abrumado por el entorno escolar, es importante saber que no es "mal comportamiento", sino un proceso de adaptación en curso.
              </p>

              <h4>Aquí te compartimos 3 consejos clave para apoyar esta transición desde casa:</h4>

              <h4>1. Anticipación y Predictibilidad</h4>
              <p>
                El cerebro infantil se siente seguro cuando sabe qué va a pasar. Utiliza apoyos visuales como calendarios o pizarras donde puedan ver la rutina del día. Anticipar que "después de la merienda vamos a hacer la mochila" ayuda a reducir la ansiedad por lo desconocido y facilita las transiciones entre actividades.
              </p>

              <h4>2. Crea una "Dieta Sensorial" de Calma al Volver</h4>
              <p>
                Después de pasar horas en un salón de clases lleno de estímulos (gritos, luces, movimiento), muchos niños llegan a casa en un estado de desregulación. Al volver del colegio, ofrece actividades que bajen la intensidad: un baño tibio, un rincón tranquilo con cojines para leer, o juegos que impliquen presión profunda (como "el juego del sándwich" con mantas). Esto ayuda a reorganizar su sistema sensorial.
              </p>

              <h4>3. Valida la "Fatiga de Contención"</h4>
              <p>
                Es común que los niños se porten "perfecto" en el colegio y exploten al llegar a casa. Esto sucede porque han agotado toda su energía tratando de cumplir con las normas y expectativas escolares. En lugar de corregir la emoción de inmediato, ofrece un espacio de escucha y contención. Una vez que estén regulados, será mucho más fácil conversar sobre lo ocurrido.
              </p>

              <h4>¿Cuándo buscar apoyo profesional?</h4>

              <p>
                A veces, las herramientas en casa no son suficientes para que el niño logre sentirse cómodo y funcional en su entorno escolar. Es aquí donde la Terapia Ocupacional marca la diferencia.
              </p>

              <p>
                Nuestro enfoque se centra en evaluar cómo el niño procesa los estímulos y organiza sus respuestas. A través de la terapia, brindamos estrategias personalizadas de autorregulación, organización del tiempo y adecuaciones sensoriales que transforman el estrés escolar en una experiencia de aprendizaje positiva.
              </p>

            </div>
          </details>
        </article>

        

        
      </div>
    </section>
  );
}
