let Sequillize=require('sequelize');
let dotenv=require('dotenv');
dotenv.config();
let sequillize=new Sequillize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:'mysql',
        //logging:console.log//muestra las consultas
    }
)
module.exports=sequillize;



