
// admin_Register_Controller.js

const bcrypt = require('bcrypt');
const { admin } = require("../../model/admin_Model");

const admin_Register_Controller = async (req, res) => {
    try {

        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            
            console.log(`All inputs are andatory...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All inputs are andatory...`
            })
        }

        const adminIsExist = await admin.findOne({email});

        if (adminIsExist) {
            console.log(`admin is already exist`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `admin is already exist`
            })
        }
 
        const hashPassword = await bcrypt.hash(password, 10);

        const newAdmin = await admin.create({
            name : name,
            email : email,
            password : hashPassword
        });

        console.log(`new Admin created...`.bgYellow);
        
        res.status(200).json({

            success : true,
            message : `new Admin created...`,
            newAdmin : newAdmin
        })
        
    } catch (error) {
        
        console.log(`Error in admin_Register_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({

            success : false,
            message : `Error in admin_Register_Controller : ${error.message}`
        })
    }
}

exports.admin_Register_Controller = admin_Register_Controller;

