export default () => {
    
    const emailValidation = [
        value => !!value || 'O E-mail é obrigatório.',
        value => {
            const padrao = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return padrao.test(value) || 'O e-mail não é valido'
        },
    ]

    const nameValidation = [
        value => !!value || 'O Nome é obrigatório.',
        value => (value.length < 1 || value.length > 3) || 'O Nome deve ter mais de 3 caracteres.',
        value => value.length <= 70 || 'O Nome deve ter menos de 70 caracteres.',
    ]

    const zipCodeValidation = [
        value => (value.length < 1 || value.length > 8) || 'O CEP deve ter mais de 9 caracteres.',
    ]

    const cpfValidation = [
        valor => (valor.length < 1 || valor.length > 13) || 'A CPF deve ter de 14 caracteres.',
        valor => valor.length <= 14 || 'O CPF deve ter menos de 15 caracteres.',
    ]

    return {
        emailValidation,
        zipCodeValidation,
        nameValidation,
        cpfValidation,
    }
}