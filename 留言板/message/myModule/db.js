//管理与数据库操作的所有方法
var MongoClient = require("mongodb").MongoClient();

//连接数据库的地址
var url = "mongodb://localhost:27017/web1706";

//获取连接
function getConnection(callback){
  MongoClient.connect(url,function(err,db){
     if(err){
         console.log("连接失败");
         callback(err,null);
         return;
     }
      console.log("连接成功");
      callback(null,db);
  })
}
//查询所有的数据
exports.findAll = function(collection,callback){
   getConnection(function(err,db){
       if(err){
           console.log("连接失败");
           return;
       }
       db.collection(collection).find({}).toArray(function(err,docs){
           callback(err,docs);
           db.close();
       });
   })
}

//查询指定的数据，并将该数据进行分页排序
//db.student.find({ }).skip(3).limit(2);
/*
collection:表示数据库中的某一个集合
json：表示查询的条件
C:表示第三个参数，如果出入的参数只有3个，C表示callback
  如果传入的参数有4个，那么C表示{skip:m,limit:n}
D：表示第四个参数，只有当传入4个参数的时候，才会表示callback
   如果传入的是3个参数，则D为underfind，不去使用
*/
exports.find = function(collection,json,C,D){
  if(arguments.length==3){//3个参数
      var page = 1;
      var limit = 50;
      var callback = C;
  }else if(arguments.length==4){//4个参数
      var page = C.page;//显示第几页
      var limit = C.limit;//每页显示的条数
      var callback = D;
  }else{
      throw new Error("参数个数错误");
      return;
  };
//获取跳过的记录的条数
  var skip = (page-1)*limit;

//获取链接，查询数据
  getConnection(function(err,db){
        if(err){
            callback(err,null);
            return;
        }
        db.collection(collection).find(json).skip(skip).limit(limit).toArray(function(err,docs){
            callback(err,docs);
            db.close();
        });
    })
};

//增
exports.add = function(collection,json,callback){
   getConnection(function(err,db){
       if(err){
           callback(err,null);
           return;
       }
       db.collection(collection).insertOne(json,function(err,result){
           callback(err,result);
           db.close();
       })
   })
}

//删除
exports.delete = function(collection,json,callback){
    getConnection(function(err,db){
        if(err){
            callback(err,null);
            return;
        }
        db.collection(collection).deleteOne(json,function(err,result){
            callback(err,result);
            db.close();
        });
    });
};

//修改
exports.modify = function(collection,json,data,callback){
    getConnection(function(err,db){
        if(err){
            callback(err,null);
            return;
        }
        db.collection(collection).updateOne(json,{$set:data},function(err,result){
            callback(err,result);
            db.close();
        })
    })
}



