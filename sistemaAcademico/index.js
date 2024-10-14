const Aluno = require('./classes/aluno');
const Turma = require('./classes/Turma');
const turmaPres = require('./classes/turmaPres');

// Criando um aluno
const aluno1 = new Aluno('João Silva', 'joao.silva', '12345');

// Criando uma turma online
const turma1 = new Turma('MAT101', 8);
console.log(`Aluno aprovado na turma online: ${turma1.aprovado()}`); // true

// Criando uma turma presencial
const turmaPres1 = new turmaPres('FIS101', 7, 80);
console.log(`Aluno aprovado na turma presencial: ${turmaPres1.aprovado()}`); // true

const turmaPres2 = new turmaPres('FIS101', 7, 70);
console.log(`Aluno aprovado na turma presencial: ${turmaPres2.aprovado()}`); // false 
