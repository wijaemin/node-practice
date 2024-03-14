"use strict";

const logger= require("../src/config/logger");
const  app =require("../app");
const PORT= process.env.PORT;
app.listen(PORT,()=>{
    logger.info(`${PORT} 서버에서 가동되었습니다.`);
});
