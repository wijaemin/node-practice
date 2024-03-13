const PORT= process.env.PORT || 3000;

const logger= require("../src/config/logger");
const  app =require("../app");
app.listen(PORT,()=>{
    logger.info(`${PORT} 서버에서 가동되었습니다.`);
});