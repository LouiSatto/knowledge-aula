const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        const msg = 'ERRO! nao foi possivel conectar ao MongoDB!'
        console.log('\x1b[41m\x1b[37m' + msg + '\x1b[0m')
    })