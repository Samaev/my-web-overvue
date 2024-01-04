import { createRouter, createWebHistory } from 'vue-router';

import TopBanner from './components/TopBanner.vue'
import MainBio from './components/MainBio.vue'
import ProjectsList from './components/ProjectsList.vue'

const routes = [
    { path: '/top-banner', component: TopBanner },
    { path: '/main-bio', component: MainBio },
    { path: '/projects-list', component: ProjectsList },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // If the hash is present in the URL, scroll to the element with that id
        if (to.hash) {
            return {
                selector: to.hash,
            };
        }
        // If a savedPosition is available, use it
        if (savedPosition) {
            return savedPosition;
        }
        // Otherwise, scroll to the top
        return { x: 0, y: 0 };
    },
});

export default router;
