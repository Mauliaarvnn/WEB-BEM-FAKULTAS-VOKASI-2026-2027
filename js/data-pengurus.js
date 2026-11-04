/* =========================================================
   DATA PENGURUS BEM FAKULTAS VOKASI USU

   Fungsi:
   File ini khusus menyimpan data BPH dan departemen.

   Yang diatur di sini:
   - Nama pengurus
   - Jabatan pengurus
   - Foto pengurus
   - Nama departemen
   - Deskripsi departemen
   - Daftar anggota departemen

   Jika ingin menambah atau mengubah data pengurus,
   cukup edit file ini tanpa perlu mengubah file JavaScript lain.
========================================================= */


/* =========================================================
   DATA PENGURUS BEM
   ========================================================= */

const bphData = [
  {
    nama: "Kidung Agung Wisanto Ujung",
    jabatan: "Ketua",
    foto: "assets/bph/ketua.png",
  },

  {
    nama: "Akbar Siregar",
    jabatan: "Wakil Ketua",
    foto: "assets/bph/wakil.png",
  },

  {
    nama: "Hafiza Sabrina Sirait",
    jabatan: "Sekretaris I",
    foto: "assets/bph/sekretaris1.jpeg",
  },

  {
    nama: "Ririn Margaretha Simanjuntak",
    jabatan: "Sekretaris II",
    foto: "assets/bph/sekretaris2.png",
  },

  {
    nama: "Uly Angel Mariachi S.",
    jabatan: "Bendahara",
    foto: "assets/bph/bendahara.jpeg",
  },

  {
    nama: "Louis Pedro Sinaga",
    jabatan: "Kepala SPI",
    foto: "assets/bph/kepala-spi.png",
  },
];


/* =========================================================
   DATA DEPARTEMEN & BIRO
   ========================================================= */

const departemenData = [

  /* =========================
     HUMAS
     ========================= */

  {
    nama: "HUMAS",

    foto: "assets/departemen/humas.png",

    deskripsi:
      "Draft: mengelola hubungan masyarakat, media partner, dan kegiatan sosial kemahasiswaan.",

    anggota: [
      {
        nama: "Putri Sholehah Rumahorbo",
        jabatan: "Kepala Departemen",
      },

      {
        nama: "Ollivia Carera",
        jabatan: "Sekretaris Departemen",
      },

      {
        nama: "Aldhi Sinaga",
        jabatan: "Staff",
      },

      {
        nama: "Lady Chitra Maharani",
        jabatan: "Staff",
      },

      {
        nama: "Cicilia Siahaan",
        jabatan: "Staff",
      },

      {
        nama: "Syakilla Ajeng Sekar Ungu",
        jabatan: "Staff",
      },

      {
        nama: "Aditya Fahreza",
        jabatan: "Staff",
      },

      {
        nama: "Aris Wibawa",
        jabatan: "Staff",
      },

      {
        nama: "Hania Pretty",
        jabatan: "Staff",
      },
    ],
  },


  /* =========================
     PENDIDIKAN
     ========================= */

  {
    nama: "Pendidikan",

    foto: "assets/departemen/pendidikan.png",

    deskripsi:
      "Draft: menampung dan menindaklanjuti aspirasi akademik mahasiswa.",

    anggota: [
      {
        nama: "Patrick Nickson Hutabarat",
        jabatan: "Kepala Departemen",
      },

      {
        nama: "Vanny Anastasiya",
        jabatan: "Sekretaris Departemen",
      },

      {
        nama: "Isbarina Syafiti",
        jabatan: "Staff",
      },

      {
        nama: "Nazlah Ramadhani Siregar",
        jabatan: "Staff",
      },

      {
        nama: "Yohanes Giofani",
        jabatan: "Staff",
      },

      {
        nama: "T. Meisya Permata Sari",
        jabatan: "Staff",
      },

      {
        nama: "Exaudi Trisman U. Zebua",
        jabatan: "Staff",
      },

      {
        nama: "Risqa Fadillah Siregar",
        jabatan: "Staff",
      },
    ],
  },


  /* =========================
     MINAT DAN BAKAT
     ========================= */

  {
    nama: "Minat dan Bakat",

    foto: "assets/departemen/minat-bakat.png",

    deskripsi:
      "Draft: mengembangkan kegiatan non-akademik — olahraga, seni, dan kreativitas mahasiswa.",

    anggota: [
      {
        nama: "M. Aulia Idlal",
        jabatan: "Kepala Departemen",
      },

      {
        nama: "Salsabila Azky",
        jabatan: "Sekretaris Departemen",
      },

      {
        nama: "Arief Fatiha",
        jabatan: "Staff",
      },

      {
        nama: "Dita Apriliyanti",
        jabatan: "Staff",
      },

      {
        nama: "Syuhada",
        jabatan: "Staff",
      },

      {
        nama: "Yohana Bangun",
        jabatan: "Staff",
      },

      {
        nama: "Aulia Raja Aufhar",
        jabatan: "Staff",
      },

      {
        nama: "Viona Theresya Ginting",
        jabatan: "Staff",
      },

      {
        nama: "M. Daffa Ath Thariq Nst",
        jabatan: "Staff",
      },
    ],
  },


  /* =========================
     KEROHANIAN
     ========================= */

  {
    nama: "Kerohanian",

    foto: "assets/departemen/kerohanian.png",

    deskripsi:
      "Draft: mengelola kegiatan keagamaan dan spiritualitas mahasiswa lintas agama.",

    anggota: [
      {
        nama: "Renita E. J. Manik",
        jabatan: "Kepala Departemen",
      },

      {
        nama: "Rihan Sugandi",
        jabatan: "Sekretaris Departemen",
      },

      {
        nama: "Adriano Sukma",
        jabatan: "Sekretaris Departemen",
      },

      {
        nama: "Kiraldus Ws Sirait",
        jabatan: "Staff",
      },

      {
        nama: "Ririn Ayundha Putri",
        jabatan: "Staff",
      },

      {
        nama: "Asty Ananta Manurung",
        jabatan: "Staff",
      },

      {
        nama: "Nathalie Rona Uli Silalahi",
        jabatan: "Staff",
      },

      {
        nama: "Nuryenty Parhusip",
        jabatan: "Staff",
      },

      {
        nama: "Qeysha Dwi Putri",
        jabatan: "Staff",
      },

      {
        nama: "Hendry Glenn Yose Sinambela",
        jabatan: "Staff",
      },
    ],
  },


  /* =========================
     KEWIRAUSAHAAN
     ========================= */

  {
    nama: "Kewirausahaan",

    foto: "assets/departemen/kewirausahaan.png",

    deskripsi:
      "Draft: mengembangkan kegiatan usaha dan kewirausahaan mahasiswa.",

    anggota: [
      {
        nama: "Nazwa Amelia",
        jabatan: "Kepala Departemen",
      },

      {
        nama: "Marhysa Limbong",
        jabatan: "Sekretaris Departemen",
      },

      {
        nama: "Bariq Rizky",
        jabatan: "Staff",
      },

      {
        nama: "Imel Natalia Zega",
        jabatan: "Staff",
      },

      {
        nama: "Haura Humaira",
        jabatan: "Staff",
      },

      {
        nama: "Susan Nuraima Munthe",
        jabatan: "Staff",
      },

      {
        nama: "Ivana Rose Mentari Sitorus",
        jabatan: "Staff",
      },

      {
        nama: "Syifaul Azkia",
        jabatan: "Staff",
      },

      {
        nama: "Gilbert Partogi Michael Panggabean",
        jabatan: "Staff",
      },
    ],
  },


  /* =========================
     POSDM
     ========================= */

  {
    nama: "POSDM",

    foto: "assets/departemen/posdm.png",

    deskripsi:
      "Draft: mengelola pengembangan sumber daya mahasiswa/pengurus, evaluasi kinerja, dan apresiasi.",

    anggota: [
      {
        nama: "Beprian Tulus Rejeki Sihotang",
        jabatan: "Kepala Departemen",
      },

      {
        nama: "Mourin Balqis Afriza",
        jabatan: "Sekretaris Departemen",
      },

      {
        nama: "Syafmila Wiradhika Batubara",
        jabatan: "Staff",
      },

      {
        nama: "Egi Ceria Lumban Gaol",
        jabatan: "Staff",
      },

      {
        nama: "Muhammad Ikbar",
        jabatan: "Staff",
      },

      {
        nama: "Nayaka Tisty Luhung",
        jabatan: "Staff",
      },

      {
        nama: "Dhea Ikhwany Daulay",
        jabatan: "Staff",
      },

      {
        nama: "Dian Y.E. Ginting M",
        jabatan: "Staff",
      },
    ],
  },


  /* =========================
     KOMINFO
     ========================= */

  {
    nama: "KOMINFO",

    foto: "assets/departemen/kominfo.png",

    deskripsi:
      "Draft: mengelola informasi, publikasi kegiatan, dan komunikasi organisasi ke mahasiswa.",

    anggota: [
      {
        nama: "M Ihsan Sadik",
        jabatan: "Kepala Departemen",
      },

      {
        nama: "Bintang Natalie",
        jabatan: "Sekretaris Departemen",
      },

      {
        nama: "Elreno Noelson Henoch Hasani",
        jabatan: "Staff",
      },

      {
        nama: "Maria Siahaan",
        jabatan: "Staff",
      },

      {
        nama: "Putri Ramadhani",
        jabatan: "Staff",
      },

      {
        nama: "Zahura Hilmi Hanifa",
        jabatan: "Staff",
      },

      {
        nama: "Maulia Revani Putri",
        jabatan: "Staff",
      },

      {
        nama: "Adella Aulia Br Silaban",
        jabatan: "Staff",
      },

      {
        nama: "Syaikhah Azzahra Nasir",
        jabatan: "Staff",
      },
    ],
  },


  /* =========================
     KASTRAD
     ========================= */

  {
    nama: "KASTRAD",

    foto: "assets/departemen/kastrad.png",

    deskripsi:
      "Draft: mengelola kajian isu kampus/sosial dan advokasi mahasiswa.",

    anggota: [
      {
        nama: "Regina Novi Intan Malau",
        jabatan: "Kepala Departemen",
      },

      {
        nama: "Torkis Brian Siahaan",
        jabatan: "Sekretaris Departemen",
      },

      {
        nama: "Fhadhlan Sean",
        jabatan: "Staff",
      },

      {
        nama: "Rachel Amanda",
        jabatan: "Staff",
      },

      {
        nama: "Vera Grace",
        jabatan: "Staff",
      },

      {
        nama: "Dwi Fortuna",
        jabatan: "Staff",
      },

      {
        nama: "Adriel Sahala Cordas Pangaribuan",
        jabatan: "Staff",
      },

      {
        nama: "Manuela Stefani",
        jabatan: "Staff",
      },
    ],
  },
];


/* =========================================================
   RENDER BPH
   ========================================================= */

function renderBPH() {

  const container = document.getElementById("bph-grid");

  if (!container) return;


  /*
    Data BPH dibuat 3 kali agar carousel
    memiliki cukup item untuk digeser.
  */

  const cards = [
    ...bphData,
    ...bphData,
    ...bphData,
    ...bphData,
    ...bphData,
    ...bphData,
    ...bphData,


  
  ];


  container.innerHTML = cards
    .map(
      (p) => `
        <div class="person-card">

          <img
            src="${p.foto}"
            alt="${p.jabatan} BEM Fakultas Vokasi USU"
            draggable="false"
          />

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