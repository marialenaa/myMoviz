var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}
    mongoose.connect('mongodb+srv://wUser:weatheruser@cluster0.n3oho.mongodb.net/mymovizapp?retryWrites=true&w=majority',
    options,
    function(err){
        if(err){
            console.log(err, 'ERROR')
        }else{
            console.log('DB OK***')
        }
    }
    )
    module.exports = mongoose