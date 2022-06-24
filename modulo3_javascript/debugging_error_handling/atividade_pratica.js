function arrayValido(array, tamanho) {
    try {
        if (!array && !tamanho) throw ReferenceError('Faltou parametros!')
        if (typeof array != Object) throw TypeError('Array não é um objeto')
        if (typeof tamanho != Number) throw TypeError('Não é um número')
        if (array.length != tamanho) throw RangeError('Tamanho do array não é igual ao número enviado')

        return array

    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Erro de referencia')
        }
        else if (e instanceof TypeError) {
            console.log('Erro de tipo')
        } else if (e instanceof RangeError) {
            console.log('Erro de tamanho')
        } else {
            console.log('Outro erro')
            console.log(e.stack)
        }

    }
}