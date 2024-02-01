import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
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
