({  
  baseUrl: "js", // 对应路径一致
  paths:{
      jquery: "empty:"  // 忽略映射，非本地文件不压缩
  },
  name: "main",  // 模块入口
  out: "main-built.js"  // 输出压缩后的文件位置
})

// node r.js -o build.js