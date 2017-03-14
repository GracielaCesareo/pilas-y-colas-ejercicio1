var nombres = [];

  var nombre = [];
  var apellido = [];

  nombre.push("Graciela", "Ana", "Carlos", "Laura", "Alberto");
  apellido.push("Cesareo", "Lopez", "Perez", "Gomez", "García");

  for (var i = nombre.length - 1 ; i >= 0; i --){
    nombres.push(nombre[i] + " " + apellido[i]);
  }

  console.log(nombres);
