// file: /prompts/promptUtils.js
export function getSystemPrompt() {
    return {
        role: "system",
        content:
            "You are a helpful story teller you are have an imagination that is more like J. K. Rowling's.",
    };
}

export function getUserPrompt(input) {
    const { genre, age, type } = input;
    return {
        role: "user",
        content: `Generate a story for me, which is in the genre of ${genre} and it should be appropriate for the age class of  ${age}  I want the story to be of this type ${type}, the story type is very important to me, so if i give you a type that does not make a sense to you. respond with a valid excuse that you can not generate a strory for me. The story should have a title and is should not exceed 200 words.
        .`,
    };
}

export function getFunctions() {
    return [
        {
            name: "generate_story",
            description: "Generate a a short story.",
            parameters: {
                type: "object",
                properties: {
                    storyTitle: {
                        type: "string",
                        description: "The title or the name of the story",
                    },
                    description: {
                        type: "string",
                        description: "The whole story",
                    },
                },
                required: ["storyTitle", "description"],
            },
        },
    ];
}
