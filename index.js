function Spy(){
    console.log('hello')
}

function receivesAFunction(fun) {
    fun();
}

function returnsANamedFunction() {
   function namedFunc(){

    };
    return namedFunc;
}

function returnsAnAnonymousFunction(){
    return (() => {})
}