
const {names} = require('./array')
const {v4:uuid} = require("uuid")
const {format : date1} = require("date-fns")

const res=(name)=>
    {
       return names.map(element=>
        ({"name": element,
        "id" : uuid(),
        "date": date1(new Date(),"yyyy-MM-dd HH:mm:ss")

       }))
    
    }

    console.log(res(names))
