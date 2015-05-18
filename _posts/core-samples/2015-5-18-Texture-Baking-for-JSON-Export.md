---
layout: post
category : blog
tagline: Cycles baking and Three.js
tags : [three.js, javascript, json, blender]
img : /images/blog/b15.jpg
blurb:  Baking and Importing a Cycles Texture
---
{% include JB/setup %}

##Blender Cycles Baked Open Shading Language Texture and Three.js
This demo covers baking Sony's OSL shaders onto a model and then exporting the texture for three.js.  It also covers how to calculate the vertex normals after they have been imported as the JSON loader does not import this information (i.e. it allows for the SmoothShading and FlatShading function to work properly in three.js).


##Code Pen
<p data-height="468" data-theme-id="0" data-slug-hash="xGOYvB" data-default-tab="result" data-user="wpdildine" class='codepen'>See the Pen <a href='http://codepen.io/wpdildine/pen/xGOYvB/'>Blender to THREE.js JSON Open Shading Language Texture Mapping</a> by Patrick (<a href='http://codepen.io/wpdildine'>@wpdildine</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


##Code Work Flow
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='http://www.youtube.com/embed/9MUTzn86XXQ' frameborder='0' allowfullscreen></iframe></div>
