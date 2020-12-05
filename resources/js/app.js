require('./bootstrap');

import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'

const elem = document.getElementById('app')

createApp({
    render: () => h(App, {
        initialPage: JSON.parse(elem.dataset.page),
        resolveComponent: name => require(`./Pages/${name}`).default
    })
}).use(plugin).mount(elem)
