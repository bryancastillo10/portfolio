export const baseUrl = (() => {
    if (typeof window === 'undefined') {
      // Server-side
      if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
      }
      return process.env.NODE_ENV === 'production' 
        ? 'https://bryan-castillo-portfolio.vercel.app/'  
        : 'http://localhost:3000';
    } else {
      // Client-side
      return '';
    }
  })();