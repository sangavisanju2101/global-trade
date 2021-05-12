const getCountry= (req,res) => {
    res.status(200).send("get country"); 
}

const saveCountry = (req,res) => {
    res.status(201).send("save country");
}

const updateCountry = (req,res) => {
    res.status(201).send("update country");
}

const deleteCountry = (req,res) => {
    res.status(200).send("delete country");
}

module.exports = {
    getCountry : getCountry,
    saveCountry : saveCountry,
    updateCountry : updateCountry,
    deleteCountry : deleteCountry
}