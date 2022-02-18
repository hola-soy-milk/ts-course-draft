# Unidad 3, Lección 11: TypeScript Estricto: `noImplicitany`

¡Felicidades! Has terminado la segunda unidad de TypeScript IRL. Ahora verémos la tercera:

## Unidad 3: De una buena a una gran base de código TypeScript

Nuestra última aplicación será de comercio electrónico. ¡Una tienda de dulces! Ya está desarrollada, y puedes agregar dulces al carrito:

![Cáptura de pantalla de la tienda de dulces con chocolates, caramelos y mazapán disponible](https://user-images.githubusercontent.com/656318/154029420-aad5b015-cd28-483d-944f-b84eba885fe1.png)

La tienda de dulces ya esta finalizada y desarrollada, y en esta unidad vamos a activar distintos modos estrictos de TypeScript y mejorar nuestro código.

> Ojo: Esta app está escrita con [Svelte](https://svelte.dev/), un framework de frontend. Tal como en la primera y segunda unidad, no es necesario completamente conocer Svelte para completar este workshop. ¡Te guiaremos por todo lo necesario para triunfar!

## 🐾 Primeros Pasos

### Un tour de la tienda de dulces

Esta aplicación tiene 2 componentes principales:

- `./src/components/Menu.svelte`: Donde se muestran botones para seleccionar entre los dulces disponibles
- `./src/components/Cart.svelte`: Una tabla de los 

### Modo Estricto

Capaz que conozcas el [modo estricto de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode), pero el modo estricto de TypeScript es distinto.

Los modos estrictos de TypeScript (¡así es, hay más de uno!) son configuraciones que se pasan al compilador. Estas configuraciones, como las otras de TypeScript, se definen en `tsconfig.json`. 

Si echamos una mirada en nuestro `tsconfig.json`, lo veremos dentro de `compilerOptions`: 

```json
  "compilerOptions": {
    "noImplicitAny": true
  }
```

Aquí tenemos `noImplicitAny` activado. Este es uno de los varios modos estrictos de TypeScript. Existen más:

- [`noImplicitAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny)
- [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#noImplicitAny)
- [`strictFunctionTypes`](https://www.typescriptlang.org/tsconfig#strictFunctionTypes)
- [`strictBindCallApply`](https://www.typescriptlang.org/tsconfig#strictBindCallApply)
- [`strictPropertyInitialization`](https://www.typescriptlang.org/tsconfig#strictPropertyInitialization)
- [`noImplicitThis`](https://www.typescriptlang.org/tsconfig#noImplicitThis)
- [`alwaysStrict`](https://www.typescriptlang.org/tsconfig#alwaysStrict)

Por cierto, si quieres activar todos estos ☝️, puedes activar `strict` así no mas:

```json
  "compilerOptions": {
    "strict": true
  }
```

Activar estos modos en tu aplicación causará que la compilación te avise si ciertas de estas reglas no se cumple.

En esta unidad, vamos a activar un par de estas reglas e ir arreglando el código en ese ritmo.

### ¿Pero por qué hacer esto, que tiene de conveniente?

A medida que iremos activando estas reglas, veremos que el código se irá mejorando en el sentido de seguridad de tipos y legibilidad del código. 

Iremos encontrando problemitas con lo que tenemos en la base corriente y eliminándolos con los modos estrictos.


Objetivo: Resolver el error "no implicit any's allowed"

Verificar: 

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

En `./src/models/ShoppingCart.ts`:

```
-       const addCartItem = (item) => {
+       const addCartItem = (item: any) => {
```

En `./src/components/Cart.svelte`:

```
-  export let items;
-  export let amount;
-  export let total;
+  export let items: any[];
+  export let amount: any;
+  export let total: any;
```

En `./src/components/Menu.svelte`:

```
-  export let addCartItem;
+  export let addCartItem: any;
```

En `./src/models/Candy.ts`:

```
-    abstract priceCents();
-    abstract name();
+    abstract priceCents(): any;
+    abstract name(): any;
```

En `./src/models/ShoppingCart.ts`:

```
-    items?;
+    items?: any[];

     constructor() {
         this.items = [];
     }

-    addItem(item) {
+    addItem(item: any) {
```
