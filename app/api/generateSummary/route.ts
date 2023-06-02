import openai from "@/openai";
import {NextResponse} from "next/server";


export async function POST (request:Request) {

const {todos}=await request.json();
console.log(todos);


const response = await openai.createChatCompletion({
    model:"gpt-3.5-turbo",
    temperature:0.8,
    n:1,
    stream:false,
    messages:[
        {
            role:"system",
            content:`When responding, welcome the user as Zsákos Frodo and say welcome to the agy nelkuliek  todo appjan!
            limit the response to 300 characters`,
        },
        {
            role:"user",
            content:`hi there provide a summary of the following todos.count how many todos are in each category such as to do, in progress, and done then tell the user to have a productive day and tell a random chuck norris joke! here is the data: ${JSON.stringify(todos)}`,
        }
    ]

});
const {data} = response;


console.log("DATA IS:",data);
console.log(data.choices[0].message);

return NextResponse.json(data.choices[0].message);

}