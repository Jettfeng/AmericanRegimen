function pv(ctx) {
  global.console.log('pv',ctx.path); //ctx.path页面的当前路径
}

module.exports = function() {
  return async function(ctx, next) {
    pv(ctx);//当前中间件处理逻辑
    await next();//交给下一个中间件处理
  };
};
