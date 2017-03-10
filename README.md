# matchHeight.js

Add "matchHeight" class to elements and specify ordering with "data-matchgroup" param.
The elements in each group take the height of the largest of them.
It applies only to elements which the upper edge is located at the same height.


```html
<div class="content matchHeight" data-matchgroup="1">
	<div class="row">
		<div class="col-1 matchHeight" data-matchgroup="0">
			Lorem
		</div>
		<div class="col-1 matchHeight" data-matchgroup="0">
			Lorem
		</div>
	</div>
</div>
<aside class="matchHeight" data-matchgroup="1">
	Lorem
</aside>
```


## Copyright and license
Róbta co chceta