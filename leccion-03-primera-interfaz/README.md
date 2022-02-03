# Unidad 1, Lección 3: Primera Interfaz

Y ahora, ¡empezemos a escribir TypeScript!

Una de las características más importantes que agrega TypeScript es el uso de tipos.

## 🐾 Primeros Pasos

Digamos que tenemos un tipo que se llama `type`. Podemos declarar una variable y decirle a TypeScript que este variable sólo puede tener este tipo. Por ejemplo:

```typescript
let nombre: string = "Fernanda";
```

Esta declaración, a pesar de que no parece que haga mucho, le dice al compilador de TypeScript que el variable `nombre` sólamente podra ser un `string`, y fallará si le asignamos otro tipo.

### Tipos Primitivos

Estos se verán familiares:

- `number`
- `string`
- `boolean` 

### Arreglos

Existen dos maneras de declarar un Arreglo:

```typescript
const array1: number[] = [1, 2, 3];
const array2: Array<number> = [4, 5, 6];
```

El segundo modo es algo que cubriremos en detalle cuando hablemos de tipos genéricos.

### `any`

`any` es un tipo especial que le indica a TypeScript que no nos importa que tipo tenga un variable.

Si no le damos un tipo a un variable a una variable, TypeScript asume automáticamente que es `any`. Esto se llama un "Implicit Any". Por ejemplo, las siguientes dos declaraciones hacen lo mismo:

```typescript
// Explicit Any
let valor: any = { nombre: "Estéban" };

// Implicit Any
let valor = { nombre: "Estéban" };
```

### Tipos Únicos

Si necesitamos declarar objectos con una estructura mas compleja que las anteriores, TypeScript nos proporciona herramientas para poder definir nuestras propias

### Interfaces

Las interfaces nos permiten declarar la estructura al cual deberá conformar un objeto. Declaremos un interfaz para `Mascota`, por ejemplo:

```typescript
interface Mascota {
    nombre: string,
    edad: number,
    vuela: boolean,
    amistades: Mascota[]
}

let perro = {
    nombre: "Fred",
    edad: 15,
    vuela: false,
    amistades: []
};

let gato = {
    nombre: "Calcetines",
    edad: 13,
    vuela: true,
    amistades: [perro]
}
```

## 🥅 Metas

En esta lección vamos a declarar y ultilizar nuestra primera interfaz.

## 🤸 Ejercicios

### 1. Renombrar archivos `.js` a `.ts`

Debido a que TypeScript es un superconjunto de JavaScript, no nos afectará cambiar las extensiones de los archivos.

### 2. Renombrar archivos `.jsx` a `.tsx`

Si no conoces `JSX`, ¡no te preocupes! Son archivos especiales que se usan a menudo con React. No es requisito conocer JSX para este curso. 

> ¡Por cierto, recomiendo el [curso de Matías para aprender React](https://www.escuelafrontend.com/react)!

### 3. Generar `tsconfig.json`

Al instalar el paquete de TypeScript, nos da acceso a la herramienta CLI `tsc`. La podemos usar para generar el archivo de configuración:

    $ ./node_modules/.bin/tsc --init
    
Este creará el archivo `tsconfig.json`. Cambiémoslo para que el modo estricto no esté activado. En la línea 77:

```json
    "strict": false, 
```

Nuestra última tarea será activar el modo react para la configuración. Agreguemos esta linea dentro de `"compilerOptions"`:

```json
    "jsx": "react",
```

## 🤔 Reflexiones

- ¿Cómo es que podemos agarrar JS existente y usarlo en archivos TS? 
- ¿Qué pasa si cambiamos el modo estricto de vuelta a `true`?


Objectivo: Agregar primera interfaz.

Nuevo archivo: src/models/Post.ts
```
export default interface Post {
  id: number;
  name: string;
  handle: string;
  body: string;
  timestamp: Date;
}
```
