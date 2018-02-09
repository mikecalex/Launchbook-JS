// Exercise: Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];

// Exercise: Find the sidebar on the left by using its id.
document.getElementById('sidebar-left');

// Exercise: Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];

// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');

// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];

// Exercise: Find the last comment on the page.
let comment = document.getElementsByClassName('comments');
let lastCommentIndex = comment.length -1;
comment[lastCommentIndex];

// Exercise: Find the fourth comment on the page. Make sure you grab the fourth *comment* rather than the fourth *block* of comments. You may need more than one line of code!
document.getElementsByClassName('panel')[3];

// Exercise: Find one of the ads in the sidebar and hide them.
let adSlot = document.getElementsByClassName('ad-slot')[0];
adSlots.style.visibility = 'hidden';

// Exercise: Set the visibility on the ad that you hid in the previous exercise to make it visible again.
let adSlot = document.getElementsByClassName('ad-slot')[0];
adSlots.style.visibility = 'visible';

// Exercise: Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let adPic = document.getElementsByClassName('ad-slot')[0];
let imageSrc = adPic.getElementsByTagName('img')[0];
imageSrc.setAttribute('src', 'http://placebear.com/200/300');

// Exercise: Find Sam's post and change its text to something incredible.
let commentSec = document.getElementsByClassName('post media')[3];
let commentBlock = commentSec.getElementsByClassName('media-body')[0];
let comment = commentBlock.getElementsByTagName('p')[0];
comment.innerHTML = 'Something Incredible';

// Exercise: Find the first post and add the `.post-liked` class to it.
let posts = document.getElementsByClassName('posts')[0];
let firstPost = posts.getElementsByClassName('post media')[0];
firstPost.className = 'post post-liked media'

// Exercise: Find the second post and remove the `.post-liked` class.
let posts = document.getElementsByClassName('posts')[0];
let secondPost = posts.getElementsByClassName('post media')[1];
secondPost.className = 'post media'
