# Unidad 1, Lección 4: Funciones

Ahora le agregaremos tipos a nuestras funciones en TypeScript!

Tal como podemos declarar variables con tipos, lo mismo se puede hacer con funciones.

## 🐾 Primeros Pasos

Cáda parametro de una función puede definirse con un tipo. Por ejemplo:

```typescript
const publicarAdicion = (x: number, y: number) => {
    console.log(x + y);
};
```

No sólo eso, pero también permiten definir un tipo de retorno, y con esto asegurar que la función nos da lo que dice:

```typescript
const adicion = (x: number, y: number): number => x + y;
```

Pero

## 🥅 Metas

En esta lección vamos a declarar y ultilizar nuestra primera interfaz.

## 🤸 Ejercicios

### 1. Un nuevo tipo

En `./src/App.tsx` veremos que importamos un nuevo archivo en la línea 5:

```typescript
import Post from './types/Post';
```

¡Nuestro primer paso será crear este nuevo archivo `./src/types/Post.ts`!

### 2. Exportar nuestra interfaz `Post`

Igual que con modulos ES6, con TypeScript podemos exportar definiciones, incluyendo interfaces.

Exportemos una interfaz llamada Post, con las siguentes propiedades:

- `id`: El número de identificación del `Post`
- `name`: El nombre del usuario
- `handle`: El apodo del usuario
- `timestamp`: La hora y fecha en que se creó el `Post`

### Crédito extra: Tipos para las propiedades

Bueno ahora que ya tenemos nuestra interfaz con sus propiedades, ¿por qué no le agregamos definiciones de tipos a sus propiedades?

Echémosle un vistazo a `./src/App.tsx`, en la línea 23:

```typescript
setPosts([{
    id: posts.length + 1,
    name: "Ramón",
    handle: "hola_soy_milk",
    body: "Eres genial!",
    timestamp: new Date,
}]);
```

Esto nos ayuda a deducir que tipos tendrán las propiedades. 🤔

## 🤔 Reflexiones

- ¿Por qué es que podemos declarar las propiedades del interfaz sín añadirles tipos?



Objectivo: ultilizar tipos dentro de funciones.

Cambiar PostList.tsx:

```
-  let rows = posts.map((post, index) => {
+  let rows = posts.map((post: Post, index: number) => {
```

Ojo con la lina 16, nuevo helper!

Agregar funcion, nuevo archivo `./src/utils/formatters.ts`:

```
import Post from "../models/Post";
export let formatPostTimestamp = (post: Post) => {
  return new Date(post.timestamp).toLocaleString("es");
};
```
