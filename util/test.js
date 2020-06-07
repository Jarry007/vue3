function fn1 (){
   this.names = 'code'
   console.log('name',this.name)
   console.log('names',this.names)
   console.log('arg',arguments)
}

const obj = {
   name:'Jarry',
   age:23
}

//实现一个大文件的分片上传
let f = fn1.bind(obj,['one','two'])
  
f()


//bind 是函数版的call
//apply 是数组化参数版的call

let urlt ='https:%3A%2F%2Ffraea.dsds.dsd%2FAPI%3Dgreendhouse128329328999'
      let _index = urlt.lastIndexOf('%')
      let code_ = urlt.substring(_index+3,urlt.length)
      console.log(code_)