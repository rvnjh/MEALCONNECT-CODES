var express = require('express');

var router = express.Router();

var dbConn = require ('../../config/db.js');
router.post('/add',(req, res) => {
    console.log(req.body);

    var Ad_name = req.body.Ad_name; 
    var Ad_pass = req.body.Ad_pass;
    var Ad_contact = req.body.Ad_contact; 
    var Ad_email = req.body.Ad_email; 

    sqlQuery = `INSERT INTO admin_tb(Ad_name,Ad_pass,Ad_contact,Ad_email) Values(${Ad_name},'${Ad_pass}', '${Ad_contact}','${Ad_email}')`

    dbConn.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json(results);
    })
});

router.post('/view', (req, res) => {
    sqlQuery = "SELECT * FROM admin_tb";
 
 
    dbConn.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json(results);
    })
 });

router.put('/put', (req, res) => {
    var Admin_ID = req.body.Admin_ID;
    var Ad_name = req.body.Ad_name; 
    var Ad_pass = req.body.Ad_pass;
    var Ad_contact = req.body.Ad_contact; 
    var Ad_email = req.body.Ad_email; 

    sqlQuery = `UPDATE admin_tb SET FIRSTNAME = (${Ad_name}, Ad_pass = '${Ad_pass}',Ad_contact = '${Ad_contact}',Ad_email= '${Ad_email}' WHERE Admin_ID = '${Admin_ID}`; 

    dbConn.query(sqlQuery, function (error, results, fields){
        if (error) throw error;
        res.status(200).json(results);
    })
 });

 router.delete('/delete/:id', (req, res) => {
    const id = req.body.id;

    sqlQuery = `DELETE FROM admin_tb WHERE admin_ID = ${admin_ID}`;
 
    dbConn.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json(results);
    });
 });

  
module.exports = router; 
