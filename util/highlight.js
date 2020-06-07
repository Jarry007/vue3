import Hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css'

const data = {}

data.install = (app)=>{
   app.directive('hljs',{
      updated(el){
         let nodes = el.querySelectorAll('pre code')
         nodes.forEach(item=>{
            Hljs.highlightBlock(item)
            // console.log(item)
            item.style.borderRadius = '0.8rem'
            item.style.boxShadow = '.125rem .2rem .625rem rgb(43, 43, 43)'
         })
      }
   })
}

export const Highlight =  data