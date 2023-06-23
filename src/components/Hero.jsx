import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className='flex items-center gap-2'>
          <img
            src={logo}
            alt='summarizer logo'
            className='h-9 object-contain'
          />
          <p className='text-3xl text-white font-extrabold'>Summarizer</p>
        </div>

        <button
          type='button'
          onClick={() => window.open('https://github.com/salimi-my')}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='purple_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with AI Summarizer, an open-source article
        summarizer that transforms lengthy articles into clear and concise
        summaries.
      </h2>
    </header>
  );
};

export default Hero;
