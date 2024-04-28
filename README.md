## Registrar
Registrar una cita con 

```
node index.js registrar <nombre> <edad> <tipo> <color> <enfermedad>
```

Por ejemplo `node index.js registrar Sombra 7 Perro Negro Tos`

## Leer
Para ver las citas existentes utiliza

```
node index.js leer
```

Esto mostrará en terminal las citas como objetos de JavaScript.
Por ejemplo:

```
{
  nombre: 'Sombra',
  edad: '7',
  tipo: 'Perro',
  color: 'Negro',
  enfermedad: 'Tos'
}
```