import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

console.log("starting Gemini");

async function main() {
    console.log("Calling Gemini...");

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    });

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `
You are a QA tester.

Generate 3 test cases for a login page.

For each test case include:
- title
- scenario
- steps
- expectedResult

Return the test cases as JSON.
`
    });

    console.log("Gemini responded!");
    console.log(response.text);
}

main().catch(error => {
    console.error("ERROR:", error);
});