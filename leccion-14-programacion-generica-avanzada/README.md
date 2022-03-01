# Unidad 3, Lección 14: Genéricos avanzados

¡Hemos llegado a la última lección! Que viaje.

Con esto, el último perfeccionamiento que me gustaría proponer es separar la conección fuerte entre un `ShoppingCart` y la clase `Candy`.

## 🐾 Primeros Pasos

### ¿Pero por qué?

¡Es ciertamente una buena pregunta! Por el momento, todo lo que vendemos en nuestra tienda de dulces son... ¡dulces!

¿Pero qué pasa si, digamos, en un par de meses nos va tan bien con nuestra tienda que quieremos vender otras cosas?

En este caso, ¡nuestro `ShoppingCart` ya no sirve tan bién! Por eso, vamos a generalisarlo con genéricos.

### ¿Qué ha cambiado en esta lección?

Lo más importante es que ahora tenemos una clase `./src/types/CartItemType.ts`:

```typescript
export default abstract class CartItemType {
    abstract priceCents(): number;
    abstract name(): string;
}
```

## 🥅 Metas

En esta lección, vamos a usar genéricos con `ShoppingCart` para que sea cualquier tipo `CartItemType`.

## 🤸 Ejercicios

### 1. `ShoppingCart` con genérico subclase de `CartItemType`.

En `./src/types/ShoppingCart.ts`, podemos definir una clase con genérico del siguiente modo:

```typescript
class Array<T> {
    items?: T[]
}
```

`T` puede tambien ser subclase de otra clase:

```typescript
<T extends OtherClass>
```

¡Hagamos lo mismo para `CartItemType`!

### 2. Reemplazar `Candy` con `T`

En `./src/types/ShoppingCart.ts`, reemplacemos todas las instancias de `Candy` con `T`, así asegurando que `ShoppingCart` es genérico. 

Elimina el import de Candy.

### 3. Integrar en la aplicación Svelte

En `./src/App.svelte`, en la línea 6, cambiemos nuestro cart a que sea con el genérico y que use `Candy`.

### 4. Integrar en las pruebas

En `./src/types/__tests__/ShoppingCart.ts`, cambiemos nuestros carts a que sean con el genérico y que use `Candy`.

## 🤔 Reflecciones
