export const state = () => ({
  menuVisible: false,
});

export const mutations = {
  toggleMenu: (state) => {
    state.menuVisible = !state.menuVisible;
  },
};
