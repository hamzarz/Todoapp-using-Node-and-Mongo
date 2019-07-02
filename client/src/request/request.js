export default (id, reqMethod,obj)=>{
    const url=`/api/items/${id}`
    console.log(url)
    const options = {
      method:reqMethod,
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(obj)
    };

    return new Promise((resolve,reject)=>{
        fetch(url,options)
        .then((res)=> res.json())
        .then((data)=> resolve(data))
        .catch((err)=>reject(err))
    })
}