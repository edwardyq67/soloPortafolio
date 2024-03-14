const catchError = require('../utils/catchError');
const sendEmail = require('../utils/sendEmail');

const sayHi = catchError(async(req, res) => {
    const {correo,nombre,mensaje} = req.body;
await sendEmail({
    to:"edwardyq200167@gmail.com",
    subject:"EDWARD TE QUIEREN PARA PROGRAMAR",
    html:`${nombre} te esta buscando para que te integres, su correo es ${correo}
    <hr>
    <p>${mensaje}</p>
    `
})
return  res.json({message:"Enviando email"});
})
module.exports = {
    
    sayHi
}