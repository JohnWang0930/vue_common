import defaultLayout from './defaultLayout/index'
import Index from './index/index'


export default [
    {
        path: '/',
        component: defaultLayout,
        children:[
            {
                path: '',
                component: Index
            }
        ]
    }
]
