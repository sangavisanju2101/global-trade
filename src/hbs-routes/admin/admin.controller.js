const service = require('../../api/admin/admin.service');

const getAdmin = (req,res) => {
    service.getAdmin(req).then((adminArr)=> {
        res.render('Admin', {
            title : 'Admin page',
            adminArr : adminArr
        })
    }).catch((err)=> {
        console.log("error", err);
        res.status(500).send('Unable to render page');
    })
}

const getAdminById = (req,res) => {
    service.getAdminById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveAdmin = (req,res) => {
    service.saveAdmin(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateAdmin = async (req,res) => {
    try{
        var tasks = await service.getAdminById(req);
        res.render('addAdmin',{
            title : "Edit task",
            admin : admins
        })
    }catch(err){
        console.log(err)
        res.status(500).send('Unable to render page');
    }
}


const deleteAdmin = (req,res) => {
    service.deleteAdmin(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getAdmin : getAdmin,
    getAdminById : getAdminById,
    saveAdmin : saveAdmin,
    updateAdmin : updateAdmin,
    deleteAdmin : deleteAdmin
}