import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Child from '@/components/Child'
import Parent from '@/components/Parent'
import Parentprop from '@/components/parentprop'
import Childprop1 from '@/components/childprop1'
import Childprop2 from '@/components/childprop1'
import Main from '@/components/Quotes/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about/:name',
      name: 'About',
      component: About
    },
    {
      path: '/Contact/',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/parent/',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/child/',
      name: 'Child',
      component: Child
    },
    {
      path: '/parentprop/',
      name: 'Parentprop',
      component: Parentprop 
    },
    {
      path: '/childprop1/',
      name: 'Childprop1',
      component: Childprop1 
    },
    {
      path: '/Childprop2/',
      name: 'Childprop2',
      component: Childprop2 
    },
    {
      path: '/main/',
      name: 'Main',
      component: Main 
    }

  ]
})
