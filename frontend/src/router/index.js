import {createRouter,createWebHistory} from "vue-router"
import App from "../App.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";
import resetPassword from "../pages/ResetPassword.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/login',
        name: 'Login',
        component: Login
    },{
        path: '/register',
        name: 'register',
        component: Register
    },{
        path: '/forgot-password',
        name: 'forgot_password',
        component: ForgotPassword
    },{
        path: '/password-reset/:token',
        name: 'reset_password',
        component: resetPassword
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
