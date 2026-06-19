# Simulador Interactivo para la Visualización de Cambios de Variable en Integrales

Este repositorio aloja el desarrollo del prototipo funcional y demostrativo diseñado para la visualización secuencial, paso a paso, del método de integración por sustitución (cambio de variable). El objetivo fundamental de este software es mitigar la brecha existente entre la enseñanza puramente algorítmica y la comprensión visual-geométrica del cálculo integral en la educación superior.
## 📸 Vista previa del diseño

![Captura del Login](./icon_curvolve.png)

## 🎯 Propósito del Proyecto

El simulador actúa como una herramienta pedagógica interactiva que reduce la carga cognitiva asociada a la abstracción matemática. A diferencia de softwares de carácter general (como GeoGebra o Wolfram Alpha), este sistema está estructurado específicamente en torno a la técnica de sustitución, permitiendo al estudiante explorar dinámicamente cómo se transforma una integral compleja en una expresión equivalente más simple.

---

## 🏛️ Arquitectura del Sistema (Módulos Base)

Para garantizar un desarrollo óptimo, eficaz y modular (atendiendo a principios de algoritmos estructurados), el proyecto se divide en las siguientes capas de abstracción:

1. **Capa de Interfaz Gráfica (`src/gui/`):** * Responsable de la usabilidad, claridad visual y navegación intuitiva.
   * Proporciona los contenedores, botones de control de flujo (Avanzar/Retroceder paso) y los campos de entrada de datos.
2. **Capa de Lógica Matemática (`src/core/`):**
   * Contiene los algoritmos estructurados que procesan la expresión matemática.
   * Desglosa de forma analítica los componentes de la integral para aislar la función candidata, calcular su derivada y reconstruir la nueva integral en términos de la nueva variable.
3. **Capa de Retroalimentación e Interacción (`src/utils/`):**
   * Gestiona la validación de entradas en tiempo real y el despliegue de mensajes o alertas dinámicas cuando el usuario comete un error procedimental.

---

## 📊 Cobertura de Variables de Investigación

El desarrollo de este prototipo técnico responde directamente a la matriz de operacionalización del estudio, cubriendo las siguientes dimensiones e indicadores:

### 1. Interfaz Gráfica Educativa (Variable Independiente)
* **Usabilidad:** Diseño con un entorno limpio, intuitivo y con una curva de aprendizaje mínima para el estudiante.
* **Representación Visual de Procedimientos:** Desglose secuencial y cronológico de la técnica de sustitución en lugar de lanzar un resultado directo y automático.
* **Retroalimentación Interactiva:** Capacidad del sistema para guiar al usuario en la toma de decisiones (como elegir la sustitución adecuada) y ofrecer respuestas correctivas inmediatas.

### 2. Comprensión del Cambio de Variable (Variable Dependiente)
* **Comprensión Conceptual:** Ayuda al estudiante a identificar la función interna idónea para la sustitución ($u$), visualizar la transformación del diferencial ($du$) y comprender el cambio en los límites de integración si la integral es definida.
* **Desempeño Procedimental:** Muestra la precisión algebraica de cada paso intermedio, permitiendo al alumno verificar su propio razonamiento analítico mediante la diferenciación interna del software.

---

## 🛠️ Flujo Lógico de la Simulación (Paso a Paso)

El prototipo ejecuta de manera controlada y didáctica la siguiente secuencia lógica para los modelos integrales predefinidos:

```
[ Entrada de la Integral ] ──> [ Paso 1: Identificación de 'u' ]
                                            │
                                            v
[ Integral Evaluada en 'u' ] <── [ Paso 2: Cálculo del Diferencial 'du' ]
             │
             v
[ Paso 3: Sustitución Final y Solución ]
```

1. **Fase de Diagnóstico/Selección:** El usuario interactúa con la interfaz eligiendo o ingresando la expresión a resolver.
2. **Aislamiento de la Función Interna:** El sistema resalta visualmente cuál es la sección de la función compuesta que debe ser sustituida por la variable auxiliar $u$.
3. **Cálculo de la Derivada:** Se muestra explícitamente el proceso de obtención de $du = u' \, dx$, ayudando a entender la compensación de constantes algebraicas.
4. **Reconstrucción e Integración:** Se presenta la nueva estructura simplificada $\int f(u) \, du$, lista para ser resuelta de manera directa.

---

## 🚀 Requisitos para la Ejecución del Prototipo

* **Entorno de Desarrollo:** [Visual Studio, vs code, netbeans, Xamp]
* **Lenguaje base:** [JDK 25, Pyton 3.13. html, css, javaScrip,SQL ]
* **Dependencias de Renderizado:** Componentes nativos de interfaz gráfica para asegurar ligereza y portabilidad del ejecutable.
