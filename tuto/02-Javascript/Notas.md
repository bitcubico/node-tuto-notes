# Notas del refuerzo de Javascript

## Declaración de variables **let** vs **var**
1. Las variables declaradas con "*var*" puden ser redefinidas o redeclaradas en cualquier parte del código, mientras que las variables declaradas con "*let*" solo pueden ser declaradas una sola vez. Ejemplo.\
   **-------- var**\
   **`var nombre = 'Mauricio Montoya';`**\
   **`if(true) { var nombre = 'Mauricio Medrano'; }`**\
   **`var nombre = 'Mauricio Medrano';`**\
   **`console.log(nombre);`**\
   **`-------- Response:`**\
   **`Mauricio Medrano`**\
   **-------- let**\
   **`let nombre = 'Mauricio Montoya';`**\
   **`if(true) { let nombre = 'Mauricio Medrano'; }`**\
   **`let nombre = 'Mauricio Medrano';`**\
   **`console.log(nombre);`**\
   **`-------- Response:`**\
   **`Error`**\
   Se genera el error por la asignación qu ese da por fuera del "*if*", si eliminamos esta asignación, no se genera un error aun teniendo la declaración de esta en el "*if*" porque estaría en otro ámbito, por lo tanto se apunta a otra dirección en memoria
2. La declaración con "*let*" se puede dar en varias partes siempre y cuando estén en ámbitos diferentes
   **-------- let**\
   **`let nombre = 'Mauricio Montoya';`**\
   **`if(true) { let nombre = 'Mauricio Medrano'; }`**\
   **`let nombre = 'Mauricio Medrano';`**\
   **`-------- Response:`**\
   **`Mauricio Montoya`**\
   **-------- let**\
   **`let nombre = 'Mauricio Montoya';`**\
   **`if(true) { let nombre = 'Mauricio Medrano'; }`**\
   **`nombre = 'Mauricio Medrano';`**\
   **`console.log(nombre);`**\
   **`-------- Response:`**\
   **`Mauricio Medrano`**