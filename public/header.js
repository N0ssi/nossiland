const header = document.createElement('header');

header.innerHTML = `
  <a id="logo"  href="index.html">
    <img src="nossiland.png" alt="Nossiland logo">
  </a>
  <p class="title">Nostalgic <b>bastard</b> :)</p>
  <nav>
    <ul>
      <li><a href="magi.asp">MAGI</a></li>
      <li><a href="about.asp">Muzack</a></li>
        <li><a href="update.html">Chronology :)</a></li>

    </ul>
  </nav>
`;

document.body.prepend(header);
