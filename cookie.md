设置了httpOnly属性的cookie，是无法通过js脚本获取到的。这样可以有效防止xss攻击

<!-- cookie安全 -->
1. cookie 的value如果用于保存用户登录态，应该将值加密
2. http-only 设置后无法通过js访问cookie，减少xss攻击
3. secure 设置后只能在https请求中携带
4. samesite 规定浏览器不能在跨域请求中携带cookie，减少csrf攻击