# Unidad 2, Lección 9: Herencia

En esta lección camos a crear una jerarquía de distintos lados de dados y asignarselos a un `DiceWrapper`, encapsulando y grabando su valor.

## 🐾 Primeros Pasos

### ¿Qué son clases abstractas?

Capáz que hayas visto clases abstractas en otros lenguajes de programación, pero por si no:

Las clases abstractas son usadas para que no se puedan instanciar. Aquí tenemos un ejemplo de una clase abstracta:

```typescript
abstract class Animal {
  constructor(public nombre: string) {}
}
```

Si tratamos de inicializar un `Animal`, TypeScript nos alega:

`Cannot create an instance of an abstract class.`

Y bueno, ahora tenemos una clase que no podemos instanciar. ¿De qué sirve?

### Las clases son súpertipos

Podemos extender nuestra clase `Animal`:

```typescript
class Perro extends Animal {
  ladrar() {
      console.log(`¡Guau guau!`);
  }
}

class Pollito extends Animal {
  twittear() {
      console.log(`¡Pío pío!`);
  }
}
```

### Funciones abstractas

También podemos declarar funciones abstractas dentro de una clase abstracta, lo cual requirere que las subclases las implementen:

```typescript
abstract class Animal {
  constructor(public nombre: string) {}
  abstract comer(comida: string): void;
}
```

¡Se ve bién! Sin embargo, crear una subclase que hereda de `Animal` nos muestra un nuevo error:

`Non-abstract class 'Perro' does not implement inherited abstract member 'comer' from class 'Animal'`.

Esto quiere decir que tenemos que implementar esta función:

```typescript
class Perro extends Animal {
  ladrar() {
    console.log(`¡Guau guau!`);
  }
  comer(comida: string): void {
    console.log(`¡Que rico comer ${comida}!`);
  }
}
```

## ¿Que ha cambiado en esta lección?

¡Ha cambiado bastante el archivo `./src/types/Dice.ts`! En la línea 2, encontrarás una nueva propiedad:

```typescript
die: Die;
```

También verás que cambió el constructor y `value`, y agregamos `dieForValue`:

```typescript
  constructor(sides: number = 6) {
    let value: number = Math.floor(Math.random() * sides) + 1;
    this.sides = sides;
    this.die = this.dieForValue(value);
  }

  value(): number {
    return this.die.value();
  }
  
  private dieForValue(value: number): Die {
    switch (value) {
      case 1:
        return new OneDie();
      case 2:
        return new TwoDie();
      case 3:
        return new ThreeDie();
      case 4:
        return new FourDie();
      case 5:
        return new FiveDie();
      case 6:
        return new SixDie();
      default:
        return new OneDie();
    }
  }
```


## 🥅 Metas

En esta lección, vamos a agregar una clase abstracta llamada `Die` y sus subclases:

- OneDie
- TwiDie
- ThreeDie
- FourDie
- FiveDie
- SixDie

## 🤸 Ejercicios

### 1. Renombrar funciones

Si miramos en `./frontend/src/App.tsx`, podemos ver el nuevo uso esperado del `api`:

```typescript
import { getRequest, postRequest } from './utils/api';

...

  async function fetchPosts() {
    setPosts(await getRequest<Post>("posts"));
  }

  async function submitPost(post: Post) {
    await postRequest<Post>(post, "posts");
    fetchPosts();
  }
```

Podemos ver que usamos, por ejemplo, `getRequest<Post>("posts")`, donde le pasamos lo que parece un endpoint como argumento.

También tenemos `postRequest<Post>(post, "posts")`, que nos permite pasar el post y el mismo endpoint.

En vez de tener `getPost` y `postPost` (con toda sinceridad, `postPost` no es el mejor nombre 😂), usemos estos nuevos variantes.

En `./frontend/src/utils/api.ts`, cambiemos los nombres y firmas de las funciones:

- `getPost` pasa a ser `getRequest` que es genérico `T` y acepta un argumento string `resourceURL`
- `postPost` pasa a ser `postRequest` que es genérico `T` y acepta dos argumentos: un `data` tipo `T` y un string `resourceURL`

Tambíen tendrás que modificar las funcones para que usen el `resourceURL`. 

### 2. Integra el `Sender` en el `Post`

Volvamos a `./src/types/Post.ts`, donde integraremos una propiedad `sender` que reemplazará `name` y `handle`.

### Crédito extra: `axios` genérico

Para hacer nuestras peticiones HTTP, usamos la librería `axios`. Esta también nos permite hacer `get` y `post` con `genéricos`. ¡Cambiémoslos!

## 🤔 Reflexiones

- ¿Podemos usar algo que no sea ni `T` ni `G` en nuestros genéricos?
- ¿Qué tipos de retorno tienen las funciones de `api`?


Objetivo: Usar clases abstractas y herencia.

En `./src/models/Dice.ts`:

```
abstract class Die {
  abstract value(): number;
}

class OneDie extends Die {
  value() {
    return 1;
  }
}
class TwoDie extends Die {
  value() {
    return 2;
  }
}
class ThreeDie extends Die {
  value() {
    return 3;
  }
}
class FourDie extends Die {
  value() {
    return 4;
  }
}
class FiveDie extends Die {
  value() {
    return 5;
  }
}
class SixDie extends Die {
  value() {
    return 6;
  }
}
```

Credito extra: Agregar 7 y 8
