import {defineType} from "sanity";

export default defineType({
    title:'Location',
    name:'location',
    type:'document',
    fields:[
        {
            title:'City',
            name:'city',
            type:'string'
        },
        {
            title:"Image",
            name:'image',
            type:'string'
        },
        {
            name:'theatre',
            title:'Theatre',
            type:'string'
        },
       { name: 'movie',
      type: 'array',
      of: [{
            title:"Movie",
            name:"movie",
            type:"reference",
            to:[{type:"movie"}]
        }]
    },
    ]
})