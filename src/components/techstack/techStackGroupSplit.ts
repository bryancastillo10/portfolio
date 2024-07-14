import techStacks from "@/constants/techStack";  
const chunkArray = (array: any[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

const techRows = chunkArray(techStacks, Math.ceil(techStacks.length / 7));

export { techRows };