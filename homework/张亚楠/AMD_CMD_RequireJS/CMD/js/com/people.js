define(['jquery'],function(){
    var name = 'ZYG';
    var age = 100
    function sayName(){
        console.log(name);

    }
    function Age(){
        console.log(age)
    }

    return  {
        sayName :sayName,
        Age : Age
    }
})