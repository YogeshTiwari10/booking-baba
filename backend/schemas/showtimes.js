import {defineType} from "sanity";

export default defineType({
    name:"showtimes",
    type:'document',
    fields:[
        {
            name:"time",
            type:"string",
        },
        {
            title:"Movie",
            name:"movie",
            type:"reference",
            to:[{type:"movie"}]
        },
        {
            title:"Location",
            name:"location",
            type:"reference",
            to:[{type:"location"}]
        },
        {
            title:"Row",
            name:"row",
            type:"array",
            of:[{type:"row"}]
        }

    ]
})