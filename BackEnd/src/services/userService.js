import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let handleSignUp = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let check = await checkUserEmail(data.email)
            if (check == false) {
                let hashPassWordFromBcrypt = await hashUserPassword(data.password)
                await db.User.create({
                    name: data.name,
                    email: data.email,
                    password: hashPassWordFromBcrypt
                })

                userData.errCode = 0;
                userData.errMessage = 'OK';
            }
            else {
                userData.errCode = 1;
                userData.errMessage = 'Email is exist';
            }
            resolve(userData)
        } catch (e) {
            console.log(e);
        }
    })
}

let checkUserEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassWord = await bcrypt.hashSync(password, salt);
            resolve(hashPassWord);
        } catch (e) {
            reject(e);
        }

    })
}

module.exports = {
    handleSignUp
}