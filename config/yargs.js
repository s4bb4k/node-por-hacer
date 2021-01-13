const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs/yargs')(process.argv.slice(2))
    .command('crear', 'Crea un elemento por hacer' , {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea' , {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento por hacer' , {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
