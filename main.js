document.addEventListener('DOMContentLoaded', function () {
  const lomake = document.getElementById('rekisterointiLomake');

  lomake.addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelectorAll('#rekisterointiLomake div').forEach(div => {
      const virheDiv = div.querySelector('div');
      if (virheDiv) virheDiv.textContent = '';
    });
    document.getElementById('onnistumisViesti').textContent = '';

    let virheita = false;

    const kayttajaID = document.getElementById('kayttajaID').value.trim();
    if (kayttajaID.length < 6) {
      document.getElementById('kayttajaIDVirhe').textContent = 'Käyttäjä ID:n tulee olla vähintään 6 merkkiä.';
      virheita = true;
    }

    const salasana = document.getElementById('salasana').value;
    const erikois = /[!@£\$€&%#]/;
    const iso = /[A-ZÅÄÖ]/;
    const numero = /[0-9]/;
    if (salasana.length < 6 || !numero.test(salasana) || !iso.test(salasana) || !erikois.test(salasana)) {
      document.getElementById('salasanaVirhe').textContent =
        'Salasanan tulee olla vähintään 6 merkkiä ja sisältää numeron, ison kirjaimen sekä erikoismerkin (!@£$€&%#).';
      virheita = true;
    }

    const nimi = document.getElementById('nimi').value.trim();
    if (nimi.length < 2) {
      document.getElementById('nimiVirhe').textContent = 'Nimi on pakollinen ja vähintään 2 merkkiä pitkä.';
      virheita = true;
    }

    const osoite = document.getElementById('osoite').value.trim();
    if (osoite.length === 0) {
      document.getElementById('osoiteVirhe').textContent = 'Osoite on pakollinen.';
      virheita = true;
    }

    const maa = document.getElementById('maa').value;
    if (maa === "") {
      document.getElementById('maaVirhe').textContent = 'Valitse maa.';
      virheita = true;
    }

    const postinumero = document.getElementById('postinumero').value.trim();
    if (!/^\d{5}$/.test(postinumero)) {
      document.getElementById('postinumeroVirhe').textContent = 'Postinumeron tulee olla tarkalleen 5 numeroa.';
      virheita = true;
    }

    const sahkoposti = document.getElementById('sahkoposti').value.trim();
    const spRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!spRegex.test(sahkoposti)) {
      document.getElementById('sahkopostiVirhe').textContent = 'Anna kelvollinen sähköpostiosoite.';
      virheita = true;
    }

    const sukupuoli = document.querySelector('input[name="sukupuoli"]:checked');
    if (!sukupuoli) {
      document.getElementById('sukupuoliVirhe').textContent = 'Valitse sukupuoli.';
      virheita = true;
    }

    const kieli = document.querySelector('input[name="kieli"]:checked');
    if (!kieli) {
      document.getElementById('kieliVirhe').textContent = 'Valitse kieli.';
      virheita = true;
    }

    if (!virheita) {
      document.getElementById('onnistumisViesti').textContent = 'Lomake lähetetty onnistuneesti!';
      lomake.reset();
    }
  });
});