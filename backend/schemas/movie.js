import {defineType} from 'sanity'

export default defineType({
    name:'movie',
    title:'Movie',
    type:'document',
    fields:[
        {
            name:'title',
            type:'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
            },
          },
        {
            name:'poster_path',
            type:'string',
        },
        {
            name:'overview',
            type:'string',
        },
        {
            name:'length',
            type:'string',
        },
        {
            name:'release_date',
            type:'date',
        },
        {
            name:'original_language',
            type:'string',
        },
        {
            name:'genre',
            type:'string',
        },
        {
            name:'ratings',
            type:'number',
        }
    ]
})