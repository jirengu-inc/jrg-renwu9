## 问答
### 一、数组方法里push、pop、shift、unshift、join、split分别是什么作用。（*）

- 模拟堆栈 

1. arr.push():在数组尾部输入数据,返回的是元素个数。括号里面需要放要push的元素。不放的话什么都没有推入也不报错
2. arr.pop():在数据尾部删除数据，返回的是删除的元素本身值。 括号里面不用放值，放了也没效果照常运行也不报错，只删除一个。

- 模拟队列

1. arr.shift():数组头部删除数据，返回的是删除的元素。放了也是一样的效果，只删除一个。 
2. arr.unshift():数组头部添加数据，返回的是元素个数。 

- arr.join(separator):把数组元素使用separator参数作为连接符连接成一字符串并返回，不修改原数组内容。（可选，若无，默认为逗号）
- arr.split(separator,howmany):以separator参数分割字符串。返回内容为字符串数组，其中小的字符串以逗号隔开。howmany为可选项，指定返回数组的最大长度。若未设置，整个字符串分割并返回。
[代码地址](https://github.com/jirengu-inc/jrg-renwu9/blob/master/homework/%E5%90%B4%E6%99%97%E5%90%9B/task18/Task18.html)
