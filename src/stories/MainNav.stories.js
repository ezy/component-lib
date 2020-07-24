import { html } from "lit-html";
      import "../template-sources/nzgovt-import/MainNav.css";
      
      export default {
          title: "nzgovt-import",
          component: "MainNav",
      };
      
      export const MainNav = () => html`<nav aria-label="Main" class="g-main-nav" role="navigation">
  <button aria-expanded="example" class="g-main-nav__button g-main-nav--open">
    Menu
    <svg
      class="g-main-nav__button__icon"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z"
        fill="currentColor"
        fill-rule="nonzero"
      ></path>
    </svg>
  </button>

  <div>
    <ul class="g-main-nav__ul g-main-nav--open">
      MainNavLink components go here
    </ul>
  </div>
</nav>
`;