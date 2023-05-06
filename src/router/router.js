import { createRouter, createWebHistory } from "vue-router";


const routes =  [
    {
        path: "/",
        alias: "/schedule",
        name: "schedule",
        component: () => import("./../components/Home.vue")
    },
    {
        path: "/",
        alias: "/schedule",
        name: "schedule",
        component: () => import("./../components/Home.vue")
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;