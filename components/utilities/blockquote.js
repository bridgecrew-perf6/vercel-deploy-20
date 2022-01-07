const Quote = ({ name, quote }) => (
  <blockquote className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
    <div className="stylistic-quote-mark" aria-hidden="true">
      &ldquo;
    </div>
    <p className="mb-4">{quote}</p>
    <cite className="flex items-center">
      <div className="flex flex-col items-start">
        <span className="mb-1 text-sm italic font-bold">{name}</span>
      </div>
    </cite>
  </blockquote>
);

export default Quote;
