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
                userData.user = {
                    name: data.name,
                    email: data.email
                }
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

let handleCheckSignUp = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let check = await checkUserEmail(data.email)
            if (check == false) {
                userData.errCode = 0;
                userData.errMessage = 'OK';
                userData.user = {
                    name: data.name,
                    email: data.email
                }
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

let handleSignIn = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let check = await checkUserEmail(data.email)
            if (check == true) {
                let user = await db.User.findOne({
                    attributes: ['name', 'email', 'password'],
                    where: { email: data.email },
                    raw: true,
                });

                if (user) {
                    let check = await bcrypt.compare(data.password, user.password);

                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';

                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User not found`;
                }
            }
            else {
                userData.errCode = 1;
                userData.errMessage = 'Email is not exist';
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
    handleSignUp, handleSignIn, handleCheckSignUp
}