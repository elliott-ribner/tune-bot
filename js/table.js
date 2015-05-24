$('.header').click(function(){
    $(this).nextUntil('tr.header').slideToggle();
});

var chicago = "<a href='http://www.chicagomusicexchange.com/products/tune-bot-electronic-drum-tuner '>Chicago Music Exchange</a>"
var explorer = "<a href='http://www.explorersdrums.com/Tune-Bot-Electronic-Drum-Tuner_p_2351.html'>Explorers Drum Shop</a>"
var portsmouth = "<a href='http://www.ebay.com/sch/sis.html?_nkw=Tune%20Bot%20Electronic%20Drum%20Tuner%20Black%20stock%20FREE%20SHIPPING&_itemId=280965531153 '>Drum Center of Portsmouth</a>"
var sweetwater = "<a href='http://www.sweetwater.com/store/detail/TuneBot '>Sweet Water</a>"
var drumbum = "<a href='http://store.drumbum.com/skuA-262.html '>Drum Bum</a>"
var musician = "<a href='http://www.musiciansfriend.com/drums-percussion/tune-bot-electronic-drum-tuner '>Musicians Friend</a>"
var samash = "<a href='http://www.samash.com/overtone-labs-tune-bot-electronic-drum-tuner-otunebotx?errorViewName=ProductDisplayErrorView&urlLangId=-1&urlRequestType=Base '>Sam Ash</a>"
var gc = "<a href='http://www.guitarcenter.com/Tune-bot-Electronic-Drum-Tuner-107602708-i2347015.gc '>Guitar Center</a>"
var steveweiss = "<a href='http://www.steveweissmusic.com/product/overtone-labs-tune-bot-drum-tuner/metronome-tuner '>Steve Weiss</a>"
var lonestar = "<a href='http://www.lonestarpercussion.com/Practice-Classroom/Overtone-Labs-Tune-Bot-Tune-Bot.html '>Lone Star</a>"




function online() {
  $('#online').toggleClass('hidden');
};


function dumpOnline (text) {
  document.getElementById('online')
  .innerHTML =   text ;
}
