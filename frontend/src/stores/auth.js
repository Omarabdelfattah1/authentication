import { defineStore } from 'pinia'
import axios from "axios";

export const authUserStore = defineStore('auth', {

    state: () => {
        return {
            authUser: null,
            authStatus: null,
            authErrors: [],
        }
    },
    getters: {
        user: (state)=> state.authUser,
        status: (state)=> state.authStatus,
        errors: (state)=> state.authErrors,
    },
    actions: {
        async getToken(){
            await axios.get('/sanctum/csrf-cookie');
        },
        async getUser(){
            await this.getToken();
            const data = await axios.get('/api/user');
            this.authUser = data.data;
        },async handleLogin(data){
            await this.getToken();
            this.authErrors = [];
            try {
                await axios.post('/login',{
                    email:data.email,
                    password:data.password,
                });
                this.router.push('/')
            }catch (errors){
                this.authErrors = errors.response.data.errors
            }
        },async handleRegister(data){
            await this.getToken();
            this.authErrors = [];
            try {
                await axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                });
                this.router.push('/')
            }catch (errors){
                this.authErrors = errors.response.data.errors
            }
        },async forgotPassword(data){
            await this.getToken();
            this.authErrors = [];
            this.authStatus = null;
            try {
                const response = await axios.post('/forgot-password',{
                    email:data.email
                });
                this.authStatus = response.data.status
            }catch (errors){
                this.authErrors = errors.response.data.errors
            }
        },async resetPassword(data){
            await this.getToken();
            this.authErrors = [];
            try {
                await axios.post('/reset-password',{
                    token:data.token,
                    email:data.email,
                    password:data.password,
                    password_confirmation:data.password_confirmation
                });
                this.router.push('/login')
            }catch (errors){
                this.authErrors = errors.response.data.errors
            }
        },async logout(){
            await axios.post('/logout');
            this.authUser = null
        }
    },
})
