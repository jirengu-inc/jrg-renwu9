//构造函数
function People(name,age){
	this.name=name;
	this.age=age;
}
People.prototype.sayName=function(){
	return this.name;
}
var student= new People('xiaoming',20);
console.log(student);
//混合模式
function People(name,age){
	this.name=name;
	this.age=age;
}
People.prototype.sayName=function(){
	return this.name;
}
var Student=function(name,age,score){
	People.call(this,name,age);
	this.score=score;
}
Student.prototype=create(People.prototype)
function create(parentObj){
	function F(){};
	F.prototype=parentObj;
	return new F();
}
Student.prototype.sayScore=function(){
	console.log(this.score);
}
var student=new Student('DALUN',30,90)
//模块模式
var People=(function(){
	var name='hunger';
	return {
		changeName:function(newName){
			name=newName;
		},
		sayName:function(){
			console.log(name);
		}
	};
})()
People.sayName();
People.changeName('rouyu');
People.sayName();
//对象模式
var Tab= {
	init:function($ct){
		this.$ct=$ct;
	},
	bind:function(){
		this.$ct.on('click',function(){
			console.log('ct click')
		})
	}
}
//本质只有一个对象,安全性差；
Tab.init($('.ct'))
var TTab=(function(){

	var Tab= {
	init:function($ct){
		this.$ct=$ct;
		this.bind();    
	},
	bind:function(){
		this.$ct.on('click',function(){
			console.log('ct click')
		})
	}
}
	return {
		init:Tab.init
	} 
})()
// 工厂 模式
function createPeople(opts){
	var person= {
		name:opts.name || 'hunger'
	};
	person.sayName:function(){
		console.log(this.name)
	}
	return person;
}

var p1=createPeople({name:'rouyu'});| 
var p2=createPeople({name:'jirengu'});

function createPerson(type,opts){
	function Person(name,age){
		this.name=name;
		this.age=age;
	}
Person.prototype.sayName=function(){
	return this.name;
	}
	if(type==='tab'){
		return new Tab()
	}
	return new Person(opts.name,opts.age);
}
var Tab=createComponent('tabs',{});
var Carousel=createComponent('carousel',{});
var Stickup=createComponent('stickup',{});
//发布订阅模式




