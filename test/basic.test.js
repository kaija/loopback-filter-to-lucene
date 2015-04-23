require('./init.js');
var trans = require('../index.js');
describe('Basic test', function(){
  before(function(){
  });
  it('AND', function(done){
    var input = {where:{and:[{age:19},{sex:'male'}]}};
    var output = trans.buildqSearch(input);
    //should(output);
    done();
  });
});


