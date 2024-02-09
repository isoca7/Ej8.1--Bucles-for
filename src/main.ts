type Especialidad = 'Medico de familia' | 'Pediatra' | 'Cardiólogo'

interface Pacientes {
  id: number
  nombre: string
  apellidos: string
  sexo: string
  temperatura: number
  frecuenciaCardiaca: number
  especialidad: Especialidad
  edad: number
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: 'John',
    apellidos: 'Doe',
    sexo: 'Male',
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: 'Medico de familia',
    edad: 44,
  },
  {
    id: 2,
    nombre: 'Jane',
    apellidos: 'Doe',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: 'Medico de familia',
    edad: 43,
  },
  {
    id: 3,
    nombre: 'Junior',
    apellidos: 'Doe',
    sexo: 'Male',
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: 'Pediatra',
    edad: 8,
  },
  {
    id: 4,
    nombre: 'Mary',
    apellidos: 'Wien',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: 'Medico de familia',
    edad: 20,
  },
  {
    id: 5,
    nombre: 'Scarlett',
    apellidos: 'Somez',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: 'Cardiólogo',
    edad: 30,
  },
  {
    id: 6,
    nombre: 'Brian',
    apellidos: 'Kid',
    sexo: 'Male',
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: 'Pediatra',
    edad: 11,
  },
]

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let resultado: Pacientes[] = []
  for (let contador = 0; contador < pacientes.length; contador++) {
    if (pacientes[contador].especialidad === 'Pediatra') {
      resultado.push(pacientes[contador])
    }
  }

  return resultado
}

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let resultado: Pacientes[] = []
  for (let contador = 0; contador < pacientes.length; contador++) {
    if (
      pacientes[contador].especialidad === 'Pediatra' &&
      pacientes[contador].edad < 10
    )
      resultado.push(pacientes[contador])
  }
  return resultado
}

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false
  for (let contador = 0; contador < pacientes.length; contador++) {
    if (pacientes[contador].frecuenciaCardiaca > 100) {
      activarProctolo = true
    }
  }
  return activarProctolo
}

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let resultado: Pacientes[] = [...pacientes]
  for (let contador = 0; contador < pacientes.length; contador++) {
    if (pacientes[contador].especialidad === 'Pediatra') {
      pacientes[contador].especialidad = 'Medico de familia'
    }
  }
  return resultado
}

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let sePuedeIrACasa = false
  for (let contador = 0; contador < pacientes.length; contador++) {
    if (pacientes[contador].especialidad !== 'Pediatra') {
      sePuedeIrACasa = true
    }
  }
  return sePuedeIrACasa
}

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number
  pediatria: number
  cardiologia: number
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let cardiologos: number = 0
  let pediatras: number = 0
  let medicosFamilia: number = 0
  for (let contador = 0; contador < pacientes.length; contador++) {
    if (pacientes[contador].especialidad === 'Cardiólogo') {
      cardiologos++
    }
    if (pacientes[contador].especialidad === 'Pediatra') {
      pediatras++
    }
    if (pacientes[contador].especialidad === 'Medico de familia') {
      medicosFamilia++
    }
  }
  let resultado: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: medicosFamilia,
    pediatria: pediatras,
    cardiologia: cardiologos,
  }
  return resultado
}

console.log(obtenPacientesAsignadosAPediatria(pacientes))
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes))
console.log(activarProtocoloUrgencia(pacientes))
console.log(reasignaPacientesAMedicoFamilia(pacientes))
console.log(pacientes)
console.log(HayPacientesDePediatria(pacientes))
console.log(cuentaPacientesPorEspecialidad(pacientes))
