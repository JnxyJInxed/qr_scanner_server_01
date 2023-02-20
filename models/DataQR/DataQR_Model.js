const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    //_id : mongoose.Schema.Types.ObjectId,
    id_test : {
        type : String
    },
    // 
    qr_Data: {
        type : String
    },
    processTime : {
        type : Number
    }
}, {timestamps: true})

connRekons = mongoose.connection.useDb('QR_Scanned_Data')

module.exports = connRekons.model('dbQR02', dataSchema);