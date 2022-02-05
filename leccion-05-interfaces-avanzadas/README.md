# Unidad 1, Lección 5: Interfaces Avanzadas

## 🐾 Primeros Pasos

En `./src/App.tsx` verás un cambio de estructura en un `Post` en la línea 15: 

```typescript
setPosts([{
      id: posts.length + 1,
      sender: {
        id: posts.length + 1,
        name: "Ramón",
        handle: "hola_soy_milk",
      },
      body: "Eres genial!",
      timestamp: new Date,
    }]);
```

Ahora un `Post` consiste de una propiedad `sender`!

## 🥅 Metas

En esta lección, vamos a:
- Crear una nueva interfaz llamada `Sender`
- Integrarla en un `Post`

## 🤸 Ejercicios

### 1. Nueva función de utilidad

En `./src/components/PostList.tsx`, en la línea 3, importamos la función `formatPostTimestamp`:

```typescript
import formatPostTimestamp from '../utils/formatters'
```

Y la usamos en la línea 11:

```typescript
<p className="small right">{formatPostTimestamp(post)}</p>
```

Agreguemos en el nuevo archivo `./src/utils/formatters.ts`. Tendrá una función formatPostTimestamp:

- Toma como argumento un `post` de tipo `Post`
- Retorna un `Date` formatteado: `return new Date(post.timestamp).toLocaleString("es");`

### 3. Darle tipos a los argumentos de la función anónima

Volvamos a `./src/components/PostList.tsx`, donde encontraremos una función anónima en la linea 7:

```typescript
let rows = posts.map((post, index) => {
```

¡Introduzcamos tipos para los argumentos!

### Crédito extra: Prop Types

En la línea 5, definimos nuestro componente con propiedades como un objeto:

```typescript
function PostList({posts) {
```

Extraigamos un interfaz local para los `Props` que tengan como propediad un arreglo de `posts`.

## 🤔 Reflexiones

- ¿Qué tipo de retorno tendrá `formatPostTimestamp`?

Objetivo: Interfazes avanzadas

Nuevo model: Sender `/src/models/Sender.ts`

```
export default interface Sender {
    id: number,
    name: string,
    handle: string
}
```
