# Unidad 3, Lección 12: `strictNullChecks`

¡A la próxima! En esta lección activaremos el próximo modo estricto: `strictNullChecks`.

## 🐾 Primeros Pasos

### ¿Qué hace `strictNullChecks`?

Esta regla no permite tener inferencia de tipos. Por ejemplo:

```typescript
const porDos = (numero) => numero * 2;

console.log(porDos(4));
```

Este código no se compilará con el error:

```bash
Parameter 'numero' implicitly has an 'any' type.
```

## 🥅 Metas

En esta lección vamos a modificar nuestra clase `DieWrapper` para que acepte una cantidad de lados `sides` y lo ultilice para el máximo valor de tirarlo.

## 🤸 Ejercicios

### 1. La propiedad `sides`

Una clase puede tener propiedades tal como en JavaScript:

```typescript
class Perro {
   nombre: string;
   
   constructor(nombre: string) {
      this.nombre = nombre;
   }
}
```

Agreguémosle una propiedad a `DiceWrapper` llamada `sides` que será del tipo `number`.

### 2. Adaptar la función `value`

El la lección anterior habíamos programado nuestro `DiceWrapper` a que tirase un numero entre 1 y 6 al azar en `value`. Ahora lo vamos a adaptar a ser entre 1 y el número de lados usando la palabra clave `this`.

### Crédito extra: Propiedad privada

En clases de TypeScript, podemos tener propiedades públicas y privadas usando las palabras claves `public` y `private. Volvámos a nuestro ejemplo de la clase `Perro`:

```typescript
class Perro {
   nombre: string;
   
   constructor(nombre: string) {
      this.nombre = nombre;
   }
}
```

Cambiémosla para que nombre sea una propiedad pública:

```typescript
class Perro {
   constructor(public nombre: string) {}
}
```

Este es equivalente al anterior. 

¡Se puede hacer con elementos privados tambien! 

Tratemos de cambiar la propiedad `sides` de la clase `DiceWrapper` a ser privada.

## 🤔 Reflexiones

- ¿Qué beneficio hay en que una propiedad sea pública?


Objetivo: Hacer pasar los strict null checks

Verificar: 

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

En `./src/models/ShoppingCart.ts`:

```
     groupedItems() {
-        return Object.values(this.items.reduce((cartItem, item) => {
-            cartItem[item.name()] = cartItem[item.name()] || {
-                name: item.name(),
-                quantity: 0,
-                priceCents: item.priceCents()
-            };
-            cartItem[item.name()].quantity += 1;
-            cartItem[item.name()].priceCents += item.priceCents();
-            return cartItem;
-        }, {}));
+        if (this.items) {
+            return Object.values(this.items.reduce((cartItem, item) => {
+                cartItem[item.name()] = cartItem[item.name()] || {
+                    name: item.name(),
+                    quantity: 0,
+                    priceCents: item.priceCents()
+                };
+                cartItem[item.name()].quantity += 1;
+                cartItem[item.name()].priceCents += item.priceCents();
+                return cartItem;
+            }, {}));
+        } else {
+            return [];
+        }
     }

     numberOfItems() {
-        return this.items.length;
+        return this.items ? this.items.length : 0;
     }

     total() {
-        return this.items.reduce((x, y) => x + y.priceCents(), 0);
+        if (this.items) {
+            return this.items.reduce((x, y) => x + y.priceCents(), 0);
+        } else {
+            return 0;
+        }
     }
 }
```
