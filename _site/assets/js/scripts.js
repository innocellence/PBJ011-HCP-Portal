///////////
// External Links
///////////
function externalLinks() {
  $("a[href^='http']").attr("target","_blank").addClass("ext");
}

///////////
// Generate TOC
///////////
function generateTOC() {
  if ($('.content > h1').length > 0) {
    $('#toc').prepend('<nav class="toc"><ul></ul></nav>');
  }
  $('.content').find('> h1').each(function() {
    var $item = $(this);
    var $id = $(this).attr('id');
    var li = $('<li/>');
    var a = $('<a/>', {text: $item.text(), href: '#' + $id, title: $item.text()});
    a.appendTo(li);
    $('#toc .toc ul').append(li);

    var url = window.location.href;
    ($item).attr("href", url + "#" + $id);
  });
}

///////////
// Smooth Scroll
///////////
function smoothScroll () {
  $('a[href^="#"]').click(function() {
    var $target = $(this.hash);
    var hash = this.hash;
    if ($target.length == 0) $target = $('a[name="' + this.hash.substr(1) + '"]');
    if ($target.length == 0) $target = $('html');
    console.log('📜ing');
    // Scroll to the element
    $('html, body').animate({ scrollTop: $target.offset().top }, 800, function (){
        location.hash = hash;
    });
  return false;
  });
}

///////////
// Back to Top
///////////
function backtoTop() {
  var offset = 300,
  $back_to_top = $('#top_button');
  
  $(window).scroll(function(){
    
    if ($(this).scrollTop() > offset) { 
      $back_to_top.addClass('visible');
    } else { 
      $back_to_top.removeClass('visible');
    } 
  });
}


// -------------------------------------------------------------- //
// INIT                                                           //
// -------------------------------------------------------------- //

function init() {
//  backtoTop();
  generateTOC();
//  smoothScroll();
  externalLinks();
}


// -------------------------------------------------------------- //
// Document Ready                                                 //
// -------------------------------------------------------------- //

$(document).ready(function () {  
  
  ///////////
  // Captain's Log
  ///////////
  console.log('\u00A9 Copyright 2015 & Beyond. InnoCellence');
  
  ///////////
  // Make it so
  ///////////
  init();
  console.log('💯 Ready');
});