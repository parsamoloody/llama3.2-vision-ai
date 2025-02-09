import ollama from 'ollama'
import fs from "fs";

const imageFile = fs.readFileSync("./assets/img/11.jpg");

const response = await ollama.chat({
    model: 'llama3.2-vision',
    messages: [{
        role: 'user',
      content: "Describe the image in detail",
        'images': [imageFile]
    }],
})
console.log(response.message.content)