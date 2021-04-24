const logger = require('hexo-log')()

/**
 * Load Config
 */

 hexo.on("generateBefore", () => {
  require("./config")(hexo);
});


/**
 * Print welcome message
 */

 hexo.on('ready', () => {
    logger.info(`
0000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000
00000                NANOAS                 00000
00000                                       00000
00000            Made By Adkinsm            00000
00000                                       00000
00000            Powered By Hexo            00000
00000                                       00000
00000          Open Source On GitHub        00000
00000                                       00000
00000           Open Source By MIT          00000
0000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000`)});