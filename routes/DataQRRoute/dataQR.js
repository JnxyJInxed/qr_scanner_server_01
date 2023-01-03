const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');
//Deklarasi Model
const dataQR = require('../../models/DataQR/DataQR_Model');

//DATA Data Scan  
    //get all
    router.get('/All', async (req,res) => {
        try{
            const dataAll = await dataQR.find(); //ngasih semua data yang udah kesimpan
            res.json(dataAll);
        }catch(err){
            console.log(err);
            res.json({message: 'err GET ALL Accelerometer'});
        }
    });
    //get Last
    router.get('/Lastest', async (req,res) => {
        try{
            const dataQR_Last = await dataQR.find().limit(1).sort({$natural:-1});
            res.json(dataQR_Last); 
        }catch(err){
            console.log(err);
            res.json({message: 'err GET LAST by Data Scan ID'});
        }
    });

    //get Last by ID
    router.get('/Lastest_Specific', async (req,res) => {
        try{
            const query = {
                id_scan: req.body.id_scan
            }
            console.log(req.body.id_scan);
            const dataQR_Last = await dataQR.find(query).limit(1).sort({$natural:-1});
            res.json(dataQR_Last);   
        }catch(err){
            console.log(err);
            res.json({message: 'err GET LAST by Data Scan ID'});
        }
    });

    //get All by ID
    router.get('/All_Specific', async (req,res) => {
        try{
            const query = {
                id_scan: req.body.id_scan
            }
            console.log(req.body.id_scan);
            const dataQR_All = await dataQR.find(query);
            console.log(dataQR_All);
            res.json(dataQR_All);   
        }catch(err){
            console.log(err);
            res.json({message: 'err GET ALL Data Scan by ID'});
        }
    });

    router.post('/save', async (req,res) => { //pake async kalau save CARA 2
        console.log(req.body) //cek Body
        const newData = new dataQR({ //masukin info dari body ke salam model database Post
                    id_scan : req.body.id_scan,
                    qr_Data:  req.body.qr_Data,
                    processTime:req.body.processTime
        });
        // Save and validate
        dataQR.create(newData)
        .then(newData=> {
            return res.status(200).json({
            message :'Data Data Scan Berhasil Disimpan'
        })
    })
    .catch (err => {
        console.log(err);
        res.status(500).json({error:err.message});
    });

    });

module.exports = router;