const router = require('koa-router')()
const searchHandle = require('../src/search-handle');
//文本搜索
router.get('/search', async (ctx, next) => {
  let searchStr = ctx.query.searchStr || "";
  let filePath = ctx.query.filePath || "";
  let page = ctx.query.page || 1;
  // 检索文件数量
  let pageSize = ctx.query.pageSize || 1;  
  let contentLength = ctx.query.contentLength || 300;
  if (!searchStr || searchStr === 0) {
    ctx.body = {
      code: 0,
      data: {},
      mesg: 'empty request'
    }
    return
  }

  ctx.body = {
    code: 0,
    data: searchHandle.getSearchList(searchStr, page, pageSize, contentLength,filePath),
    mesg: 'success'
  }

})

module.exports = router