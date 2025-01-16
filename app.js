
// ������ ��� ������� ���� ������ ����� �� �� Hugging Face  
const HF_TOKEN = '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'

const inference = new HfInference(HF_TOKEN);  

async function generateImage() {  
    try {  
        const response = await inference.textToImage({  
            model: "stabilityai/stable-diffusion-2",  
            inputs: "award winning high resolution photo of a giant tortoise/((ladybird)) hybrid, [trending on artstation]",  
            parameters: {  
                negative_prompt: "blurry",  
            },  
        });  
        console.log(response);  
    } catch (error) {  
        console.error("Error generating image:", error);  
    }  
}  

generateImage();

import { HfInference } from "@huggingface/inference";  

// ������ ��� ���� ������ ����� ��  
const HF_TOKEN = 'YOUR_HUGGING_FACE_TOKEN';   

const inference = new HfInference(HF_TOKEN);  

async function generateImage() {  
    try {  
        const response = await inference.textToImage({  
            model: "stabilityai/stable-diffusion-2",  
            inputs: "award winning high resolution photo of a giant tortoise/((ladybird)) hybrid, [trending on artstation]",  
            parameters: {  
                negative_prompt: "blurry",  
            },  
        });  
        
        const blob = response; // ����� �� ��������� �� Blob  

        // ����� Blob ��� URL  
        const imgUrl = URL.createObjectURL(blob);  

        // ��� ������  
        const imgElement = document.createElement('img');  
        imgElement.src = imgUrl;  
        imgElement.alt = "Generated Image"; // �� ���� ������  

        // ����� ������ ��� ������  
        const imageContainer = document.getElementById('imageContainer');  
        imageContainer.appendChild(imgElement);  
        
    } catch (error) {  
        console.error("Error generating image:", error);  
    }  
}  

// ������ �������  
generateImage();