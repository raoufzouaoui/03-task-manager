const mongoose = require('mongoose')

const coneectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

 module.exports = coneectDB


