const Admin = require('../../models/admin');

const getAdmin= (req) => {
    try{
        return Admin.find(req.query);
    } catch(err){
        throw Error(err);
    }
}

const getAdminById=(req,res) => {
    try{
        return Admin.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveAdmin= (req) => {
    try{
        var admin = new Admin(req.body);
        return admin.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateAdmin = (req)=> {
    try{
        return Admin.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteAdmin= (req) =>{
    try{
        return Admin.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getAdmin : getAdmin,
    getAdminById : getAdminById,
    saveAdmin : saveAdmin,
    updateAdmin : updateAdmin,
    deleteAdmin : deleteAdmin
}