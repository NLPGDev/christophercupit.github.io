var quotes = ['Thank you for always doing what is best for our family.',
'You are beautiful, wonderful, amazing and I love you.',
'You are the best wife and mother anyone could ask for.',
'Wow, God has blessed us with you. How lucky we are.',
'You are the love of my life and I thank God everyday for you.',
'You always put everyone else first and we appreciate you more than you can ever know.',
'Thank you for showing me the path to God.  I will forever be grateful to you.',
'May God bless you all the days of your life.',
'You are an inspiration to me in so many ways. From your spirituality and compassion to your leadership and work ethic. You are amazing and I love you.',
'You are such an amazing person.  Your outlook on life is uplifting and inspiring. Thank you for being you.',
'The world is not always friendly, but that all goes away when I see you beautiful smile everyday.',
'You have the best personality and I am so fortunate to be a part of your life.  You are beautiful and I love you.',
'Wow, how lucky are our kids to have such an amazing, caring, selfless, positive and intelligent mother.',
'You are an amazing wife, friend and lover. You are a true gift from God and I am so lucky to have you in my life.',
'I love spending time with you. I cherish every moment we have together and thank you for always keeping God in our marriage.',
'Being around you makes everything better. The world is a better place because you are in it.',
'You light up the room with your beautiful smile and stunning eyes. You are amazing and I love you.',
'You have a wonderful sense of humor and I love laughing with you. (It is the key to longevity) I love you.',
'You always bring out the best in people and our family. Our kids are so happy and wonderful because of you.'

]

var bible = [
    'John 3:16: For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    'Jeremiah 29:11: For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.',
    '2 Corinthians 12:9: He said to me, My grace is enough for you, because power is made perfect in weakness.',
'1 Peter 5:7: Cast all your anxiety on him because he cares for you.',
'Hebrews 11:6: And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
'1 Corinthians 13:4-5: Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.',
'1 Thessalonians 5:16-18: Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.',
'Philippians 4:6-7: Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.',
'Numbers 6:24-26: The Lord bless you and keep you;the Lord make his face shine on you and be gracious to you;the Lord turn his face toward you and give you peace.',
'Isaiah 40:31: But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
'Deuteronomy 6:6-7: These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.',
'1 Corinthians 16:14: Do everything in love.',
'Proverbs 16:3: Commit to the Lord whatever you do, and he will establish your plans.',
'Jeremiah 29:11: For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
'Mark 11:24: Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.',
'Romans 15:13: May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
'Acts 16:31: They replied, Believe in the Lord Jesus, and you will be saved—you and your household.',
'2 Corinthians 5:7: For we live by faith, not by sight.',
'Proverbs 3:5-6: Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    var randomNumber = Math.floor(Math.random() * (bible.length));
    document.getElementById('quoteBible').innerHTML = bible[randomNumber];
}

//function newBible() {
  //  var randomNumber = Math.floor(Math.random() * (bible.length));
    //document.getElementById('quoteBible').innerHTML = bible[randomNumber];
//}