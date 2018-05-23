const mongoose = require('mongoose')

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/db_finance'
module.exports = mongoose.connect(url)

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "'{VALUE}' é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "'{VALUE}' é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."