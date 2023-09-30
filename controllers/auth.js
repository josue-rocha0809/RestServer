const { response, request } = require("express");

const login = (req=request, res = response)=>{
    res.json({
        message:'ok'
    })
}

module.exports={
    login
}