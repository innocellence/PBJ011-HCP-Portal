---
title: Home
layout: default
exclude: true
---
{% assign files = site.pages | where_exp: "page", "page.exclude != true" | sort: "name" %}

<div class="stackedit">
  <div class="stackedit__html wide">
    <h1>Page Index</h1>
    <ul class="list--index">
      {% for file in files %}
      {% if file.name contains "TEMPLATE" %}
      <li class="template"><a href="{{ file.url | prepend: site.baseurl }}">Template: {{ file.name }}</a></li>
      {% else %}
      <li><a href="{{ file.url | prepend: site.baseurl }}"><span>{{ file.title }}</span><br><small>Template: {{ file.layout }}</small><br><small>Filename: {{ file.name }}</small></a></li>
      {% endif %}
      {% endfor %}
    </ul>
  </div>
</div>