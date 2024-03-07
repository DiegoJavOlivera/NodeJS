
// De esta forma es de ESMASCRIPT 6 

import { getTitle, getAuthor } from "./functions.js"
import { curso } from "./objects.js"


// Como se usaba legacy forma de exportaciones 
//const { getTitle, getAuthor} = require('./functions')
//const {curso} = require('./objects')

const { nombre, autor} = curso



console.log(getTitle())
console.log(getAuthor('Diego Javier Olivera'))


console.log(nombre)
console.log(autor)



