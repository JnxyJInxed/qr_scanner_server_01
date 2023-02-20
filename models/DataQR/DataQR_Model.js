const mongoose = require("mongoose");

// const dataSchema = mongoose.Schema({
//     //_id : mongoose.Schema.Types.ObjectId,
//     id_test : {
//         type : String
//     },
//     // 
//     qr_Data: {
//         type : String
//     },
//     processTime : {
//         type : Number
//     }
// }, {timestamps: true})

const dataSchema = mongoose.Schema({
    //
    testID : {
        type : String,
        required : true
    },
    // 
    stage: {
        type : String,
        required : true
    },
    // 
    dataQR: {
        type : String,
        required : true
    },
    // 
    processStatus: {
        type : String,
        required : true
    },
    processTimeScanning : {
        type : Number,
        required : true
    },
    processTimeWidget : {
        type : Number,
        required : true
    },
    dateTime : {
        type : String,
        required : true
    }
}, {timestamps: true})

connRekons = mongoose.connection.useDb('QR_Scanned_Data')

module.exports = connRekons.model('dbQR02', dataSchema);