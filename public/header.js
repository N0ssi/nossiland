const header = document.createElement('header');

header.innerHTML = `
  <a href="index.html">
    <img src="nossiland.png" alt="Nossiland logo">
  </a>
  <p class="title">Nostalgic <b>bastard</b> :)</p>
  <nav>
    <ul>
      <li><a href="update.html">Update</a></li>
      <li><a href="contact.asp">Fun and ames</a></li>
      <li><a href="about.asp">Muzack</a></li>
    </ul>
  </nav>
`;

document.body.prepend(header);
