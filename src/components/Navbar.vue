<template>
    <aside id="navbar">
        <div class="top">
            <div class="logo">
                <img src="images/icon.svg" alt="icon">
                <h2>Template</h2>
            </div>
            <div class="close" id="close-btn" @click="closeNavBar">
                <span class="material-icons-sharp">close</span>
            </div>
        </div>
        <!-- {{t('navbar')}} -->
        <div class="sidebar">
            <template v-for="item of navbarItems[locale]">
                <router-link :to=item.link>
                    <span class="material-icons-sharp">{{ item.icon }}</span>
                    <h3>{{ item.text }}</h3>
                    <div class="pending-expense-count" v-if="item.icon === 'notifications'">
                        100
                    </div>
                </router-link>
            </template>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import navbarLabels from '../labels/navbar.js'

const { t, locale } = useI18n();
const route = useRoute();

const navbarItems = ref(navbarLabels);

function closeNavBar() {
    const navbar = document.getElementById("navbar");
    navbar.style.display = 'none';

    const body = document.getElementById('body');
    body.style.marginLeft = '1rem';
}

</script>

<style scoped>
aside {
    position: fixed;
    left: 0;
    top: 0;
    background: var(--color-white);
    width: 14rem;
    z-index: 3;
    box-shadow: var(--box-shadow);
    height: 100vh;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    animation: showMenu 400ms ease forwards;
    left: -100%;
}

@keyframes showMenu {
    to {
        left: 0;
    }
}

aside .top {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 1rem;
    margin-left: 0;
    padding-left: 0rem;
}

aside .logo {
    display: flex;
    margin-right: 0.5rem;
}

aside .logo h2 {
    margin-left: 1rem;
}

aside .logo img {
    width: 2.5rem;
    height: 2.5rem;
    transition: all 300ms ease;
}

aside .logo img:hover {
    width: 2.6rem;
    /* height: 2.6rem; */
    box-shadow: var(--box-shadow);
}

aside .close {
    /* display: none; */
    margin-left: 0.1rem;
    margin-top: -0.3rem;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
}

aside .close:hover {
    color: var(--color-danger);
    /* width: 2rem;
    height: 2rem; */
}

/* SIDE BAR */
aside .sidebar {
    /* background: white; */
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 2.5rem;
}

aside h3 {
    font-weight: 500;
}

aside .sidebar a {
    display: flex;
    color: var(--color-info-dark);
    margin-left: 1.5rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 2.7rem;
    transition: all 300ms ease;
}

aside .sidebar a span {
    font-size: 1.6rem;
    transition: all 300ms ease;
}

aside .sidebar a:last-child {
    position: absolute;
    bottom: 1rem;
    width: 100%;
}

aside .sidebar a.router-link-active {
    background: var(--color-light);
    color: var(--color-primary);
    margin-left: 0;
    border-radius: var(--border-radius-1)
}

aside .sidebar a.router-link-active::before {
    content: "";
    width: 6px;
    height: 100%;
    background: var(--color-primary);
}

aside .sidebar a.router-link-active span {
    color: var(--color-primary);
    margin-left: calc(0.5rem-6px);
}

aside .sidebar a:hover {
    color: var(--color-dark);
}

aside .sidebar a:last-child:hover {
    color: var(--color-danger);
}

aside .sidebar a:hover span {
    margin-left: 0.5rem;
}

aside .sidebar .pending-expense-count {
    background: var(--color-warning);
    color: #363949;
    padding: 2px 8px;
    font-size: 13px;
    border-radius: var(--border-radius-1);
}


/* Media queries tablets */
/* @media screen and (max-width: 1200px) {
    aside {
        width: 7.5rem;
    }

    aside .logo h2 {
        display: none;
    }

    aside .top {
        /* background: red; */
/*       justify-content: left;
        align-items: left;
        margin-left: 0.5rem;
    }

    aside .sidebar h3 {
        display: none;
    }

    aside .sidebar a {
        width: 7rem;
    }

    aside .sidebar a:last-child {
        position: relative;
        margin-top: 2rem;
    }
} */


/* Media queries mobiles */
@media screen and (max-width: 768px) {
    aside {
        position: fixed;
        left: 0;
        background: var(--color-white);
        width: 14rem;
        z-index: 3;
        box-shadow: var(--box-shadow);
        height: 100vh;
        padding-right: 0.5rem;
        display: none;
        animation: showMenu 400ms ease forwards;
        left: -100%;
    }

    @keyframes showMenu {
        to {
            left: 0;
        }
    }


    aside .logo h2 {
        display: inline;
    }

    aside .sidebar h3 {
        display: inline;
    }

    aside .sidebar a {
        width: 100%;
        /* height: 3.4rem; */
    }

    aside .sidebar a:last-child {
        position: relative;
        margin-top: 2rem;
    }

    aside .close {
        display: inline-block;
        cursor: pointer;
    }
}
</style>
