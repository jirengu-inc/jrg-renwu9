define(['jquery'],function(){
    var name = 'zyn';
    var age = 31
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