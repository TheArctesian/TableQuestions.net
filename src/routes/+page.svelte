<script lang="ts">
    import Typewriter from "svelte-typewriter";
    import questions from "./questionbank.json";
    let askedQuestion: string[] = [];
    let questionLength: number;
    let question: string = "Press the button to get a questions";
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
    <div class="c">
        <h1 class="text-left text-3xl"><b>Question: </b>{question}</h1>
        <br />
        <br />
        <button class="but" on:click={genRandomQuestion}
            >Get a new question</button
        >
    </div>
</div>

<style>
    .c {
        margin: auto;
        background-color: var(--fg);
        padding: 1rem;
        border-radius: 1rem;
    }
    .but {
        margin: auto;
        padding: 1rem;
        border-radius: 1rem;
        color: white;
        background-color: var(--bg);
        transition: all ease-in-out 200ms;
    }
    .but:hover {
        transition: all ease-in-out 200ms;
        background-color: var(--red);
    }
    .card {
        display: flex;
        height: fit-content;
        margin: 1rem;
        background-color: var(--red);
        padding: 1rem;
        border-radius: 1rem;
    }
</style>
