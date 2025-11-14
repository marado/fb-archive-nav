Alright, you decided to download your Facebook archive. You found it has a
`your_posts__check_ins__photos_and_videos_1.html` file within, and that's what
you need to navigate (or let others navigate) through your facebook history,
isn't it?

Unfortunately, there are changes you want to make to it:
* You want to announce it as your activity, not the readers;
* You want to be able to navigate by year;
* You want to hide all those empty entries that are showed up in there;
* You want the page data to be shown in chronologic order...

This project lets you do that by simply making two changes on your
`your_posts__check_ins__photos_and_videos_1.html` file:

Add this line to the head of the page:
```
<script type="text/javascript" src="fb-archive-nav.js"></script>
```
Change the body tag `<body class="_5vb_ _2yq _a7o5">` to say, instead,
```
<body class="_5vb_ _2yq _a7o5" onLoad="fbArchiveNav();">
```

And of course, have that html file and the `fb-archive-nav.js` file from this
repository together in the same directory. That's it, have fun!

NOTE: this script is Licensed as AGPLv3.

### status

Not everything is implemented already...

[ ] identity
[ ] year navigation
[x] hiding empty entries
[ ] chronologic order
