
/* =========================================================
   MODAL DEPARTEMEN

   Fungsi:
   File ini mengatur modal yang muncul ketika kartu
   departemen diklik.

   Yang diatur di sini:
   - Membuka modal departemen
   - Menampilkan foto departemen
   - Menampilkan nama dan deskripsi departemen
   - Menampilkan jumlah anggota
   - Menampilkan kepala departemen
   - Menampilkan sekretaris
   - Menampilkan anggota lainnya
   - Menampilkan informasi program kerja
   - Menampilkan tautan kalender kerja sementara
   - Menutup modal
   - Menutup modal dengan tombol close
   - Menutup modal saat klik backdrop
   - Menutup modal dengan tombol Escape
========================================================= */

function setupDepartemenModal() {
  const modal = document.getElementById("dept-modal");

  if (!modal) return;

  const photo = modal.querySelector(".dept-modal-photo");
  const title = modal.querySelector(".dept-modal-title");
  const desc = modal.querySelector(".dept-modal-desc");
  const count = modal.querySelector(".dept-modal-member-count");
  const leader = modal.querySelector(".dept-modal-leader");
  const secretary = modal.querySelector(".dept-modal-secretary");
  const members = modal.querySelector(".dept-modal-members");
  const proker = modal.querySelector(".dept-modal-proker");
  const closeButton = modal.querySelector(".dept-modal-close");

  // ========================================
  // MENUTUP MODAL
  // ========================================

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  // ========================================
  // MEMBUKA MODAL DEPARTEMEN
  // ========================================

  document.querySelectorAll(".dept-card").forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.deptIndex);
      const dept = departemenData[index];

      if (!dept) return;

      // ----------------------------------------
      // FOTO DAN INFORMASI DEPARTEMEN
      // ----------------------------------------

      photo.src = dept.foto;
      photo.alt = `Foto ${dept.nama}`;

      title.textContent = dept.nama;

      desc.textContent =
        dept.deskripsi ||
        "Informasi departemen belum ditambahkan.";

      // ----------------------------------------
      // JUMLAH ANGGOTA
      // ----------------------------------------

      const daftarAnggota = dept.anggota || [];

      count.textContent = `${daftarAnggota.length} anggota`;

      // ----------------------------------------
      // KEPALA DEPARTEMEN
      // ----------------------------------------

      const ketua = daftarAnggota.find((a) =>
        a.jabatan.toLowerCase().includes("kepala")
      );

      leader.textContent = ketua?.nama || "Belum diisi";

      // ----------------------------------------
      // SEKRETARIS DEPARTEMEN
      // ----------------------------------------

      const sekretaris = daftarAnggota.find((a) =>
        a.jabatan.toLowerCase().includes("sekretaris")
      );

      secretary.textContent = sekretaris?.nama || "Belum diisi";

      // ----------------------------------------
      // ANGGOTA LAINNYA
      // ----------------------------------------

      const anggotaLain = daftarAnggota.filter(
        (a) => a !== ketua && a !== sekretaris
      );

      members.innerHTML = anggotaLain.length
        ? anggotaLain
            .map(
              (a) => `
                <li>
                  <span>${a.nama}</span>
                  <em>${a.jabatan}</em>
                </li>
              `
            )
            .join("")
        : "<li>Tidak ada data anggota.</li>";

      // ========================================
      // PROGRAM KERJA DAN KALENDER KABINET
      // ========================================

      proker.innerHTML = `
        <div class="proker-note">

          <span class="proker-note-label">
            Program Kerja Dalam Penyusunan
          </span>

          <p>
            Program kerja departemen masih dalam tahap
            penyusunan dan penyesuaian.
          </p>

          

          

        </div>
      `;

      // ----------------------------------------
      // TAMPILKAN MODAL
      // ----------------------------------------

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    });
  });

  // ========================================
  // TOMBOL CLOSE
  // ========================================

  closeButton?.addEventListener("click", closeModal);

  // ========================================
  // KLIK BACKDROP
  // ========================================

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ========================================
  // TOMBOL ESCAPE
  // ========================================

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}
