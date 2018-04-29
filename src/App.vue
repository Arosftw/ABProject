<template>
	<div id="app">
		<header class="py-3 container-fluid">
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 col-md-4 pt-1">
                    <router-link to="/" class="text-muted">首頁</router-link>
                </div>
                <div class="col-4 col-md-4 text-center">
                    <a class="blog-header-logo text-dark" href="index.html">LOGO</a>
                </div>
                <div class="col-4 col-md-4 d-flex justify-content-end align-items-center">
                    <a class="text-muted" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3">
                            <circle cx="10.5" cy="10.5" r="7.5"></circle>
                            <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                        </svg>
                    </a>
                    <a class="btn btn-sm btn-outline-secondary" href="index.html">斗內</a>
                </div>
            </div>
        </header>
        <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
            	<router-link :to="{ name: 'InnerPage'}" class="p-2 text-muted">開箱文</router-link>
                <router-link :to="{ name: 'InnerPage'}" class="p-2 text-muted">各式周邊</router-link>
                <router-link :to="{ name: 'InnerPage'}" class="p-2 text-muted">模型/公仔</router-link>
                <router-link :to="{ name: 'InnerPage'}" class="p-2 text-muted">食玩/扭蛋</router-link>
            </nav>
        </div>
        <SlideShow />
		<main role="main" class="container">
			<router-view/>	
		</main>
		<Footer />
	</div>
</template>
<script>
import SlideShow from './components/SlideShow.vue'
import Footer from './components/Footer.vue'
export default {
	name: 'app',
	components: {
        SlideShow,
        Footer
    },
}

</script>
<style>

</style>
