# Unidad 2, Lección 07: Clases

¡Felicidades! Has terminado la primera unidad de TypeScript IRL. Ahora verémos la segunda:

## Unidad 2: Continuar desarrollando una aplicacíon TypeScript existente

Nuestra aplicación esta vez es un juego de dados. Si te sale menos de 21, ¡ganaste! 

![Cáptura de la aplicación de jugar al 21, que muestra los cuatro dados, el valor de ganador, y el botón de tirar los dados de nuevo](https://user-images.githubusercontent.com/656318/152707507-1e6ae41f-d36f-4505-a4df-7d6d2f97dfc1.png)

> Ojo: Esta app está escrita con [Vue.js](https://vuejs.org/). Tal como en la primera unidad, no necesario completamente conocer Vue para completar este workshop. ¡Te guiaremos por todo lo necesario para triunfar!

## 🐾 Primeros Pasos

Igual que en la primera unidad, puedes echar a andar al app con los siguientes comandos:

    $ npm install
    $ npm run dev
    
Sin embargo, al tratar de abrir `http://localhost:3000`, ¡verás que nuestra app no funciona!


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
