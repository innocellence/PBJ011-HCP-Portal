---
title: Home
exclude: true
---

<ul class="list--index">
  {% for page in site.pages %}
  {% unless page.exclude == true %}
  <li><a href="{{ page.url }}"><span>{{ page.title }}</span><br><small>Template: {{ page.layout }}</small><br><small>Filename: {{ page.name }}</small></a></li>
  {% endunless %}
  {% endfor %}
</ul>