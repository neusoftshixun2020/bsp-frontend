import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
 
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/mywallet',
    component: Layout,
    hidden: true,
    children: [{
      path: '/mywallet',
      component: () => import('@/views/bvo/bvo-wallet/brand-wallerAccountRegister'),
      name: 'mywallet',
      meta: { title: 'My Wallet', icon: 'edit' }
    }]
  },
  {
    path: '/brand-gmcwallerAcount',
    component: Layout,
    hidden: true,
    children: [{
      path: '',
      component: () => import('@/views/bvo/bvo-wallet/component/brand-gmcwallerAcount'),
      name: '',
      meta: { title: 'brand-gmcwallerAcount', icon: 'edit' }
    }]
  },
  {
    path: '/mvo-myInfo',
    component: Layout,
    hidden: true,
    children: [{
      path: '/mvo-myInfo',
      component: () => import('@/views/mvo/mvo-myInfo'),
      name: 'mvo-myInfo',
      meta: { title: 'My Infomation',icon: 'edit' }
    }]
  },

  {
    path: '/mvo-mycompany',
    component: Layout,
    hidden: true,
    children: [{
      path: '',
      component: () => import('@/views/mvo/mvo-mycompany'),
      name: '',
      meta: { title: 'Company Information', icon: 'edit' }
    }]
  }
 
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
 
 {
    path: '/Administrator',
    component: Layout,
    name: 'Administrator',
    meta: {
      title: 'Administrator',
      icon: 'excel'
    },
    children: [
      {
        path: 'adminAudit',
        component: () => import('@/views/admin/adminAudit'),
        name: 'adminAudit',
        meta: { title: 'Money Audit' }
      },
 
    ]
  },

  {
    path: '/mvo',
    component: Layout,
    name: 'MVO',
    meta: {
      title: 'MVO',
      icon: 'excel'
    },
    children: [
      {
        path: 'myInfo',
        component: () => import('@/views/mvo/mvo-myInfo'),
        name: 'myinfo',
        meta: { title: 'My Infomation' }
      },
      {
        path: 'goodsInput',
        component: () => import('@/views/mvo/mvo-productInput'),
        name: 'goodsinput',
        meta: { title: 'Product Input' }
      },
      {
        path: 'goodsCategory',
        component: () => import('@/views/mvo/mvo-product-category'),
        name: 'productCategory',
        meta: { title: 'Product Category' }
      },
      {
        path: 'myorder',
        component: () => import('@/views/mvo/mvo-order'),
        name: 'MVOOrderManagement',
        meta: { title: 'Order Management' }
      },
      {
        path: 'upload-excel2',
        component: () => import('@/views/excel/upload-excel'),
        name: 'mywallet',
        meta: { title: 'My Wallet' }
      }
    ]
  },
  {
    path: '/bvo',
    component: Layout,
    name: 'BVO',
    meta: {
      title: 'BVO',
      icon: 'excel'
    },
    children: [
      {
        path: 'myInfo',
        component: () => import('@/views/bvo/bvo-myinfo/bvo-myInfo'),
        name: 'myInfo',
        meta: { title: 'My Infomation' }
      },
      {
        path: 'myStore',
        component: () => import('@/views/bvo/bvo-store/component/bvo-myStore'),
        name: 'mystore',
        meta: { title: 'My Store' }
      },
      {
        path: 'goodslist',
        component: () => import('@/views/bvo/bvo-productScan/bvo-productScan'),
        name: 'goodslist',
        meta: { title: 'Goods List' }
      },
      {
        path: 'wishlist',
        component: () => import('@/views/bvo/bvo-wish/bvo-wishList'),
        name: 'wishlist',
        meta: { title: 'Wishlist' }
        // meta: { title: 'Wishlist', icon: 'list' }
      },
      {
        path: 'productDetail',
        component: () => import('@/views/bvo/bvo-wish/component/product-detail'),
        name: 'productDetail',
        hidden:true,
        meta: { title: 'productDetail' }
        // meta: { title: 'Wishlist', icon: 'list' }
      },
      {
        path: 'storechoose',
        component: () => import('@/views/bvo/bvo-wish/storechoose'),
        name: 'storechoose',
        hidden:true,
        meta: { title: 'storeChoose' }
        // meta: { title: 'storeChoose', icon: 'list' }
      },
      {
        path: 'mywallet',
        component: () => import('@/views/bvo/bvo-wallet/brand-wallerAccountRegister'),
        name: 'mywallet',
        meta: { title: 'My Wallet' }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
