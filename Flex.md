
## Definations

* Flex Container: is parent where we can define axis by flow and tell is wrap(means make it as a whole if shrink goes to next line) `flex-wrap` and `flex-flow`

* Children: you can tell allow grow if space is available, `flex-grow` or become small by a rate `flex-shrink`



```html
<div class="container">
    <div class="item">1</div>
    <div class="item2">2</div>
    <div class="item">3</div>
  </div>
  <button id="reverse-btn">click</button>


  <style>
  .container {
    background-color: lightgreen;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;

  }

  .item2 {
    flex-grow: 1;
    flex-shrink: 4;
    /* width: 350px;  */
    flex-basis: 150px;
    border: 1px solid black;
    background-color: #eaeaea;
    padding: 20px;
}
  .item {
    flex-grow: 0;
    /* width: 350px; */
    flex-basis: 150px;
    border: 1px solid black;
    background-color: #eaeaea;
    padding: 20px;
  }

  .reverse-columns {
  flex-flow: row-reverse;
}
  </style>

  <script>
    const reverseBtn = document.getElementById("reverse-btn");
const container = document.querySelector(".container");

reverseBtn.addEventListener("click", function() {
    container.classList.toggle("reverse-columns");
});
  </script>
```


* Main Axis is left to right of flex container in one row 
* Main Start is the begining of flex container which ends to Main End
* Lenght from Main start to Main End is knows as Main Size
* Corss Axis is perpendicular to Main axis and just like main axis, cross axis has cross start and cross end ( top and below of the height of container)
## Flex
* One container embrace all div inside it so we define two class as
```javascript
<style>
.flex-container{
 display: flex; // remove it and try without it to see differences 
 border: solid green 2px;
 width: 300px; // this command would filed all gaps in a row 
}
.flex-item{
border: solid black 2px;
}
</style>
<div class="flex-container">
     <div class="flex-item">A
     </div>
     <div class="flex-item">B
     </div>
     <div class="flex-item">C
     </div> 
</div>
```
* The result is side by side three boxes in one row
* Flex is all about the container and direct descendant of that container and by default are left to right. The lenght from first decendant child to the last one is known as main size and we call it main start and main end. Cross size is called to wide of the decendent boxes.
### .flex-container
* This section is only about .flex-container so changes are inside that class only
* Add it to `.flex-container` to shrink the container and adapt the width with children 
```javascript
display: inline-flex;
```
* In default flex direction is row but with `flex-direction` we can change it as `reverse` or `column` or `column-reverse`
```css
flex-direction: row-reverse; // flex-direction: column;
```
* If so many items inside container, we define how flex item respond in this scenario 
* No wrap is defualt Single line format prevent content from wraping, so if there are too many items in one row it cuts them
* Multi line wraping make them into another line when can not fit in one row
```css
flex-wrap: wrap;  // or wrap-reverse //  // nowrap 
```
* if we change the flex direction now then everything change accordingly
```css
flex-wrap: wrap;
flex-direction: column-reverse;
width: 55%;
height: 30em;
```
* To have both above there is a shorthand as `flex-flow`
```css
flex-flow: column wrap-reverse;
```
### .flex-item
* by default is A,B,C but we can change the order by adding number to each .flex-item as 
```css
order: 3
``` 
* The default value of order is zero.
* Key point is Order changes only the visual and not logical way to reading the content. os it is good only for web to see the results and not selection 
* `Flex Grow factor` is the core of flex. It tells how much given item will stretch up to other items with in that container in order to fill out free space.  Each item if it has felx grow 1 then they fill out the container equaly so inside .felx-item ass below 
```css
flex-grow: 1;
```
* But we can assign one box to 2 or 3 then it would takes 2 or 3 times more space in a row than others (only if there are extra spaces it grows like that)
* Flex Shrink Factor is opposite of flex-grow. It controls how spaces distributed when not spaces are there. If we have 4 items with `width: 15em` then they fit in a row but in fact the total width is bigger than display. by adding shrink to one item we see it would be 2 or 3 times smaller than other items
```css
flex-shrink: 2;
```
* if we set to zero then it would be the original size
* Flex basis is like pix or percentage when we assign to each box as below the default size would be 10em instead of auto resizing 
```css
flex-basis: 10em; /* 1em = 10px */
```
* short version of these properties is as 
```css
flex: flex-grow flex-shrink flex-basis
flex: 0 1 auto /* 0: Item do not grow to fill the available space in row 1: if the container shrink the items would be assign same width to fill out container auto: default size is their size*/
flex: 0 0 auto  /* It does not fill the container in one row either the items are smaller than container or bigger than container */
```
#### Alignments 
### .flex-container

* By `Justify-content` we can align items along Main Axis ( default is left to right) in  `.flex-container` we have 
```javascript
justify-content: flex-start; / it is defualt and assing items inside container left to right 
justify-content: flex-end; /* it reverse above  */
justify-content: space-between;
```
* Still inside the `.flex-container` we can assign items as 
```css
align-items: flex-start; /* flex-end add all items to bottom of container cross axis  */
align-items: center; /* it align them in center of container axis */
align-items: baseline; /* is more appropriate it align items based on their based line */
align-items: stretch; /* align entire height of contaienr;  
```
### .flex-items
* We can align items individually in each one we say
```css
align-self: flex-end; /* align-self: flex-start; align-self: stretch*/
```
* if we change flex direction then flex axis will change and this alignment would change as well. 


# Grid
```style
<style>
.flex-container{
 display: grid; // remove it and try without it to see differences 
 border: solid green 2px;
}
.flex-item{
border: solid black 2px;
}
</style>
<div class="flex-container">
     <div class="flex-item">A
     </div>
     <div class="flex-item">B
     </div>
     <div class="flex-item">C
     </div> 
</div>
```
#### Columns
* The containers stack on top of each other. by replacing display with `display: inline-grid` we would shrink the main container as narrow as item's width
* Define columns and rows for grid system as in flex-container as
```css
grid-template-columns: 6em 1em 6em 1em 6em 1em 6em 1em; 
```
* This grid actually creates areas for items to live there. Now assign each item by saying start or end where as below inside each
`.flex-items`
```css
grid-column-start: 1;
grid-column-end:2;
```
* And in the next item we should define 
```css
grid-column-start: 3;
grid-column-end:4; // or 6
```
#### Rows
* In `flex-container` define rows as 
```css
grid-template-rows: 6em 1em 6em 1em 6em 1em 6em 1em;
```
* Now grid container is taller
* Inisde each item class `.flex-items` we can deifne start and end 
```css
grid-row-start: 1;
grid-row-end: 2;
```
#### Auto Grid
* By removing everything in apex-items then we would have automatic streching out/in inside the boxe by having only something like this inside container
```css
grid-template-columns: 10em 6em 6em 6em;
grid-template-rows: 6em 6em;
```
* We are able to change the order of items by adding order property and also 
#### Grid Shorthand
```css
grid-template-columns:
grid-template-rows:
OR 
grid: column column / row row; // like grid: 10em 6em 6em 6em / 6em 6em;
```
* Also there is 
```css
grid-row-start
grid-row-end
OR 
grid-row: row-start / row-end;
and same for columns
grid-column: column-start / column-end;
OR 
grid-area: row-start / column-start/ row-end / column end;
```
* We have a repeat 
```css
grid-template-columns: 10em repeat(3, 6em);
```
* An example of a page
```csss
.flex-container{
  padding: 4%;
  display: grid;
  border: solid green 2px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10%;
}
.flex-item{
border: solid black 2px;
padding: 2%;
margin: 1%;
}
</style>
<div class="flex-container">
     <div class="flex-item">A
     </div>
     <div class="flex-item">B
     </div>
     <div class="flex-item">C
     </div>
</div>
```
### Images
* To have images all same size we should put them inside a contianer with a fix height and % width and then in parent assign overflow:hidden like this [example](https://stackoverflow.com/questions/19414856/how-can-i-make-all-images-of-different-height-and-width-the-same-via-css)
* Just add footer and header as 
```css
.flex-container{
  padding: 4%;
  display: grid;
  border: solid green 2px;
}

.flex-body{
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 10% 10% 10% 10% 10% 10% 10%;
}
.flex-item{
border: solid black 2px;
padding: 2%;
margin: 0%;
}

.header {
  border: solid blue 2px;
  padding: 0%;
  margin: 0%;
}
.footer {
  border: solid blue 2px;
  padding: 0%;
  margin: 0%;
}
</style>

<div className="flex-container">
             <div className="header">A
             </div>
     <div className="flex-body">
             <div className="flex-item">B
             </div>
             <div className="flex-item">C
             </div>
       </div>
       <div className="footer">D
       </div>
     </div>

```
