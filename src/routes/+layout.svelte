<script>
    import "../app.css";
</script>

<div class="sub flex alight-center text-center ">
    <a href="/home" class="projects">TableQuestions.net</a>
</div>

<slot />

<div class="wrapper">
    <div class="text">

        <h1 class="text-center ">
            Hello I made this website for fun you can find out who I am at my website <a href="www.danielokita.com underline link">danielokita.com</a>, Email me at <span class="underline">me@danielokita.com</span>, or find me on these places:
        </h1>
        <h1 class="text-center ">
                <div class="content">
                    <div class="element">
                        <a
                            href="https://www.linkedin.com/in/stephen-okita-a9427b1b2/"
                        >
                            <img
                                src="https://simpleicons.org/icons/linkedin.svg"
                            />
                        </a>
                    </div>
                    <div class="element">
                        <a href="https://mastodon.world/@thearctesian">
                            <img
                                src="https://simpleicons.org/icons/mastodon.svg"
                            />
                        </a>
                    </div>
                    <div class="element">
                        <a href="https://github.com/TheArctesian">
                            <img
                                src="https://simpleicons.org/icons/github.svg"
                            />
                        </a>
                    </div>
                    <div class="element">
                        <a href="https://discord.com/users/682753580943278083">
                            <img
                                src="https://simpleicons.org/icons/discord.svg"
                            />
                        </a>
                    </div>
                </div>
                as well as the source code for this website <a
                    class="s"
                    href="https://github.com/TheArctesian/TableQuestions.net"
                    >here</a
                >
        </h1>
    </div>
</div>

<style>
    a {
        color: var(--comment);
        transition: all ease-in-out 200ms;
    }
    .link{
        font-style: italic;
    }
    .link:hover {
        transition: all ease-in-out 200ms;
        font-style: normal;
    }
    @media (max-width: 750px) {
        a {
            font-size: 3.8vw;
        }
    }

    .projects {
        margin: auto;
        text-decoration: none;
        font-size: 5vw;
        transition: all ease-in-out 400ms;
        color: var(--purple);
    }

    :global(body) {
        background-color: var(--bg);
        font-family: "Fira Code", monospace;
        letter-spacing: 0.1em; /* Adjust as needed */
    }
    .wrapper {
        margin: 1rem;
        font-size: small;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .content {
        margin: 1rem;
        display: flex;
        justify-content: center;
        border-radius: 2rem;
    }
    .element {
        margin: 1rem;
        border-radius: 3rem;
        padding: 1rem;
        border: 0.2rem solid var(--fg);
    }
    .element:hover {
        border: 0.2rem solid var(--purple);
    }

    @media (max-width: 750px) {
        .element {
            margin: 0.6rem;
            border-radius: 0rem;
            padding: 0rem;

            border: 0.2rem solid var(--fg);
        }
    }
    .text {
        background-color: var(--fg);
        padding: 1rem;
        border-radius: 1rem;
    }
    img {
        transition: all ease-in-out 200ms;
        width: 10vw;
    }
</style>
