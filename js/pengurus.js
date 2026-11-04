/* =========================================================
   RENDER PENGURUS

   Fungsi:
   File ini bertugas menampilkan data BPH dan departemen
   ke halaman website berdasarkan data dari
   `data-pengurus.js`.

   Yang diatur di sini:
   - Menampilkan kartu BPH
   - Menampilkan kartu departemen

   File ini tidak menyimpan data pengurus.
   Data tetap berada di `data-pengurus.js`.
========================================================= */


/* =========================================================
   RENDER BPH
========================================================= */

function renderBPH() {

  const container = document.getElementById("bph-grid");

  if (!container) return;


  /*
    Data BPH dibuat 3 kali supaya carousel
    memiliki cukup isi untuk melakukan looping.
  */

  const cards = [
    ...bphData,
    ...bphData,
    ...bphData
  ];


  container.innerHTML = cards
    .map(
      (p) => `
        <div class="person-card">

          <img
            src="${p.foto}"
            alt="${p.jabatan} BEM Fakultas Vokasi USU"
            draggable="false"
          >

          <div class="person-info">

            <h3>
              ${p.nama}
            </h3>

            <p>
              ${p.jabatan}
            </p>

          </div>

        </div>
      `
    )
    .join("");
}



/* =========================================================
   RENDER DEPARTEMEN
========================================================= */

function renderDepartemen() {

  const container = document.getElementById("dept-list");

  if (!container) return;


  /*
    Data departemen dibuat 3 kali seperti BPH.
    Tujuannya agar carousel dapat bergerak
    secara terus-menerus.
  */

  const cards = [
    ...departemenData,
    ...departemenData,
    ...departemenData
  ];


  container.innerHTML = cards
    .map(
      (d, index) => {

        /*
          Index asli digunakan untuk modal.

          Karena data diulang 3 kali,
          index kartu harus dikembalikan
          ke index asli departemenData.
        */

        const originalIndex =
          index % departemenData.length;


        return `
          <button
            class="dept-card"
            type="button"
            data-dept-index="${originalIndex}"
          >

            <div class="dept-card-image">

              <img
                src="${d.foto}"
                alt="${d.nama}"
                draggable="false"
              >

            </div>


            <div class="dept-card-info">

              <h3>
                ${d.nama}
              </h3>

              <span>
                Lihat bidang &rsaquo;
              </span>

            </div>

          </button>
        `;
      }
    )
    .join("");
}



/* =========================================================
   INIT PENGURUS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderBPH();

  renderDepartemen();

  setupBPHCarousel();

  setupDepartemenCarousel();

  setupDepartemenModal();

});