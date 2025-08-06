import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

export interface VideoData {
  content: string;
  description: string;
  title?: string;
  author?: string;
}

export class YoutubeService {
  private model: ChatGoogleGenerativeAI;
  private prompt: PromptTemplate;

  constructor() {
    this.model = new ChatGoogleGenerativeAI({
      model: "gemini-1.5-flash",
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
      maxOutputTokens: 2048,
    });

    this.prompt = new PromptTemplate({
      inputVariables: ["content", "description"],
      template: `I need you to create comprehensive study notes from the following YouTube video transcript.

TRANSCRIPT: {content}

VIDEO DESCRIPTION: {description}

Generate detailed, well-structured notes that:
1. Identify and explain the main concepts and key points
2. Include important definitions, formulas, or methodologies
3. Organize the content with clear headings and subheadings
4. Highlight critical insights that shouldn't be missed
5. Include examples or case studies mentioned in the video
6. Add visual elements like bullet points and numbered lists for better readability
7. Summarize complex ideas in simple language
8. Include a brief conclusion that synthesizes the main takeaways

The notes should provide the same level of knowledge as watching the full video.`,
    });
  }

  async loadVideoData(url: string): Promise<VideoData> {
    try {
      const loader = YoutubeLoader.createFromUrl(url, {
        language: "en",
        addVideoInfo: true,
      });

      const docs = await loader.load();
      
      if (!docs || docs.length === 0) {
        throw new Error("No content found for this video");
      }

      return {
        content: docs[0].pageContent,
        description: docs[0].metadata.description || "",
        title: docs[0].metadata.title || "",
        author: docs[0].metadata.author || "",
      };
    } catch (error) {
      throw new Error(`Failed to load video data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async generateNotes(videoData: VideoData): Promise<string> {
    try {
      const formattedTemplate = await this.prompt.format({
        content: videoData.content,
        description: videoData.description,
      });

      const response = await this.model.invoke(formattedTemplate);
      return response.content.toString();
    } catch (error) {
      throw new Error(`Failed to generate notes: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async processVideo(url: string): Promise<{ notes: string; metadata: Omit<VideoData, 'content'> }> {
    const videoData = await this.loadVideoData(url);
    const notes = await this.generateNotes(videoData);
    
    return {
      notes,
      metadata: {
        description: videoData.description,
        title: videoData.title,
        author: videoData.author,
      }
    };
  }
}
