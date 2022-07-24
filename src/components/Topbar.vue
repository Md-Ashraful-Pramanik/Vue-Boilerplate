<template>
    <div class="top">
        <div class="left">
            <button id="menu-btn" @click="openNavBar">
                <span class="material-icons-sharp">menu</span>
            </button>
        </div>
        <div class="right">
            <div class="toggler" @click="toggleLanguage()">
                <span :class="getLanguageClass('en')">E</span>
                <span :class="getLanguageClass('bn')">B</span>
            </div>

            <div class="toggler" @click="toggleTheme()">
                <span :class="getThemeClass('light')">light_mode</span>
                <span :class="getThemeClass('dark')">dark_mode</span>
            </div>

            <div class="profile">
                <div class="info">
                    <p><b>Md. Ashraful Islam</b></p>
                    <small class="text-muted">Admin</small>
                </div>
                <div class="profile-photo">
                    <img src="images/profile-pic.png" alt="profile-picture">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: 'global' });

const LIGHT = 'light';
const DARK = 'dark';

const BANGLA = 'bn';
const ENGLISH = 'en';

const theme = ref(LIGHT);
const language = ref(BANGLA);

// Saving theme information in the local storage
onMounted(() => {
    let lanName = localStorage.getItem('language-name');
    if (lanName)
        language.value = lanName;

    locale.value = language.value;

    let themeName = localStorage.getItem('theme-name');
    if (themeName)
        theme.value = themeName;

    if (themeName === DARK)
        document.body.classList.toggle('dark-theme-variables');
});

function getLanguageClass(lanName) {
    if (lanName === language.value)
        return 'active';
    else
        return '';
}

function getThemeClass(themeName) {
    if (themeName === theme.value)
        return 'material-icons-sharp active';
    else
        return 'material-icons-sharp';
}

function toggleLanguage() {
    // document.body.classList.toggle('dark-theme-variables');

    if (language.value === BANGLA)
        language.value = ENGLISH;
    else
        language.value = BANGLA;
    
    locale.value = language.value;

    localStorage.setItem('language-name', language.value);
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme-variables');

    if (theme.value === LIGHT)
        theme.value = DARK;
    else
        theme.value = LIGHT;

    localStorage.setItem('theme-name', theme.value);
}

function openNavBar() {
    const navbar = document.getElementById("navbar");
    navbar.style.display = 'inline-block';

    const body = document.getElementById('body');
    body.style.marginLeft = '15rem';
}

</script>

<style scoped>
.top {
    background: var(--color-white);
    width: 100%;
    margin: 0;
    z-index: 2;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

.top .left {
    justify-content: left;
    align-items: left;
}

.top .right {
    display: flex;
    gap: 3rem;
    justify-content: right;
    align-items: right;
    margin-top: 0.5rem;
    margin-right: 1.5rem;
}

.top .left button {
    background: transparent;
    color: var(--color-dark);
    /* display: none; */
    margin: 1rem;
    cursor: pointer;
}

.top .left button:hover {
    color: var(--color-primary);
}

.top .right .toggler {
    background: var(--color-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    width: 4.5rem;
    cursor: pointer;
    border-radius: var(--border-radius-1);
    padding: .25rem;
    padding-left: .5rem;
    padding-right: .5rem;
    margin-top: 0.45rem;
}

.top .right .toggler span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    font-size: 1.4rem;
}

.top .right .toggler span.active {
    background: var(--color-primary);
    color: white;
    border-radius: var(--border-radius-1);
    padding-left: .3rem;
    padding-right: .3rem;
}

.top .right .profile {
    display: flex;
    gap: 2rem;
    text-align: right;
}

.top .right .profile .info {
    white-space: nowrap;
}

.top .right .profile .profile-photo {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
}


/* Media queries mobiles */
@media screen and (max-width: 768px) {

    .top .right .profile .info {
        display: none;
    }

    .top .left button {
        display: inline-block;
        background: transparent;
        cursor: pointer;
        color: var(--color-dark);
    }
}
</style>
