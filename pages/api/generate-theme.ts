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
                    content:
                        'You are a theme generator. Generate Tailwind CSS color schemes based on user descriptions. Return only the theme object in the exact format needed. Do not style it in markdown. The theme object must return the following fields: text, bg, bgSecondary, border, rounded, hover, invertedText, invertedBg, font. You are not limited to using default tailwind colors, you can use hex colors if it suits the theme better. You must use tailwind classes though.',
                },
                {
                    role: 'user',
                    content: `Generate a theme based on this description: ${prompt}`,
                },
            ],
            temperature: 0.7,
        });

        // Parse the AI response and format it into a theme
        const themeResponse = completion.choices[0].message.content;
        const newTheme = JSON.parse(themeResponse || '');

        return res.status(200).json({ theme: newTheme });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Error generating theme' });
    }
}
