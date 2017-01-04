//单例模式
// var Person=(function(){
// 	function Person(args){
// 		var args= args || {};
// 		this.name=args.name || "Tom";
// 		this.sex= args.sex || 'man';
// 	}
// 	var instance;
// 	return {
// 		//把函数容器new 生成一个实例，实例存在就不生成
// 		getInstance:function(args){
// 			if(!instance){
// 				instance= new Person(args);
// 			}
// 			return instance;
// 		}
// 	}
// })()
// //通过函数的相同方法的参数内容不同生成不同对象;
// var person1=Person.getInstance({name:'dota',sex:'man'});
// var person2=Person.getInstance({name:'xiao'});
// person1 === person2;//true
// 工厂模式
// function createPerson(args){
// 	var person= {
// 		name:args.name || 'ruoyu',
// 		age:args.age || 20
// 	};
// 	person.sayName= function(){
// 		console.log('my name is '+this.name)
// 	}
// 	return person;
// }
// var person1= createPerson({name:'hunger',age:2})
// var person2= createPerson({age:20})
// person1=== person2//false
//构造函数模式
//  function Person(name,age){
//  	this.name = name;
//  	this.age = age;
//  }
//  Person.prototype.sayName=function(){
//  	return ('my name is '+this.name)
//  }
// var p1=new Person('ruoyu',30);
// var p2=new Person('hunger',20);
// p1===p2//false
// //混合模式
// var Person=function(name,age){
// 	this.name=name;
// 	this.age= age 
// }
// Person.prototype.sayName=function(){
// 	return ('my name is '+this.name)
// }
// var Student=function(name,age,score){
// 	Person.call(this,name,age);
// 	this.score=score;
// }
// //中介函数过渡原型链
// Student.prototype=create(Person.prototype);
// function create(parentObj){
// 	function F(){};
// 	F.prototype=parentObj;
// 	return new F();
// }
// Student.prototype.sayScore=function(){
// 	return (this.name+'的得分是'+this.score)
// }
// var student1= new Student('hunger',20,80);
// var student2= new Student('ruoyu',20,80);
// 模块模式
// var Person = (function(){
// 	var name='bush';
// 	return　{
// 		sayName:function(){
// 			return name;
// 		},
// 		sayAge:function(age){
// 			return (name+' is '+age+' old')
// 		},
// 		changeName:function(newName){
// 			name=newName
// 		}
// 	}
// })()
// Person.sayName();
// Person.changeName('rouyu');
// Person.sayAge(20);
//发布订阅模式
// var EventCenter=(function(){
// 	var events={};
// 	function fire(evt,args){
// 		if(!events[evt]){
// 			return;
// 		};
// 		for(var i=0;i<events[evt].length;i++){
// 		//只能调用一个参数
// 		// events[evt][i].handler(args)
// 		//调用多个参数,args是类数组
// 		events[evt][i].handler([].slice.call(arguments,1))
// 		}
// 	}
// 	function on(evt,handler1){
// 		events[evt]=events[evt]||[];
// 		events[evt].push({
// 			handler:handler1
// 		})
// 	}
// 	return {
// 		on:on,
// 		fire:fire
// 	}
// })()
// EventCenter.on('roll', function () {
//     console.log("you are roll now!!!")
// })
//发布订阅模式的事件管理器

// var EventManager=(function(){
// 	var events={};
// 	function fire(evt){
// 		if(!events[evt]){
// 			console.log('没有绑定')
// 			return
// 		};
// 		for(var i=0;i<events[evt].length;i++){
// 			events[evt][i]([].slice.call(arguments,1))
// 		}
// 	}
// 	function on(evt,fun){
// 		events[evt]=events[evt]||[];
// 		events[evt].push(fun);
// 	}
// 	function off(evt){
// 		delete events[evt];
// 	}
// 	return {
// 		on:on,
// 		fire:fire,
// 		off:off
// 	}
// })()
// EventManager.on('text:change', function(val){
//     console.log('text:change...  now val is ' + val);  
// });
// EventManager.fire('text:change', '饥人谷');
// EventManager.off('text:change');
// EventManager.fire('text:change', 'jirengu');//没有绑定
