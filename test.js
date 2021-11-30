
arr=[1,2,3,4]

function func(x){

    for(let i=0;i<x;i++){
        if(x==0){return 0;}
        else{
        console.log(x);
        func(x-1);
    }}
}
func(3);
