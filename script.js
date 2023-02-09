$(function () {
  $('#text-container').draggable();
});

var posinblock = 1;
var stanza = [4, 7, 1, 6, 5, 5, 5, 2, 3];
var counter = -1;
var currentblock = 0;
var currentlen = 3;
var totalstanza = stanza.length;

function revealNext() {
  let text = document.getElementById('text');
  let page = document.getElementById('page');
  let count = document.getElementById('count');
  let number = document.getElementById('number');

  if (counter < currentlen - 1) {
    counter += 1;
    text.innerHTML += block[counter];
    posinblock += 1;
    count.innerHTML = posinblock + '/' + stanza[currentblock];
  } else if (currentblock < totalstanza - 1) {
    text.innerHTML = '';
    number.innerHTML = '';
    currentblock += 1;
    currentlen += stanza[currentblock];
    number.innerHTML = 'Page ' + currentblock;
    posinblock = 0;

    counter += 1;
    text.innerHTML += block[counter];
    posinblock += 1;
    count.innerHTML = posinblock + '/' + stanza[currentblock];
  } else if ((currentblock = totalstanza - 1)) {
    text.innerHTML = "<br><a href='https://www.rence.la'>goodbye</a>";
    page.style.display = 'none';
  }
}

function revealPrev() {
  if (counter < 0) {
    alert('already going back?');
  } else {
    alert('there is no going back.');
  }
}

var block = [
  // "To Ask <b>Why We Fight</b>?",
  "<p>If it's the <a href='https://genius.com/Lana-del-rey-love-song-lyrics' target='blank'>best</a></p>",
  '<p>pass the test,</p>',
  '<p>then <mark><i>yes</i></mark>.</p>',

  "<p>Last couple of years have been <b><a href='https://www.nps.gov/chcu/index.htm' target='blank'>a mad trip</a></b>.</p>",
  "<p>I've been a <b>Ferrari</b>.</p>",
  '<p>Going too fast to see</p>',
  "<p>all the <a href='https://genius.com/Bebe-rexha-ferrari-lyrics' target='blank'>good things</a> in front of me.</p>",
  '<p>And the <i>wicked cadavers</i>,</p>',
  '<p>the <i>portraits in the attic</i>,</p>',
  '<p>are not ready to be found.</p>',

  "<p><i>Because</i> <a href='https://genius.com/Imagine-dragons-bad-liar-lyrics' target='blank'><b>terrors</b></a> <i>don't prey on</i> <b>innocent</b> <i>victims.</i></p>",

  '<p><i>But who will save my young blood?</i></p>',
  '<p>Swallowing <mark>nostalgia</mark>,</p>',
  '<p>chasing it with lime,</p>',
  "<p>Don't help me forget:</p>",
  "<p><b>the <a href='https://open.spotify.com/track/3kywzyEr7V106Un5cDyh12?si=gklq_GqmTqqGwfvbRv5bdg' target='blank'>ordinary</a> things I'd been,<b></p>",
  "<p><b>the ordinary tears I'd spent.</b></p>",

  '<p>Are we <i>ever</i> ready to see ourselves for who we are?</p>',
  '<p>True bliss is not knowing who we are.</p>',
  "<p><b>Is it <a href='https://genius.com/Lana-del-rey-love-song-lyrics' target='blank'>safe</a>? Is it safe to be who we are?</b></p>",
  "<p>But we're not what we <a href='https://genius.com/Lorde-liability-reprise-lyrics' target='blank'>thought</a> we are.</p>",
  "<p><i>We don't know who we thought we are.</i></p>",

  '<p>Then go get <mark>running</mark>, go get <mark>hurry</mark>.</p>',
  "<p>While it's <b>light out</b>, while it's <b>early</b>.</p>",
  "<p>Before I start to <a href='https://genius.com/Troye-sivan-lost-boy-lyrics' target='blank'>miss</a>,</p>",
  '<p><i>any</i> part of this,</p>',
  '<p>and change my mind <b>forever</b>.</p>',

  "<p>So I'll <b>pick the truth</b> I believe in</p>",
  "<p>like a <a href='https://genius.com/Bastille-doom-days-lyrics' target='blank'>bad religion</a>.</p>",
  "<p>And I'll take away the matches</p>",
  "<p>before <a href='https://genius.com/Taylor-swift-dear-john-lyrics' target='blank'>fire</a> could catch me.</p>",
  "<p><i><b>So don't look now.</b></i></p>",

  "<p><b>那条没完没了的路</b><br><a href='https://en.wikipedia.org/wiki/On_the_Road' target='blank'>All that road going</a></p>",
  '<p><b>一切怀有梦想的人</b><br>All the people dreaming</p>',

  '<p>May the world continue to be lovely.</p>',
  '<p><b>May I always be mine.</b></p>',
  '<p>So help me god.</p>',
];
