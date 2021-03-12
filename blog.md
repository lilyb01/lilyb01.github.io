---
layout: default
title: blog
---

<img src="{{ site.baseurl }}/assets/img/dividers/stars.gif"><br><br>
<b>the blog</b><br><br>
<img src="{{ site.baseurl }}/assets/img/dividers/stars.gif"><br><br>

<ul>
    {% for post in site.posts %}
        <li>
            <b><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></b>
            <p style="font-size: 10px;">{{ post.date | date_to_string }} - {{ post.author }}</p>
            {{ post.excerpt }}
        </li>
        <img src="{{ site.baseurl }}/assets/img/dividers/linea.gif">
        <br><br>
    {% endfor %}
</ul>