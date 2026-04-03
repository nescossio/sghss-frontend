// Dados mockados para o sistema VidaPlus

// Pacientes
const pacientes = [
    { id: 1, nome: 'Ana Clara Silva', cpf: '123.456.789-00', dataNasc: '1985-06-15', telefone: '(11) 98765-4321', email: 'ana@email.com', endereco: 'Rua A, 123' },
    { id: 2, nome: 'João Pedro Santos', cpf: '234.567.890-11', dataNasc: '1990-03-22', telefone: '(11) 97654-3210', email: 'joao@email.com', endereco: 'Rua B, 456' },
    { id: 3, nome: 'Maria Aparecida Oliveira', cpf: '345.678.901-22', dataNasc: '1978-11-10', telefone: '(11) 96543-2109', email: 'maria@email.com', endereco: 'Rua C, 789' },
    { id: 4, nome: 'Carlos Eduardo Lima', cpf: '456.789.012-33', dataNasc: '1995-02-28', telefone: '(11) 95432-1098', email: 'carlos@email.com', endereco: 'Rua D, 101' },
    { id: 5, nome: 'Patrícia Ferreira', cpf: '567.890.123-44', dataNasc: '1982-09-05', telefone: '(11) 94321-0987', email: 'patricia@email.com', endereco: 'Rua E, 202' }
];

// Profissionais de saúde
const profissionais = [
    { id: 1, nome: 'Dr. Ricardo Almeida', especialidade: 'Cardiologista', crm: '12345-SP', telefone: '(11) 91234-5678', email: 'ricardo@vidaplus.com' },
    { id: 2, nome: 'Dra. Fernanda Costa', especialidade: 'Pediatra', crm: '23456-SP', telefone: '(11) 92345-6789', email: 'fernanda@vidaplus.com' },
    { id: 3, nome: 'Dr. Roberto Nunes', especialidade: 'Ortopedista', crm: '34567-SP', telefone: '(11) 93456-7890', email: 'roberto@vidaplus.com' },
    { id: 4, nome: 'Dra. Camila Rocha', especialidade: 'Ginecologista', crm: '45678-SP', telefone: '(11) 94567-8901', email: 'camila@vidaplus.com' },
    { id: 5, nome: 'Dr. Paulo Mendes', especialidade: 'Clínico Geral', crm: '56789-SP', telefone: '(11) 95678-9012', email: 'paulo@vidaplus.com' }
];

// Agendamentos
const agendamentos = [
    { id: 1, pacienteId: 1, profissionalId: 1, data: '2025-04-03', horario: '09:00', tipo: 'consulta', status: 'agendado' },
    { id: 2, pacienteId: 2, profissionalId: 2, data: '2025-04-03', horario: '10:30', tipo: 'consulta', status: 'agendado' },
    { id: 3, pacienteId: 3, profissionalId: 3, data: '2025-04-03', horario: '14:00', tipo: 'teleconsulta', status: 'agendado' },
    { id: 4, pacienteId: 4, profissionalId: 4, data: '2025-04-04', horario: '11:00', tipo: 'consulta', status: 'agendado' },
    { id: 5, pacienteId: 5, profissionalId: 5, data: '2025-04-04', horario: '15:30', tipo: 'consulta', status: 'agendado' },
    { id: 6, pacienteId: 1, profissionalId: 2, data: '2025-04-05', horario: '08:30', tipo: 'teleconsulta', status: 'agendado' }
];

// Leitos
const leitos = [
    { id: 1, numero: '101', unidade: 'Enfermaria A', status: 'ocupado', pacienteId: 1 },
    { id: 2, numero: '102', unidade: 'Enfermaria A', status: 'livre', pacienteId: null },
    { id: 3, numero: '103', unidade: 'Enfermaria A', status: 'livre', pacienteId: null },
    { id: 4, numero: '201', unidade: 'UTI', status: 'ocupado', pacienteId: 3 },
    { id: 5, numero: '202', unidade: 'UTI', status: 'livre', pacienteId: null },
    { id: 6, numero: '203', unidade: 'UTI', status: 'ocupado', pacienteId: 5 },
    { id: 7, numero: '301', unidade: 'Enfermaria B', status: 'livre', pacienteId: null },
    { id: 8, numero: '302', unidade: 'Enfermaria B', status: 'ocupado', pacienteId: 2 },
    { id: 9, numero: '303', unidade: 'Enfermaria B', status: 'livre', pacienteId: null },
    { id: 10, numero: '304', unidade: 'Enfermaria B', status: 'livre', pacienteId: null }
];

// Prontuários
const prontuarios = {
    1: { historico: 'Paciente hipertenso, em tratamento contínuo.', alergias: 'Penicilina', exames: ['Eletrocardiograma 01/2025', 'Hemograma 02/2025'] },
    2: { historico: 'Asma brônquica, uso de bombinha.', alergias: 'Poeira', exames: ['Raio-X tórax 01/2025'] },
    3: { historico: 'Diabetes tipo 2, controle alimentar.', alergias: 'Nenhuma', exames: ['Glicemia 03/2025'] }
};

// Funções auxiliares
function getPacienteById(id) {
    return pacientes.find(p => p.id === id);
}

function getProfissionalById(id) {
    return profissionais.find(p => p.id === id);
}

function getAgendamentosByPaciente(pacienteId) {
    return agendamentos.filter(a => a.pacienteId === pacienteId);
}

function getProntuarioByPaciente(pacienteId) {
    return prontuarios[pacienteId] || { historico: 'Sem histórico registrado', alergias: 'Não informado', exames: [] };
}