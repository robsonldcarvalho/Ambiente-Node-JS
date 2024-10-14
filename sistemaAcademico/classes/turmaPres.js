const Turma = require('./Turma');

class turmaPres extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    aprovado() {
        return super.aprovado() && this.frequencia >= 75; // Considerando 75% como frequência mínima
    }
}

module.exports = turmaPres;
