import { HfInference } from "@huggingface/inference";

// تعريف رمز الوصول الشخصي من Hugging Face
const HF_TOKEN = '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';

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

        const blob = response; // تحويل الاستجابة إلى Blob

        // إنشاء URL من Blob
        const imgUrl = URL.createObjectURL(blob);

        // إنشاء عنصر الصورة
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.alt = "Generated Image"; // تعيين النص البديل للصورة

        // إضافة الصورة إلى الحاوية
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.appendChild(imgElement);

    } catch (error) {
        console.error("Error generating image:", error);
    }
}

// تشغيل الدالة
generateImage();
