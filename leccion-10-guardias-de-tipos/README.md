Objetivo: Usar guard clauses para proteger codigo inestable

En `./src/models/Dice.ts`:

```
   value(): number {
-    return this.die.value();
+    if (this.die instanceof Die) {
+      return this.die.value();
+    }
+    return 0;
   }
```

Credito extra: Multiple types

```
       case 8:
         return new EightDie();
       default:
-        return new OneDie();
+        return undefined;
     }
   }
 }
```

# Unidad 2, Lección 10: Guardias de Tipos

¡A continuación, vamos a agregarle aún más seguridad a nuestra aplicación!

Vamos a aprender sobre propiedades opcionales, tipos unión e intersección, y guardias de tipos.

## 🐾 Primeros Pasos

### ¿Qué son propiedades opcionales?

TypeScript nos permite declarar propiedades que posiblemente no existan al inicializarse. Por ejemplo, en nuestra clase `Persona`:

```typescript
class Persona {
   nombre: string;
   edad?: number;
}
```

Aquí podemos ver que la clase tiene una propiedad `nombre`, pero la de `edad` tiene un signo de interrogación. 

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

### 1. Declarar clase abstracta

En `./src/types/Dice.ts`, debajo de la clase `DiceWrapper`, agrega la clase abstracta `Die` con función abstracta `value` que retorna un `number`.

### 2. Las subclases de `Die`

Agrega las seis subclases que mencionamos antes, cada una con una implementación de `value()` que retorna un valor correspondiente al número.

### Credito extra

Agrega `SevenDie` y `EightDie`. ¿Qué nos falta para poder usarlos?
