

const bcrypt = require('bcrypt');
const { user } = require('../../model/user_Model');

const user_Register_Controller = async (req, res) => {
    try {
        
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            
            console.log(`All inputs are andatory...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All inputs are andatory...`
            })
        }

        const userIsExist = await user.findOne({email});

        if (userIsExist) {
            console.log(`user is already exist`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `user is already exist`
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await user.create({
            name : name,
            email : email,
            password : hashPassword
        });

        console.log(`new user created...`.bgYellow);
        
        res.status(200).json({

            success : true,
            message : `new user created...`,
            newUser : newUser
        })

    } catch (error) {
        
        console.log(`Error in user_Register_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({

            success : false,
            message : `Error in user_Register_Controller : ${error.message}`
        })
    }
}

exports.user_Register_Controller = user_Register_Controller;