

if (navigator.cookieEnabled === true)
{
  // Uncomment this line to prevent showing message on every page load
   if (document.cookie.indexOf("visited") == -1)
	{
     jQuery('body').prepend('<div id="cookie" style="font-size:40%;line-height:190%"><div id="wrapper"><h2>Cookies on this website</h2><p>We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies from this website. If you would like to change your preferences you may do so by following the instructions <a href="mindex4.html#Cookie">here</a>.</p><div id="close"><a href="#" id="closecookie">&#x2716; Close</a></div><div style="clear:both"></div></div></div>');
			jQuery('head').
			append('<style type="text/css">#cookie {position:absolute;left:0;top:0;width:100%;height:auto;background:rgb(0,0,0);background:rgba(0,0,0,0.9);z-index:9999;}#cookie #wrapper {padding:20px;}#cookie h2 {color:#ffffff;padding-top:0;display:block;text-align:center;font-family:ariel,sans-serif;font-size:1.8em}#cookie p {color:#BEBEBE;display:block;font-family:ariel,sans-serif;font-size:1.4em}#cookie #close{text-align:center;}#closecookie{color:#ffffff;font-family:ariel,sans-serif;font-size:1.6em;text-decoration:none}@media only screen and (min-width: 480px) {#cookie {height:auto;}#cookie #wrapper{max-width:980px;margin-left:auto;margin-right:auto;}#cookie h2{width:18%;margin-top:0;margin-right:2%;float:left;text-align:right;}#cookie p {width:68%;margin:0 1%;float:left;}#cookie #close{width:9%;float:right;}}</style>');
			jQuery('#cookie').fadeIn("fast");
			jQuery('#closecookie').click(function() {jQuery('#cookie').fadeOut("fast");});
			document.cookie="visited=yes; expires=Thu, 31 Dec 2020 23:59:59 UTC; path=/";
		}
	}

var $form = $("form"),
  $successMsg = $(".alert");
$.validator.addMethod("letters", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$form.validate({
  rules: {
    name: {
      required: true,
      minlength: 3,
      letters: true
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Please specify your name (only letters and spaces are allowed)",
    email: "Please specify a valid email address"
  },
  submitHandler: function() {
    $successMsg.show();
  }
});