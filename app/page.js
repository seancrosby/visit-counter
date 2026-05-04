import { Redis } from '@upstash/redis';

export const dynamic = 'force-dynamic';

const redis = Redis.fromEnv();

export default async function Home() {
  let visits = 0;
  try {
    visits = await redis.incr('visits');
  } catch (error) {
    console.error('Failed to increment visit counter:', error);
  }

  return (
    <main style={{
      border: '4px double black',
      padding: '2rem',
      backgroundColor: '#ffffff',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ color: 'blue', textDecoration: 'underline' }}>
        Welcome to My Personal Home Page!
      </h1>
      
      <p style={{ fontSize: '1.2rem' }}>
        This site is hosted on <b>Vercel</b> and built with <b>Next.js</b>.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGY5eGd3eGd3eGd3eGd3eGd3eGd3eGd3eGd3eGd3eGd3eGd3eGd3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpx4Z6aGpHu8/giphy.gif" 
          alt="Under Construction"
          style={{ width: '150px' }}
        />
      </div>

      <hr style={{ border: '1px solid black' }} />

      <footer style={{ marginTop: '2rem' }}>
        <p style={{ fontWeight: 'bold' }}>
          YOU ARE VISITOR NUMBER:
        </p>
        <div style={{
          backgroundColor: '#000',
          color: '#0f0',
          display: 'inline-block',
          padding: '5px 10px',
          fontFamily: 'monospace',
          fontSize: '2rem',
          border: '2px inset #888'
        }}>
          {visits.toString().padStart(6, '0')}
        </div>
        <p style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
          Best viewed in Netscape Navigator at 800x600 resolution.
        </p>
      </footer>
    </main>
  );
}
