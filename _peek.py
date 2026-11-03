import re, urllib.request
html = urllib.request.urlopen("http://127.0.0.1:1313/?v=3").read().decode("utf-8", "replace")
i = html.find('id="references"')
print(html[i:i+700].replace("\n", " "))
print("--- anchors", re.findall(r'id="ref-\d+"', html))
