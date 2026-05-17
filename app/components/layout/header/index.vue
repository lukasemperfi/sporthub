<script setup lang="ts">
const user = useSupabaseUser();
const authApi = useAuthApi();

const isLoggedIn = computed(() => !!user.value);
const isAuthModalOpen = ref(false);
const router = useRouter();

const menuItems = [
  { id: "portfolio", label: "Портфолио", to: "/portfolio" },
  { id: "services", label: "Услуги", to: "/services" },
  { id: "locations", label: "Локации", to: "/locations" },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleAuth = () => {
  if (isLoggedIn.value) {
    router.push("/profile");
  } else {
    isAuthModalOpen.value = true;
  }
};
</script>

<template>
  <header class="header">header</header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 99998;
}
</style>
