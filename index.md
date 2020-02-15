---
title: Home
exclude: true
---
<!--{% assign portfolio = site.posts | where: "category", "portfolio" | sort: 'title' %}-->

# Page Index

<ul class="list--index">
  {% for page in site.posts %}
  {% unless page.exclude == true %}
  <li><a href="{{ page.url }}"><span>{{ page.title }}</span><br><small>Template: {{ page.layout }}</small><br><small>Filename: {{ page.name }}</small></a></li>
  {% endunless %}
  {% endfor %}
</ul>