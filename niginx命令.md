本地终端修改niginx文件：
1. 登录远程：
    ssh 用户名@ip地址 （例如：ssh  root@127.0.0.0.1）
    输入密码
2. cd /export/  （在每层寻找过程中，可以使用ls命令查看当前目录下的文件夹）
3. cd servers
4. cd nginx
5. cd conf
6. cd domains   (此时通过ls可以看到该ip下的项目名称，选择进入你需要修改的项目下)
7. cat 项目名称 （此时即可进入niginx文件)
8. vim 项目名称 （使用vim 命令，才可修改）
9. i （执行完vim后 ，输入i,即可进行编辑）
10. 按 esc 键退出编辑模式
11. :wq (保存并退出文件)
12. 通过cd命令向上退回sbin目录 （sbin目录在niginx目录下）
13. ./nginx -s reload(到sbin目录下执行命令重启nginx)



    
