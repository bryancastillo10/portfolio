export const baseUrl = typeof window === 'undefined'
? process.env.VERCEL_URL // For production
? `https://${process.env.VERCEL_URL}`
: 'http://localhost:3000' // For development
: ''; 
