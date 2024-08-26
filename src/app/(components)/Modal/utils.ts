import { MajorProjectTypes } from "@/app/api/project/major/data";
import { MinorProjectTypes } from "@/app/api/project/minor/data";

// To distinguish major project from minor project
function isMajorProject(project: MajorProjectTypes | MinorProjectTypes): project is MajorProjectTypes {
    return Array.isArray((project as MajorProjectTypes).imgPath);
  }
  

// To split long strings into paragraphs
function splitIntoParagraphs(text: string, targetWordCount: number = 50): string[] {
    const sentences = text.replace(/\s*\\\s*/g, ' ').split(/(?<=[.!?])\s+/);
    const paragraphs: string[] = [];
    let currentParagraph: string[] = [];
    let wordCount = 0;
  
    for (const sentence of sentences) {
      const sentenceWordCount = sentence.split(/\s+/).length;
      
      if (wordCount + sentenceWordCount > targetWordCount && currentParagraph.length > 0) {
        // start a new paragraph
        paragraphs.push(currentParagraph.join(' '));
        currentParagraph = [sentence];
        wordCount = sentenceWordCount;
      } else {
        // else, add the sentence to the current paragraph
        currentParagraph.push(sentence);
        wordCount += sentenceWordCount;
      }
    }
    // add remaining sentences as the last paragraph
    if (currentParagraph.length > 0) {
      paragraphs.push(currentParagraph.join(' '));
    }
  
    return paragraphs;
  }

export {isMajorProject, splitIntoParagraphs};