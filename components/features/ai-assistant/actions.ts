"use server";

import { GoogleGenAI } from "@google/genai";

export async function sendMessage(prompt: string) {
  try {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    
    if (!apiKey) {
      throw new Error("Google Gemini API key is not configured");
    }

    const genAI = new GoogleGenAI({ apiKey });
    // const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // const result = await model.generateContent({
    //   contents: [
    //     {
    //       parts: [
    //         {
    //           text: prompt
    //         }
    //       ],
    //       role: "user"
    //     }
    //   ]
    // });

    // return {
    //   response: result.response
    // };

    const result = await genAI.models.generateContent({
        model: "gemini-2.0-flash-001",
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ],
            role: "user"
          }
        ]
    })

    return {
      response: result.text
    };

  } catch (error) {
    console.error("Error in sendMessage:", error);
    throw error;
  }
}