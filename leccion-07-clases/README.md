# Unidad 2, Lección 07: Clases

¡Felicidades! Has terminado la primera unidad de TypeScript IRL.

![Cáptura de la aplicación de jugar al 21, que muestra los cuatro dados, el valor de ganador, y el botón de tirar los dados de nuevo](https://user-images.githubusercontent.com/656318/152707507-1e6ae41f-d36f-4505-a4df-7d6d2f97dfc1.png)


Objetivo: Usar clases de TypeScript.

En `src/models/Dice.ts`:
```
export default class DieWrapper {
  value(): number {
    let value: number = Math.floor(Math.random() * 6) + 1;
    return value;
  }
}
```
