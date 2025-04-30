# 🕒 Reloj Mundial con React + Vite

Este proyecto muestra la hora actual en distintas zonas horarias del mundo. Está construido con **React**, usando **Vite** como entorno de desarrollo moderno y **Bootstrap** para el diseño visual.

---

## 🚀 ¿Qué puedes aprender con este proyecto?

- Cómo crear componentes en React (`Clock`, `TimeZoneSelector`, `App`).
- Cómo usar los hooks `useState` y `useEffect`.
- Cómo pasar información entre componentes con props.
- Cómo dar estilo con Bootstrap desde el principio en cada componente.
- Cómo trabajar con zonas horarias usando la API de internacionalización (`Intl`).

---

## 🔧 Requisitos previos

- Tener instalado **Node.js** (versión 16 o superior recomendada).
- Tener acceso a una terminal o consola de comandos.

---

## 📦 Instalación

1. Clona este repositorio o descarga los archivos del proyecto.

2. Abre una terminal dentro de la carpeta del proyecto.

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre tu navegador y entra en:

```
http://localhost:5173
```

---

## 🗂 Estructura del proyecto

```
/src
├── /components
│   ├── Clock.jsx             # Componente que muestra la hora y fecha en la zona horaria actual
│   └── TimeZoneSelector.jsx # Selector para cambiar la zona horaria
├── App.jsx                   # Componente principal que une los anteriores
├── main.jsx                  # Punto de entrada de la aplicación
```

---

## 🎨 Estilos

Este proyecto usa **Bootstrap 5** para aplicar estilos de forma rápida y consistente.

### Instalación de Bootstrap

```bash
npm install bootstrap
```

### Importación en el proyecto

Importa los estilos al inicio de `src/main.jsx`:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

---

## 🌍 Zonas horarias

Se utilizan zonas horarias estándar del sistema IANA (como `Europe/Madrid`, `America/New_York`, etc.), compatibles con la API `toLocaleTimeString` de JavaScript.

Más info:  
🔗 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

---

## 📜 Licencia

Este proyecto es de uso educativo y libre. Puedes adaptarlo y ampliarlo para tus propias prácticas o clases.
