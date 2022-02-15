# Unidad 3, Lección 11: TypeScript Estricto: `noImplicitany`

¡Felicidades! Has terminado la segunda unidad de TypeScript IRL. Ahora verémos la tercera:

## Unidad 3: De una buena a una gran base de código TypeScript

Nuestra última aplicación será de comercio electrónico. ¡Una tienda de dulces! Ya está desarrollada, y puedes agregar dulces al carrito:

![Cáptura de pantalla de la tienda de dulces con chocolates, caramelos y mazapán disponible](https://user-images.githubusercontent.com/656318/154029420-aad5b015-cd28-483d-944f-b84eba885fe1.png)

## 🐾 Primeros Pasos


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

En `./src/models/Marshmallow.ts`:

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
