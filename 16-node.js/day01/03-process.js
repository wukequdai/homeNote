//获取CPU架构类型
console.log("CPU架构类型:"+process.arch);
//获取操作系统类型
console.log("操作系统类型:"+process.platform);
//获取操作系统的环境变量
console.log("操作系统的环境变量:");
console.log(process.env);
//获取当前所在工作目录
console.log("当前所在工作目录:"+process.cwd());
//获取Node.js解释器所在目录
console.log("Node.js解释器所在目录:"+process.execPath);
//获取Node.js的版本信息
console.log("Node.js的版本信息:");
console.log(process.versions);
//获取Node.js进程的运行时间（s）
console.log("Node.js进程的运行时间:"+process.uptime());
//获取Node.js进程内存使用信息
console.log("Node.js进程内存使用信息:");
console.log(process.memoryUsage());
//获取进程id号
console.log("当前进程id号："+process.pid);
//向指定进程id号发送退出信号
//process.kill(4788);








