var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 4444));

app.post('/submit',function(req,res){

    console.log(req.body);
    res.send("form submitted");

});
app.post('/submit2',function(req,res){
    
        console.log(req.body);
        res.send("form2 submitted");
    
    });
app.get('/:name', function (req, res) {

    var options = {
        root: __dirname + '/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
        } 
    });
});

app.listen(app.get('port'), function () {
    console.log('app at port:- ' + app.get('port'));
});