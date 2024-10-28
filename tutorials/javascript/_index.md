<h1>JavaScript Tutorials</h1>
<ul>
{% for page in site.pages %}
  {% if page.path contains 'tutorials/javascript' %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
