class Usuarios {


    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {

        let persona = {
            id,
            nombre,
            sala
        };

        this.personas.push(persona);
        return this.personas;
    }

    getPersona(id) {
            let persona = this.personas.filter(per => { //estamos usando filter para buscar el id en el arreglo
                return per.id === id
            })[0]; //la funcion filter regresa un nuevo arreglo por eso guardamos la primera posicion

            return persona;

        }
        //obtener todas las personas 
    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {

        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala
        })

        return personasEnSala;


    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(per => {
            return per.id != id
        })

        return personaBorrada;
    }

}



module.exports = {
    Usuarios
}