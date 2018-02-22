document.write('\
<div class="navbar-fixed">\
  <ul id="dropdown1" class="dropdown-content">\
        <li class="abot"><a href="abot.html">About</a></li>\
        <li class="uses"><a href="uses.html">Potential Uses</a></li>\
        <li class="bene"><a href="bene.html">Benefits</a></li>\
        <li class="tech"><a href="tech.html">Available Technologies</a></li>\
        <li class="conc"><a href="conc.html">Safety Concerns and Liabilities</a></li>\
        <li class="cost"><a href="cost.html">Cost Overview</a></li>\
    </ul>\
    <ul id="dropdown2" class="dropdown-content" style="color: white\
        <li class="us"><a href="us.html">About Us</a></li>\
        <li class="cont"><a href="cont.html">Contact Us</a></li>\
    </ul>\
  <nav>\
    <div class="nav-wrapper">\
      <a href="index.html" class="brand-logo" style="font-size: 26px; text-decoration: none !important;">&nbsp;Aquabot<br>\
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>\
      <ul class="right hide-on-med-and-down">\
        <li class="home"><a href="index.html" style="text-decoration: none !important; color: white;">Home</a></li>\
        <li class="us cont"><a class="dropdown-button" href="#!" data-activates="dropdown2" style="text-decoration: none !important; color: white;">About Us<i class="material-icons right">arrow_drop_down</i></a></li>\
        <li class="abot uses bene tech conc cost"><a class="dropdown-button" href="#!" data-activates="dropdown1" style="text-decoration: none !important; color: white;">Aquabot<i class="material-icons right">arrow_drop_down</i></a></li>\
      </ul>\
    </div>\
  </nav>\
</div>\
<ul id="mobile-demo" class="side-nav">\
      <li><a href="index.html">Home</a></li>\
      <li class="no-padding">\
        <ul class="collapsible collapsible-accordion">\
          <li>\
            <a class="collapsible-header">About Us<i class="material-icons">arrow_drop_down</i></a>\
            <div class="collapsible-body">\
              <ul>\
              <li><a href="us.html">About Us</a></li>\
              <li><a href="cont.html">Contact Us</a></li>\
              </ul>\
            </div>\
          </li>\
        </ul>\
    </li>\
      <li class="no-padding">\
        <ul class="collapsible collapsible-accordion">\
          <li>\
            <a class="collapsible-header">Aquabot<i class="material-icons">arrow_drop_down</i></a>\
            <div class="collapsible-body">\
              <ul>\
              <li><a href="abot.html">About</a></li>\
              <li><a href="uses.html">Potential Uses</a></li>\
              <li><a href="bene.html">Benefits</a></li>\
              <li><a href="tech.html">Available Technologies</a></li>\
              <li><a href="conc.html">Safety Concerns and Liabilities</a></li>\
              <li><a href="cost.html">Cost Overview</a></li>\
              </ul>\
            </div>\
          </li>\
        </ul>\
    </li>\
</ul>');

//Side Nav code - update to collapsible
// <ul class="side-nav" id="mobile-demo">\
//   <li class="home"><a href="index.html">Home</a></li>\
//   <li><a class="dropdown-button" href="#!" data-activates="dropdown2">About Us<i class="material-icons right">arrow_drop_down</i></a></li>\
//   <li><a class="dropdown-button" href="#!" data-activates="dropdown1">the Aquabot<i class="material-icons right">arrow_drop_down</i></a></li>\
// </ul>\
