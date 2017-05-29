var getUser = (id,callback) => {
  var temp = {
    id: 31,
    name: 'Ghauri'
  };
  callback(temp);
};

getUser(31,(user)=>{
  console.log(user);
});
