import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'a.svelte-1a1wiyx{color:var(--comment);transition:all ease-in-out 200ms}@media(max-width: 750px){a.svelte-1a1wiyx{font-size:3.8vw}}.projects.svelte-1a1wiyx{margin:auto;text-decoration:none;font-size:2vw;transition:all ease-in-out 400ms;color:var(--purple)}body{background-color:var(--bg);font-family:"Fira Code", monospace;letter-spacing:0.1em}.wrapper.svelte-1a1wiyx{font-size:small;display:flex;justify-content:center;flex-direction:column;align-items:center;margin:1rem}.content.svelte-1a1wiyx{display:flex;justify-content:center;margin:1rem;border-radius:2rem}.element.svelte-1a1wiyx{margin:1rem;border-radius:3rem;padding:1rem;border:0.2rem solid var(--fg)}.element.svelte-1a1wiyx:hover{border:0.2rem solid var(--purple)}@media(max-width: 750px){.element.svelte-1a1wiyx{margin:0.6rem;border-radius:0rem;padding:0rem;border:0.2rem solid var(--fg)}}.text.svelte-1a1wiyx{background-color:var(--fg);padding:1rem;border-radius:1rem}img.svelte-1a1wiyx{transition:all ease-in-out 200ms;width:10vw}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"sub flex alight-center text-center "}"><a href="${"/home"}" class="${"projects svelte-1a1wiyx"}">TableQuestions.net</a></div>

${slots.default ? slots.default({}) : ``}

<div class="${"wrapper svelte-1a1wiyx"}"><div class="${"text svelte-1a1wiyx"}"><h1 class="${"text-center "}">Hello I made this website for fun you can find out who I am at my website <a href="${"www.danielokita.com underline link"}" class="${"svelte-1a1wiyx"}">danielokita.com</a>, Email me at <span class="${"underline"}">me@danielokita.com</span>, or find me on these places:
        </h1>
        <h1 class="${"text-center "}"><div class="${"content svelte-1a1wiyx"}"><div class="${"element svelte-1a1wiyx"}"><a href="${"https://www.linkedin.com/in/stephen-okita-a9427b1b2/"}" class="${"svelte-1a1wiyx"}"><img src="${"https://simpleicons.org/icons/linkedin.svg"}" class="${"svelte-1a1wiyx"}"></a></div>
                    <div class="${"element svelte-1a1wiyx"}"><a href="${"https://mastodon.world/@thearctesian"}" class="${"svelte-1a1wiyx"}"><img src="${"https://simpleicons.org/icons/mastodon.svg"}" class="${"svelte-1a1wiyx"}"></a></div>
                    <div class="${"element svelte-1a1wiyx"}"><a href="${"https://github.com/TheArctesian"}" class="${"svelte-1a1wiyx"}"><img src="${"https://simpleicons.org/icons/github.svg"}" class="${"svelte-1a1wiyx"}"></a></div>
                    <div class="${"element svelte-1a1wiyx"}"><a href="${"https://discord.com/users/682753580943278083"}" class="${"svelte-1a1wiyx"}"><img src="${"https://simpleicons.org/icons/discord.svg"}" class="${"svelte-1a1wiyx"}"></a></div></div>
                as well as the source code for this website <a class="${"s svelte-1a1wiyx"}" href="${"https://github.com/TheArctesian/TableQuestions.net"}">here</a></h1></div>
</div>`;
});
export {
  Layout as default
};
