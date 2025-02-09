import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { prompt } = req.body;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `You are a theme generator. Generate a theme object with the following structure, using only Tailwind CSS classes. Return ONLY a valid JSON object with no additional formatting, markdown, or explanation. Do not use the "rounded-full" class.

Example response:
{
    "text": "text-neutral-900",
    "bg": "bg-neutral-100",
    "bgSecondary": "bg-white",
    "border": "border border-neutral-200",
    "rounded": "rounded-lg",
    "hover": "hover:bg-neutral-900/30",
    "invertedText": "text-neutral-100",
    "invertedBg": "bg-neutral-900",
    "font": "font-[Inter]"
}`,
                },
                {
                    role: 'user',
                    content: `Generate a theme based on this description: ${prompt}`,
                },
            ],
            temperature: 0.7,
        });

        const themeResponse = completion.choices[0].message.content;
        console.log('Raw theme response:', themeResponse);

        try {
            if (!themeResponse) throw Error;
            const newTheme = JSON.parse(themeResponse.trim());

            // Validate theme object has all required properties
            const requiredProps = ['text', 'bg', 'bgSecondary', 'border', 'rounded', 'hover', 'invertedText', 'invertedBg', 'font'];
            const missingProps = requiredProps.filter((prop) => !(prop in newTheme));

            if (missingProps.length > 0) {
                throw new Error(`Theme missing required properties: ${missingProps.join(', ')}`);
            }

            return res.status(200).json({ theme: newTheme });
        } catch (parseError) {
            console.error('Parse error:', parseError);
            console.error('Raw response:', themeResponse);
            return res.status(500).json({ message: 'Invalid theme format returned from AI' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Error generating theme' });
    }
}
