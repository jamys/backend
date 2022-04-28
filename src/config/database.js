const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://127.0.0.1:27017/mymoney');

mongoose.Error.messages.general.required = "o atributo '{PATH}' é obrigatorio";
mongoose.Error.messages.Number.min = "o valor '{VALUE}' é menor que o limite minimo '{MIN}'";
mongoose.Error.messages.Number.Max = "o valor '{VALUE}' é maior que o limite maximo '{MIN}'";
mongoose.Error.messages.String.enum = "o valor '{VALUE}' não é valido para o atributo '{PATH}'";
