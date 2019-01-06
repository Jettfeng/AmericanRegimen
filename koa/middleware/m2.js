function m2(ctx) {
    global.console.log('m2'); //ctx.path页面的当前路径
  }
  
  module.exports = function() {
    return async function(ctx, next) {
      m2(ctx);//当前中间件处理逻辑
      await next();//交给下一个中间件处理
    };
  };
  