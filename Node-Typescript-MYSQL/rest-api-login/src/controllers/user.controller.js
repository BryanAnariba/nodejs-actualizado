const ctrlUser = {};
const bcryptJS =  require('bcryptjs');

/*
ctrlUser.insertUser = async (req , res) => {
    const salt = await bcryptJS.genSalt(10);
    const hashedPassword = await bcryptJS.hash(password , salt); // contrase;a cifrada y con salt
}


ctrlUser.compareCredential = (req , res) => {
    const { password } = req.body;
    await bcryptJS.compare(password , clavedesdemongo);
}
*/
module.exports = ctrlUser;