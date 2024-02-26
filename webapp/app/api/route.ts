import { auth } from '@clerk/nextjs';
import { HfInference } from '@huggingface/inference'
import { NextResponse } from 'next/server';


const hf = new HfInference(process.env.HF_KEY_WRITE)

export async function POST(
    req: Request
  ) {
    try{
        const { userId } = auth();
        const body = await req.json();
        const { messages  } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
          }
      
          if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
          }

        const response = await hf.translation({
            model: 'facebook/mbart-large-50-many-to-many-mmt',
            inputs: messages,
            parameters: {
                "src_lang": "en_XX",
                "tgt_lang": "fr_XX"
            }
        })
        return NextResponse.json(response);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
  