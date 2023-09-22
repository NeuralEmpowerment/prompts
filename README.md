# NeuralE Prompts

Collection of prompts, standards and principles I want to reuse when developing code with LLMs. 


## Usage

`npx @neuralempowerment/prompts init`  

Then in Cursor, you can `@mention` `prompt-...` to pull in these prompts easily.

## Creating Prompts 

The prompts in this package are meant to be super simple `.txt` files for easy cross platform usage. 

Variables can be added by using brackets, ex: `{promptVariable}`. This is the standard intended on being used to allow for prompt templates. Functions can easily be created (in multiple languages) to pass an object and replace these variables.