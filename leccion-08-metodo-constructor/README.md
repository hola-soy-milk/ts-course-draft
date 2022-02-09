Objetivo: Usar constructores de clases

En `./src/models/Dice.ts`:

```
export default class DieWrapper {
+  sides: number;
+
+  constructor(sides: number) {
+    this.sides = sides;
+  }
+
   value(): number {
-    let value: number = Math.floor(Math.random() * 6) + 1;
+    let value: number = Math.floor(Math.random() * this.sides) + 1;
     return value;
   }
 }
 ```
 
# Unidad 2, Lección 08: Constructores

Seguro que ya habrás pasado un buen rato jugando a los dados 😄

Vamos a cambiar nuestro juego un póco para que pueda jugarse con dados distintos números de lados.

## 🐾 Primeros Pasos

Veamos qué es lo que ha cambiado en `./src/App.vue`, específicamente en la línea 7:

```typescript
const roll = () => Array.from({length: 4}, () => new DieWrapper(6));
```

Aquí vemos que le pasamos un 6 a cada nuevo `DieWrapper`! Esté sera la cantidad de lados que tendrá cada dado.

## 🥅 Metas

En esta lección vamos a modificar nuestra clase `DieWrapper` para que acepte una cantidad de lados `sides` y lo ultilice para el máximo valor de tirarlo.

## 🤸 Ejercicios

### 1. La clase `DiceWrapper`

En `./src/types/Dice.ts`, exportaremos una nueva clase llamada `DiceWrapper`.

Tendrá una función llamada `value` que retornará un número [al azar](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random) entre 1 y 6. ¡Tal como un dado de verdad!

Objetivo: Usar clases de TypeScript.

## 🤔 Reflexiones

- ¿Que tipo de retorno tendrá `value()`?
