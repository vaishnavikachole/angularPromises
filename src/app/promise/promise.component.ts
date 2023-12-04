import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit{

  promiseVal:any;

  Dell= {
    brand: 'Dell',
    hardDisk: '1 TB',
    color: 'black'
  }
  Hp = {
    brand: 'HP',
    hardDisk: '2 TB',
    color: 'silver'
  }
  notAvailable={
    message : "laptops are not available",
    status : 'failed'
  }
  DellAvailable(){
    return true;
  }
  HpAvailable(){
    return false;
  }
  ngOnInit(){
  //  let buyLaptop = new Promise(function(resolve,reject){
  //   resolve('Promise is resolved')
  //  });

  let buyLaptop = new Promise((resolve,reject)=>{
    // resolve('Promise is resolved')
    //reject('promise is reject')
   
    if(this.DellAvailable()){
     return setTimeout(() => {
      // resolve("Dell is purchase")
      resolve(this.Dell)
    },3000)
    }   
    else if(this.HpAvailable()){
      return setTimeout(() => {
        // resolve("Hp is purchase")
        resolve(this.Hp)
      },3000)
    }
    else{
      return setTimeout(() => {
        // reject("laptops are not available on shop")
        reject(this.notAvailable)
      },3000)
    }
   });

   buyLaptop.then(res =>{
    console.log("then code => " + res);
    this.promiseVal = res;
   }).catch(res=>{
    console.log("catch code => "+res);
    this.promiseVal = res;
   })

   
  }
}
