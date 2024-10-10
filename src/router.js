import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/MainPages/pages/HomePage.vue";
import TargetBookPage from "./components/MainPages/pages/TargetBookPage.vue";
import AllBooks from "./components/MainPages/pages/AllBooks.vue";
// dashboard
import DashboardPage from "./components/dashboard/pages/DashboardPage.vue";
import MainPage from "./components/dashboard/pages/MainPage.vue";
import AddProduct from "./components/dashboard/pages/AddProduct.vue";
import ProductsDashboard from "./components/dashboard/pages/ProductsDashboard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/TargetBookPage/:book', component: TargetBookPage },
        { path: '/AllBooks/:data?/:value?', component: AllBooks },
        {
            path: '/dashboard', meta: { hideHeader: true }, component: DashboardPage, children: [
                { path: 'MainPage', component: MainPage },
                { path: 'AddProduct', component: AddProduct },
                { path: 'ProductsDashboard', component: ProductsDashboard },
            ]
        }
    ]
})

export default router