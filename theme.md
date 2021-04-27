---
# heypumpk.in home page

layout: default
title: a mistake
---

<img src="{{ site.baseurl }}/assets/img/dividers/stars.gif"><br><br>
<b>themes</b><br><br>
<img src="{{ site.baseurl }}/assets/img/dividers/stars.gif"><br><br>
<p>this is just an experiment tbh. my friend visited my site with some dark mode addon in his browser and i thought the result looked cool. but of course i don't want to lose my pink theme :)</p>
<p>visitor beware, however. this functionality uses cookies. i'm not tracking you or anything, it's literally there only for remembering what you chose.</p> <br>

<a href="#" onClick="applyCookie('random')">randomize (just the good ones tho)</a> <br><br>
<a href="#" onClick="themeApply('default.css')">heypumpk.in</a> <br>
<a href="#" onClick="themeApply('dark.css')">dark</a> <br>
<a href="#" onClick="themeApply('bgs.css')">backgrounds :)</a> <br>
<a href="#" onClick="themeApply('topbartest.css')">top bar test (<b>broken</b> as of march 11th 2021)</a> <br>
<a href="#" onClick="themeApply('weather.css')">weather rain</a><br>
<a href="#" onClick="themeApply('weather_purple.css')">weather night</a><br>
<a href="#" onClick="themeApply('weather_fall.css')">weather fall</a><br>
<a href="#" onClick="themeApply('weather_heypumpkin.css')">weather heypumpk.in pink</a><br>
<a href="#" onClick="themeApply('weathersvg.css')">weather (vector)</a><br>

<script>
    function themeApply(theme) { 
        document.getElementById('themecss').href = '{{ site.baseurl }}/assets/css/' + theme;
        document.cookie = "theme=" + theme +"; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    };

    function applyCookie(theme) {
        document.cookie = "theme=" + theme +"; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }
</script>