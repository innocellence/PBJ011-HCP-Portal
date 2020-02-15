---
title: Home
layout: default
exclude: true
---
{% assign files = site.pages | where_exp: "page", "page.exclude != true" %}


# Page Index

<ul class="list--index">
  {% for file in files %}
  <li><a href="{{ page.url }}"><span>{{ file.title }}</span><br><small>Template: {{ file.url }}</small><br><small>Filename: {{ file.name }}</small></a></li>
  {% endfor %}
</ul>