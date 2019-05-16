var express = require('express');
var router = express.Router();
var compiler = require('compilex');
var options = {stats : true}; //prints stats on console 
compiler.init(options);


//do something

router.post('/compilecode' , function (req , res ) {
    
	var code = req.body.code;	
    var lang = req.body.lang;
    
    if(lang == "C" || lang == "C++")
    {     

	   	var envData = { OS : "linux" , cmd : "gcc"}   
        	compiler.compileCPP(envData , code , function (data) {
                console.log(data);
                
        	if(data.error)
        	{
        		res.json(data.error);
        	}    	
        	else
        	{
        		res.json(data.output);
        	}
    
            });
	    }
    
});

module.exports = router;