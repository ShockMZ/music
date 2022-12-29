import {Swipe, SwipeItem, Button ,Grid, GridItem, TabbarProps, TabbarItemProps } from 'vant';

let plugins = [
  Swipe, SwipeItem, Button, Grid, GridItem,TabbarProps, TabbarItemProps
]


// 这里我们需要导出函数。
export default function getVant(app){
  plugins.forEach((item) => {
    return app.use(item)
  })
}