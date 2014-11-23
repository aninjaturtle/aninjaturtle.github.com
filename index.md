---
layout: page
title: William Dildine's Portfolio
tagline: Always Designing
---
{% include JB/setup %}

<div class="container"><div id="image-container" style="margin-left:auto; margin-right:auto;"><img src="{{BASE_PATH}}/images/cartoon-self.png"></div>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To-Do

This theme is still unfinished. If you'd like to be added as a contributor, [please fork](http://github.com/plusjade/jekyll-bootstrap)!
We need to clean up the themes, make theme usage guides with theme-specific markup examples.


