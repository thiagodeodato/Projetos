import Register from './components/register/Register.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', component: Home, titulo: 'Home'},
    { path: '/register', component: Register, titulo: 'Cadastro'}
];