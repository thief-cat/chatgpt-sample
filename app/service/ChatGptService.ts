import { Configuration, OpenAIApi } from "openai";
require('dotenv').config();
export class ChatGptService {
  public gpt = async (req?: Request): Promise<any> => {
    const model= "gpt-3.5-turbo";
    const configuration = new Configuration({
      apiKey: process.env.api_key,
      organization: process.env.org_id
    });
    const openai = new OpenAIApi(configuration);
    // 使用できるモデルの一覧
    const response = await openai.listModels();

    try{
      const completion = await openai.createChatCompletion(
        {
          model: model,
          messages: [
            {
              role: "user", content: "DNSの仕組みについて100字以内で教えて下さい"
            }
          ],
        },
      );
      return {
        "answer": completion.data.choices[0].message?.content
      }
    }catch(e){
      return {
        "error": e
      }
    }
  }
}