---
# heypumpk.in home page

layout: default
title: t h e m e s
---

<img src="/assets/img/dividers/stars.gif"><br><br>
<b>holy shit themes</b><br><br>
<img src="/assets/img/dividers/stars.gif"><br><br>
<p>this is just an experiment tbh. my friend visited my site with some dark mode addon in his browser and i thought the result looked cool. but of course i don't want to lose my pink theme :)</p>
<p>visitor beware, however. this functionality uses cookies. i'm not tracking you or anything, it's literally there only for remembering what you chose.</p>

<a href="#" onClick="themeApply('styles.css')">heypumpk.in</a> <br>
<a href="#" onClick="themeApply('dark.css')">dark</a> <br>
<a href="#" onClick="themeApply('bgs.css')">backgrounds :)</a> <br>
<a href="#" onClick="themeApply('topbartest.css')">top bar test</a> <br>

<script>
    function themeApply(theme) { 
        document.getElementById('themecss').href = '/assets/css/' + theme;
        document.cookie = "theme=" + theme +"; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    };
</script>