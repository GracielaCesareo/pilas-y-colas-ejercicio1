var nombres = [];

var nombre = [];
var apellido = [];

nombre.push("Graciela","Ana", "Carlos", "Laura", "Alberto")

apellido.push("Cesareo", "Lopez", "Perez", "Gomez", "Rodriguez")

for(var i = 0; i < nombre.length; i++) {
  nombres.push(nombre[i] + " " + apellido[i]);
}

console.log (nombres);
