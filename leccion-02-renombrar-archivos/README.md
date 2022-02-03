# Unidad 1, Lección 2: Renombrar archivos JavaScript a TypeScript

Ahora que instalamos TypeScript, ¡es hora de empezar a usarlo!

TypeScript 

## 🥅 Metas

## 🤔 Reflexiones

- Instalamos TypeScript, ¿pero lo estamos usando?
- ¿Por qué tantos paquetes de `npm`?


Objectivo: Configurar archivos de TypeScript

Renombrar archivos a `.tsx` o a `.ts`:

```
src/App.tsx
src/components/PostForm.tsx
src/components/PostList.tsx
src/index.tsx
src/reportWebVitals.ts
```

Agregar lo siguiente a `tsconfig.json`:

```
  "include": [
    "./src/**/*.ts"
  ],
```
