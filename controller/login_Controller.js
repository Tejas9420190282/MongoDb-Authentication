const { user } = require("../model/user_Model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { admin } = require("../model/admin_Model");

const login_Controller = async (req, res) => {

    const SECRET_KEY = 'secret-key';

    try {
        
        const { email, password } = req.body;

        if (!email || !password) {
            
            console.log(`All inputs are andatory...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All inputs are andatory...`
            })
        }

        const adminIsExist = await admin.findOne({email});

        
        if (!adminIsExist) {
            
            const userIsExist = await user.findOne({email});

            const isMatch = await bcrypt.compare(password, userIsExist.password);

            if (!isMatch) {
            
                console.log(`password is not matching......`.bgRed);
                
                return res.status(401).json({

                    success : false,
                    message : `All inputs are andatory...`
                })
            }

            const token = await jwt.sign({email : email, role : "user"}, SECRET_KEY, {expiresIn: '1h'});

            console.log(`user successfully logged in......`.bgYellow);
            
            res.status(200).json({
                success : true,
                message : `user successfully logged in......`,
                redirect : "/user-home",
                token : token
            })
        }

        const isMatch = await bcrypt.compare(password, adminIsExist.password);

        if (!isMatch) {
            
            console.log(`password is not matching......`.bgRed);
            
            return res.status(401).json({
                success : false,
                message : `All inputs are andatory...`
            })
        }

        const token = await jwt.sign({email : email, role : "admin"}, SECRET_KEY, {expiresIn: '1h'});

        console.log(`Admin successfully logged in......`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : `Admin successfully logged in......`,
            redirect : "/admin-home",
            token : token
        })

    } catch (error) {
        
        console.log(`Error in login_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in login_Controller : ${error.message}`
        })
    }
}

exports.login_Controller = login_Controller;
