# 10 CSS challenges

<details> 
<summary> CSS </summary>

#### Flex

* `display: flex` indicate a parent of flex, you can control the direction of children, wrap them
* `display-grow: 1` at each childeren you can say in what rate become bigger if space available
* `display-shrink: 2` you can say when window hit minimum size it shrinks with speed of 2 rate compare with others
* `Flex-basis` at children, is width and hight
  * Flex-direction: row (default) children items are in a row and flex-basis indicates of width of each item
  * Flex-direction: column, items are stack on eah other vertically and each children height is based on flex-basis

* flex Shorthand
```javascript
flex: grow shrink basis
```
* `align-self`: `center`, `end`, `start`. Each child can be align vertically with axis. Default is row,so it would align each child with it

### GRID


##### GRID Container Properties

* `display`
* `grid-template-columns: repeat(4, 1fr)`, `grid-template-rows: repeat(3, 1fr)`:  repeat means devide all rows to 4 columns and 3 rows, if no repeat it does only first row, column. Then in child you can tell which item how should stay
*  `1fr 1fr` means two columns or rows with fractional unit

* `grid-template-areas`: works for visualize people, you can tell by name of each area, as `grid-template-areas: "seebird seebird seebird" ". . . oct" ` first line is one seebird which takes 3 columns in one row, and next line is 3 empty space and one octapos. It is great way to say how each part we want to fill the space
* `grid-auto-columns`,`grid-auto-rows`: It creates rows and columns if needed 
* `grid gap`: rowgap columngap 
* `align items | and justify items -`: need each its to be align with vertical axis or hcontent |`: if all items in containers are less than what needs to fill container, then it tells how to justify contents from top to down or center
* `grid-auto-flow` column or row, this specifies the flow direction of grid items

##### GRID Item Properties
* `grid-column-start`, `grid-column-end`, `grid-row-start`,
  `grid-row-end`
* `grid-column: 2 / 4` starts from 2 ends at 4
* `grid-column: 3 / span 2`: means starts from column 3 and span only 2 columns if available
* `grid-column`: grid-column: 1/-1 : means start from row one to the last column
* 
* `grid-area`
* `justify-self`: within a cell justify in - axis. This is for indivduals, we can do the same from parents for all using ` justify-items: center;`
* `align-self` within a cell justify with | axis, same the parent one is `align-items`

### Functions

* `repeat(1fr, 1fr, 200px)` this function allows to  repeat one thing serveral times
  * `grid-template-column: repeat(1fr, 1fr, 200px) 100px`this one created grids only first row has a 100px extra grid

* `repeat(2, minmax(200px, 1fr))` : means keep 2 columns/rows, and never become smaller than 200, it means it can overlay if browser become smaller than 200px. 1fr means always keep one fraction of the grid

#### autofit (no need to media anymore)

* `repeat(autofit, minmax(200px, 1fr))`: this one dynamically add columns if there is space, it remove columns when each item has less than 200px width. so it is totally responsive. `autofill` doesn't fit to the whole row, and you can see empty space
* 




</details>

<details> 
<summary> Responsive Layout </summary>

* Build a responsive webpage layout that consists of a header, navigation menu, content section, and footer. The layout should adjust and stack elements appropriately when viewed on different screen sizes
* 
</details>

<details> 
<summary> Navigation Menu </summary>

* "Create a horizontal navigation menu with dropdown submenus. The menu should display the dropdown content when the user hovers over or clicks on a menu item. Style the menu to have a clean and visually appealing design."
</details>

<details> 
<summary> Image Gallery </summary>

* "Develop an image gallery with thumbnails that enlarge when clicked. The enlarged image should be displayed in a modal or lightbox. Apply smooth transitions and a visually pleasing layout for the gallery."
</details>

<details> 
<summary> Form Styling </summary>

* "Style a registration form with various form elements such as text inputs, checkboxes, radio buttons, and a select dropdown. Enhance the form's visual appearance, ensuring it is intuitive and user-friendly."
</details>

<details> 
<summary> Card or Pricing Table </summary>

* "Design and implement a card component or pricing table using CSS. Apply appropriate styling and hover effects to create an interactive and visually appealing display. Ensure the component is responsive and adjusts well to different screen sizes."
</details>
<details> 
<summary> CSS Animations </summary>

* "Create an animated loading spinner using CSS keyframes or transform animations. The spinner should rotate continuously, giving the impression of an active process."
</details>

<details> 
<summary> Responsive Typography </summary>

* "Design a webpage layout with different sections, each having its own typography styles. Demonstrate responsive typography by adjusting the font sizes, line heights, and spacing to maintain readability across various screen sizes."
</details>

<details> 
<summary> CSS Transitions </summary>

* "Create a button that smoothly transitions its background color and text color when hovered over. Apply CSS transitions to achieve a smooth color change effect."
</details>


<details> 
<summary> Custom CSS Dropdown </summary>

* "Implement a custom dropdown menu using CSS only. Design the dropdown to appear when a user hovers over or clicks on a menu item. Ensure it has proper positioning and a visually appealing style."
</details>



<details> 
<summary> CSS Framework Customization </summary>

* "Customize the styling of a CSS framework's default button component to match a specific design requirement. Apply custom CSS to modify the button's color, size, hover effects, and typography."
</details>


