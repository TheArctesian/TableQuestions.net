<script>
    import Typewriter from "svelte-typewriter";
    import questions from "./questionbank.json";
    let askedQuestion = [];
    // let askedQuestion: string[] = [];
    // let questionLength: number;
    let questionLength;
    let question = "Press the button to get a questions";
    // let question: string = "Press the button to get a questions";
    function genRandomQuestion() {
        questionLength = questions.length;
        try {
            let num = Math.floor(Math.random() * questionLength);
            question = questions[num].Question;
            questions.splice(num, 1);
        } catch (error) {
            question = "you have exhausted all the questions, refresh the tab";
        }
        // delete question[num];
    }
</script>

<div class="card margin-auto text-center flex-col">
    <div class="c flex flex-col justifty-between">
        <div class="cc">
            <h1 class="text-center m-auto ">
                <b class="text-3xl">Question: </b><br />
            </h1>
        </div>
        <div class="cc text-xl">
            <Typewriter interval={10}>
                <h1>{question}</h1>
            </Typewriter>
        </div>
        <div class="cc">
            <button class="but" on:click={genRandomQuestion}
                >Get a new question</button
            >
        </div>
        <div class="cc">
                <a href="/about"class="text-l underline a">About this website</a>
        </div>
    </div>
</div>

<style>
    .a{
        color: var(--selection);
    }
    .cc {
        margin: 1rem;
    }
    .c {
        margin: auto;
        justify-content: space-between;
        background-color: var(--fg);
        padding: 1rem;
        border-radius: 0.2rem;
    }
    .but {
        margin: auto;
        padding: 1rem;
        border-radius: 0.2rem;
        color: white;
        background-color: var(--bg);
        transition: all ease-in-out 200ms;
    }
    .but:hover {
    transform: scale(105%);
    }

    .card {
        display: flex;
        margin: auto;
        border-radius: 1rem;
        padding: 1rem;
    }
</style>
