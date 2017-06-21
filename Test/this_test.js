
var fullname = 'john markus';
var obj = {
   fullname: 'john wolly',
   prop: {
      fullname: 'john doe',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());   // 'john doe'

var test = obj.prop.getFullname;

console.log(test());     //undefined