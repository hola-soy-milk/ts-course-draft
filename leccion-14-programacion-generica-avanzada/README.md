Objetivo: Eliminar el uso del tipo Candy del ShoppingCart

Verificar: 

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

Agregar `./src/models/CartItemType.ts`:

```
export default abstract class CartItemType {
    abstract priceCents(): number;
    abstract name(): string;
}
```

En `./src/App.svelte`:

```
-       let cart = new shoppingcart;
+       let cart = new shoppingcart<marshmallow>();
```

En `./src/models/Candy.ts`:

```
-export abstract class Candy {
-    abstract priceCents(): number;
-    abstract name(): string;
-}
+import CartItemType from "./CartItemType";
+
+export abstract class Candy extends CartItemType {}
```

En `./src/models/ShoppingCart.ts`:

```
-import type { Candy } from "./Candy";
+import type CartItemType from "./CartItemType";

 export interface GroupedCartItem {
     name: string,
@@ -6,14 +6,14 @@ export interface GroupedCartItem {
     quantity: number
 }

-export class ShoppingCart {
-    items?: Candy[];
+export class ShoppingCart<T extends CartItemType> {
+    items?: T[];

     constructor() {
         this.items = [];
     }

-    addItem(item: Candy) {
+    addItem(item: T) {
         if (this.items !== undefined) {
             this.items = [...this.items, item]
         }
@@ -22,7 +22,7 @@ export class ShoppingCart {

     groupedItems() {
         if (this.items) {
-            return this.items.reduce((cartItems: GroupedCartItem[], item: Candy) => {
+            return this.items.reduce((cartItems: GroupedCartItem[], item: T) => {
                 let cartItem: GroupedCartItem | undefined = cartItems.find(e => e.name === item.name());
                 if (!cartItem) {
                     cartItem = {
```

En `.src/models/__tests__/ShoppingCart.test.ts`:

```
 test("New cart has no items and 0 total", () => {
-  const cart = new ShoppingCart();
+  const cart = new ShoppingCart<Candy>();
   expect(cart.total()).toBe(0);
   expect(cart.items).toEqual([]);
 });

 test("Adding item to cart successfully", () => {
-  const cart = new ShoppingCart();
+  const cart = new ShoppingCart<Candy>();
   const bigCandy = new Big()
   const updatedCart = cart.addItem(bigCandy);
   expect(Object.getPrototypeOf(updatedCart.items![0].constructor).name).toEqual(Candy.name);
@@ -25,7 +25,7 @@ test("Adding item to cart successfully", () => {
 });

 test("Cart with item adds to total", () => {
-  const cart = new ShoppingCart();
+  const cart = new ShoppingCart<Candy>();
   cart.addItem({
     priceCents: () => 100,
     name: () => "Big marshmallow"
```