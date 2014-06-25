jquery-kcmd
============


これは何？
--------

Webページにコマンド入力機能を付与するためのjQueryプラグインです。


使い方
------

``` html
<script type="text/javascript" src="PATH_TO_JQUERY/jquery-X.X.X.js"></script>
<script type="text/javascript" src="src/jquery.kcmd.js"></script>
<script type="text/javascript">
  $(document).kcmd('↑↑↓↓←→←→BA', function() {
    console.log('CMD');
  });
</script>
```
