document.querySelector('.new-quote').addEventListener('click', ()=>{
    let text = document.querySelector('.quote')
    let author = document.querySelector('.author')
    
    let quotes = [
        {quote: 'True terror is to wake up one morning and discover that your high school classs is running the country.', 
        person: 'Kurt Vonnegut'},
        {quote: 'Doing nothing is very hard to do. You never know when you are finished.', 
        person: 'Leslie Nielsen'},
        {quote: 'Dont wait around for other people to be happy for you. Any happiness you get you haveve got to make yourself', 
        person: 'Alice Walker'},
        {quote: 'Morality is only moral when it is voluntary.', 
        person: 'Lincoln Steffens'},
        {quote: 'One of the lessons of history is that nothing is often a good thing to do and always a clever thing to say', 
        person: 'Will Durant'},
        {quote: 'It is a funny thing about life; if you refuse to accept anything but the best, you very often get it.', 
        person: 'W. Somerset Maugham'},
        {quote: 'The best way to predict the future is to create it.', 
        person: 'Peter F. Drucker'},
        {quote: 'Amateurs wait for inspiration. The rest of us just get up and go to work', 
        person: 'Chuck Close'},
        {quote: 'If you have a job without any aggravations, you don’t have a job.', 
        person: 'Malcolm Forbes'},
        {quote: 'If you are too careful, you are so occupied in being careful that you are sure to stumble over something.', 
        person: 'Gertrude Stein'},
        {quote: 'Be like a duck. Calm on the surface but always paddling like the dickens underneath.', 
        person: 'Michael Caine'},
        {quote: 'One of the best parts of growing older? You can flirt all you like since you’ve become harmless.', 
        person: 'Liz Smith'},
        ];

    let index= Math.floor(Math.random()* quotes.length)
    text.innerText = quotes[index].quote
    author.innerText = quotes[index].person
})