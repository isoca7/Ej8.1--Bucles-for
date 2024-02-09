type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let resultado: Pacientes[] = [];
  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      resultado.push(paciente);
    }
  });
  return resultado;
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let resultado: Pacientes[] = [];
  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Pediatra" && paciente.edad < 10) {
      resultado.push(paciente);
    }
  });
  return resultado;
};

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  activarProctolo = pacientes.some(
    (paciente) => paciente.temperatura > 39 || paciente.frecuenciaCardiaca > 100
  );
  return activarProctolo;
};

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let resultado: Pacientes[] = [...pacientes];
  resultado.forEach((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      paciente.especialidad = "Medico de familia";
    }
  });
  return resultado;
};

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let sePuedeIrACasa = false;
  sePuedeIrACasa = pacientes.some(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  return sePuedeIrACasa;
};

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let cardiologos: number 
  let pediatras: number 
  let medicosFamilia: number 
 
    cardiologos  = pacientes.reduce((contador: number, obj) => {
      if (obj.especialidad === "Cardiólogo") contador += 1;
      return contador;
    }, 0);
    pediatras= pacientes.reduce((contador: number, obj) => {
      if (obj.especialidad === "Pediatra") contador += 1;
      return contador;
    }, 0);
    medicosFamilia = pacientes.reduce((contador: number, obj) => {
      if (obj.especialidad === "Medico de familia") contador += 1;
      return contador;
    }, 0);
  
  let resultado: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: medicosFamilia,
    pediatria: pediatras,
    cardiologia: cardiologos,
  };
  return resultado
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));
console.log(activarProtocoloUrgencia(pacientes));
console.log(reasignaPacientesAMedicoFamilia(pacientes));
console.log(pacientes)
console.log(HayPacientesDePediatria(pacientes));
console.log(cuentaPacientesPorEspecialidad(pacientes));

