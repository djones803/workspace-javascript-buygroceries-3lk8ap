/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$(".hot").each(function() {
    $(this).removeClass("hot");
    $(this).addClass("cool");
  });

// traverse the elements

$("#one").next().next().text("milk");
// add a new element


// add by clicking the plus sign
document.getElementById("add").addEventListener("click", addElement);
$('add').click(addElement);
function addElement() {
  // add a new element
      // add a new element
      $('#todo').append("<li>input type= 'text> </li>")

      $('input').blur(funtion(){
        $(this).parent().addClass('cool');
        
      }

}

$("li").click(changeStyle);

//  click the li element will change the changeStyle
function changeStyle() {
if($(this).hasClass('complete')){
  $(this).removeClass('complete');
  $(this).addClass('cool');
}
}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element

 
}
