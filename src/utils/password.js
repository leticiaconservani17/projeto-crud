const bcrypt = require('bcrypt')

async function crypto(pwd){
    const salt = await bcrypt.genSalt()

    const PasswordCripto = await bcrypt.hash(pwd, salt)

    return PasswordCripto

}

module.exports = {
    crypto,
}