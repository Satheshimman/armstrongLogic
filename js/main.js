let a =153;
 let c=a; 
 let d=c;
let count=0
let sum=0


function sathesh(){
    
    return new Promise((p,q) => {

        while(a!=0){
            b=(a%10)
            a=(a-b)/10
            count++
        }

        p(count)
        
    })
}


function armstrong(count){
    
    return new Promise((r,s) => {

        while(c!=0){
            b=(c%10)
            c=(c-b)/10
            sum=sum+(b**count)
        }

        r(sum)
        
        
    })
   

}


function check(sum){
   
     return new Promise((t,u) => {
        
          if(d==sum){

               t("success")

          }

          else{
              
              u("error")

          }

     })


}


sathesh().then((l)=>{
    console.log(l)
    armstrong(l).then((m)=>{
        console.log(m)
       check(m).then((t)=>{
        console.log(t)
       }) 

    })
})

.catch("it is not a armstrong")
