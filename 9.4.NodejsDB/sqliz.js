const {
    Sequelize,
    Model,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize('sqliz', 'root', '123456', {
    // host:''
    dialect: 'mysql'
});
//创建User模型
class User extends Model {}
//初始化User
User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'user' //表名
});
//同步到数据库
sequelize.sync()
    //创建一条记录
    .then(() => User.create({
        name: 'janedoe',
        age: 15
    }))
    //打印结果
    .then(jane => {
        console.log(jane.toJSON());
    });