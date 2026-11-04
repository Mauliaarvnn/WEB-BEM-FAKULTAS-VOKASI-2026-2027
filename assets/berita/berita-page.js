document.addEventListener("DOMContentLoaded", () => {
  const featured = document.querySelector("#news-featured");
  const list = document.querySelector("#berita-list");
  const loadMore = document.querySelector("#news-load-more");
  const emptyMessage = document.querySelector("#news-empty");

  if (!featured || !list || !loadMore) return;

  /* =====================================================
     DATA BERITA BEM FAKULTAS VOKASI USU
     ===================================================== */

  // Membuat 5 path foto otomatis berdasarkan tanggal berita.
  // Format nama foto:
  // 24-06-2026-1.jpg sampai 24-06-2026-5.jpg

 function buatFoto(kodeFoto, ekstensi = "jpg") {
  return Array.from({ length: 5 }, (_, index) =>
    `assets/berita/${kodeFoto}-${index + 1}.${ekstensi}`
  );
}

  const beritaData = [
    // BERITA UNGGULAN
    {
      id: "pelantikan-ketua-wakil-bem",
      tanggal: "2026-06-24",
      kategori: "Organisasi",
      judul: "Pelantikan Ketua dan Wakil Ketua BEM Fakultas Vokasi USU Kabinet Vokasi Berdaya Periode 2026/2027",
      ringkasan:
        "Pelantikan Kidung Agung Wisanto Ujung sebagai Ketua BEM dan M. Akbar Siregar sebagai Wakil Ketua BEM Fakultas Vokasi USU periode 2026/2027.",
      narasi: [
        "Pada 24 Juni 2026, telah dilaksanakan pelantikan Ketua dan Wakil Ketua Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara periode 2026/2027. Dalam kepengurusan ini, Kidung Agung Wisanto Ujung resmi mengemban amanah sebagai Ketua BEM, didampingi oleh M. Akbar Siregar sebagai Wakil Ketua BEM.",
        "Pelantikan ini menjadi langkah awal bagi kepemimpinan baru dalam menjalankan roda organisasi mahasiswa di lingkungan Fakultas Vokasi USU. Dengan amanah yang diberikan, Ketua dan Wakil Ketua diharapkan mampu mengoordinasikan kepengurusan serta membawa semangat baru dalam menjalankan berbagai kegiatan dan program kerja organisasi.",
        "Melalui pelantikan ini, diharapkan Kidung Agung Wisanto Ujung dan M. Akbar Siregar dapat menjalankan tanggung jawab dengan penuh dedikasi, membangun kolaborasi yang baik, serta membawa BEM Fakultas Vokasi USU menjadi organisasi yang aktif dan berdampak positif bagi mahasiswa selama periode 2026/2027."
      ],
      foto: buatFoto("24-06-2026")
    },

    {
      id: "audiensi-perdana-ditmawalumni",
      tanggal: "2026-06-25",
      kategori: "Kelembagaan",
      judul: "BEM Fakultas Vokasi USU Laksanakan Audiensi Perdana Bersama Ditmawalumni USU",
      ringkasan:
        "Audiensi perdana BEM Fakultas Vokasi bersama Ditmawalumni USU sebagai langkah awal membangun komunikasi dan koordinasi dengan pihak universitas.",
      narasi: [
        "Pada 25 Juni 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melaksanakan audiensi perdana bersama Direktorat Mahasiswa, Prestasi, dan Alumni (Ditmawalumni) USU. Kegiatan ini menjadi salah satu langkah awal dalam membangun komunikasi dan menjalin hubungan koordinasi dengan pihak universitas.",
        "Audiensi ini menjadi wadah bagi BEM Fakultas Vokasi untuk memperkenalkan kepengurusan Kabinet Vokasi Berdaya periode 2026/2027 sekaligus membangun komunikasi terkait peran dan kegiatan organisasi mahasiswa. Pertemuan ini juga menjadi kesempatan untuk menyampaikan aspirasi serta menjalin hubungan yang baik dengan pihak Ditmawalumni USU.",
        "Melalui audiensi perdana ini, diharapkan terjalin komunikasi dan koordinasi yang berkelanjutan antara BEM Fakultas Vokasi USU dan Ditmawalumni USU guna mendukung pelaksanaan kegiatan kemahasiswaan selama periode kepengurusan 2026/2027."
      ],
      foto: buatFoto("25-06-2026")
    },

    {
      id: "pelantikan-him-psikologi",
      tanggal: "2026-08-03",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi Hadiri Pelantikan BEM Fakultas Psikologi Periode 2026/2027",
      ringkasan:
        "BEM Fakultas Vokasi menghadiri kegiatan pelantikan BEM Fakultas Psikologi periode 2026/2027 sebagai bentuk partisipasi dan silaturahmi antarlembaga mahasiswa.",
      narasi: [
        "Pada 3 Agustus 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Pelantikan BEM Fakultas Psikologi Periode 2026/2027.",
        "Kehadiran perwakilan BEM Fakultas Vokasi dalam kegiatan tersebut merupakan bentuk partisipasi dalam agenda kelembagaan mahasiswa sekaligus upaya mempererat hubungan dan silaturahmi antarlembaga kemahasiswaan di lingkungan Universitas Sumatera Utara.",
        "Melalui kehadiran dalam kegiatan ini, diharapkan hubungan baik dan komunikasi antarlembaga mahasiswa dapat terus terjalin, sehingga membuka peluang kolaborasi dalam berbagai kegiatan kemahasiswaan pada masa mendatang."
      ],
      foto: buatFoto("03-08-2026")
    },

    {
      id: "distribusi-almamater",
      tanggal: "2026-08-04",
      tanggalSelesai: "2026-08-06",
      kategori: "Kegiatan",
      judul: "BEM Fakultas Vokasi Berdaya Turut Membantu Pendistribusian Almamater kepada Mahasiswa Baru 2026",
      ringkasan:
        "BEM Fakultas Vokasi turut membantu proses pendistribusian jaket almamater USU kepada mahasiswa baru selama 4–6 Agustus 2026.",
      narasi: [
        "Pada 4–6 Agustus 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya turut membantu proses pendistribusian jaket almamater Universitas Sumatera Utara kepada mahasiswa baru Tahun 2026.",
        "Kegiatan pendistribusian dilaksanakan selama tiga hari dengan jadwal yang telah dibagi berdasarkan program studi. Pada Selasa, 4 Agustus 2026, pembagian ditujukan kepada mahasiswa D4 Perbankan dan Keuangan serta D4 Akuntansi Sektor Publik pada pukul 09.00–12.00 WIB, kemudian dilanjutkan dengan D4 Teknologi Rekayasa Instrumentasi dan D4 Statistika pada pukul 13.00–16.00 WIB.",
        "Selanjutnya, pada Rabu, 5 Agustus 2026, pembagian berlangsung untuk mahasiswa D4 Manajemen Bisnis Pariwisata dan D3 Perpajakan pada pukul 09.00–12.00 WIB, serta D3 Bahasa Inggris dan D3 Teknik Informatika pada pukul 13.00–16.00 WIB.",
        "Pada Kamis, 6 Agustus 2026, pendistribusian dilanjutkan kepada mahasiswa D4 Administrasi Perkantoran Digital dan D4 Kimia Terapan pada pukul 09.00–12.00 WIB, kemudian D3 Metrologi dan Instrumentasi, D3 Analis Farmasi dan Makanan, serta D3 Bahasa Jepang pada pukul 13.00–16.00 WIB.",
        "Dalam kegiatan ini, BEM Fakultas Vokasi turut berkontribusi membantu kelancaran proses pembagian almamater agar mahasiswa baru dapat menerima jaket almamater sesuai dengan jadwal program studi masing-masing.",
        "Melalui keterlibatan tersebut, Kabinet Vokasi Berdaya berupaya mendukung pelayanan kepada mahasiswa baru serta menjalankan peran aktif organisasi mahasiswa dalam membantu berbagai kegiatan di lingkungan Fakultas Vokasi Universitas Sumatera Utara."
      ],
      foto: buatFoto("04-08-2026")
    },

    {
      id: "pelantikan-himaktra",
      tanggal: "2026-08-05",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi Hadiri Pelantikan HIMAKTRA Periode 2026/2027",
      ringkasan:
        "Perwakilan BEM Fakultas Vokasi menghadiri pelantikan Himpunan Mahasiswa Kimia Terapan (HIMAKTRA) periode 2026/2027.",
      narasi: [
        "Pada 5 Agustus 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Pelantikan Himpunan Mahasiswa Kimia Terapan (HIMAKTRA) Periode 2026/2027.",
        "Kehadiran perwakilan BEM Fakultas Vokasi dalam kegiatan tersebut merupakan bentuk partisipasi dan dukungan terhadap keberlanjutan organisasi kemahasiswaan di lingkungan Fakultas Vokasi. Kegiatan pelantikan ini juga menjadi momentum bagi kepengurusan baru HIMAKTRA untuk memulai tanggung jawab dalam menjalankan roda organisasi selama satu periode ke depan.",
        "Melalui kehadiran dalam kegiatan ini, diharapkan hubungan silaturahmi, komunikasi, dan koordinasi antara BEM Fakultas Vokasi dengan HIMAKTRA dapat terus terjalin serta membuka peluang kolaborasi dalam berbagai kegiatan kemahasiswaan."
      ],
      foto: buatFoto("05-08-2026")
    },

    {
      id: "pelantikan-bem-vokasi",
      tanggal: "2026-08-10",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi USU Resmi Dilantik, Kabinet Vokasi Berdaya Memulai Kepengurusan Periode 2026/2027",
      ringkasan:
        "Pelantikan BEM Fakultas Vokasi USU periode 2026/2027 menandai dimulainya kepengurusan Kabinet Vokasi Berdaya.",
      narasi: [
        "Pada 10 Agustus 2026, telah dilaksanakan Pelantikan Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara Periode 2026/2027 dengan nama Kabinet Vokasi Berdaya. Kegiatan ini menjadi momentum dimulainya masa kepengurusan baru dalam menjalankan roda organisasi kemahasiswaan di lingkungan Fakultas Vokasi.",
        "Pelantikan tersebut menandai dimulainya tanggung jawab seluruh pengurus dalam menjalankan tugas dan amanah organisasi selama satu periode ke depan. Melalui Kabinet Vokasi Berdaya, BEM Fakultas Vokasi diharapkan mampu menjadi wadah aspirasi mahasiswa serta berperan aktif dalam menghadirkan berbagai program kerja yang bermanfaat bagi mahasiswa dan fakultas.",
        "Dengan dimulainya kepengurusan Kabinet Vokasi Berdaya Periode 2026/2027, diharapkan seluruh pengurus dapat menjalankan amanah dengan penuh tanggung jawab, menjunjung tinggi solidaritas, serta mewujudkan visi dan misi kabinet selama masa kepengurusan."
      ],
      foto: buatFoto("10-08-2026")
    },

    {
      id: "pkkmb-2026",
      tanggal: "2026-08-12",
      tanggalSelesai: "2026-08-14",
      kategori: "Kegiatan",
      judul: "BEM Fakultas Vokasi Berdaya Berkontribusi dalam Pelaksanaan PKKMB 2026/2027",
      ringkasan:
        "Kabinet Vokasi Berdaya turut berkontribusi dalam pelaksanaan PKKMB melalui Kantin Vokasi, perwakilan PIC program studi, serta dukungan teknis kegiatan.",
      narasi: [
        "Pada 12–14 Agustus 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya turut berkontribusi dalam pelaksanaan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) Tahun Akademik 2026/2027. Keterlibatan ini merupakan bentuk dukungan BEM terhadap Fakultas dalam menyambut mahasiswa baru dan memastikan kelancaran rangkaian kegiatan PKKMB.",
        "Dalam pelaksanaannya, BEM menghadirkan Kantin Vokasi yang dikelola oleh Divisi Kewirausahaan sebagai salah satu bentuk kontribusi dalam mendukung kebutuhan selama kegiatan berlangsung. Selain itu, BEM mengirimkan perwakilan dari masing-masing program studi untuk bertugas sebagai Person in Charge (PIC) yang berkoordinasi dan bekerja sama dengan PIC dari Himpunan Mahasiswa (HIMA) masing-masing jurusan.",
        "Tidak hanya itu, beberapa bidang dalam kepengurusan BEM, seperti bidang Perlengkapan, Keamanan, dan Acara, juga turut mengambil peran dalam mendukung kebutuhan teknis serta kelancaran pelaksanaan kegiatan. Kolaborasi ini menjadi bentuk sinergi antara BEM, HIMA, dan pihak Fakultas dalam menjalankan rangkaian PKKMB.",
        "Melalui berbagai kontribusi tersebut, Kabinet Vokasi Berdaya berupaya menjalankan peran organisasi mahasiswa tidak hanya sebagai wadah aspirasi, tetapi juga sebagai mitra Fakultas dalam mendukung kegiatan kemahasiswaan. Diharapkan kerja sama dan kontribusi yang terjalin dapat memberikan pengalaman PKKMB yang baik bagi mahasiswa baru Fakultas Vokasi Universitas Sumatera Utara."
      ],
      foto: buatFoto("12-08-2026")
    },

    {
      id: "ibadah-kebaktian-pmb",
      tanggal: "2026-08-29",
      kategori: "Kegiatan",
      judul: "BEM Fakultas Vokasi Hadiri Ibadah Kebaktian PMB Kristen Bersama UKM KMK USU",
      ringkasan:
        "BEM Fakultas Vokasi menghadiri kegiatan ibadah kebaktian penyambutan mahasiswa baru Kristen bersama UKM KMK USU.",
      narasi: [
        "Pada 29 Agustus 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Ibadah Kebaktian Penyambutan Mahasiswa Baru (PMB) Kristen Fakultas Vokasi yang diselenggarakan bersama Unit Kegiatan Mahasiswa Kebaktian Mahasiswa Kristen (UKM KMK) USU.",
        "Kegiatan ini menjadi bagian dari rangkaian penyambutan mahasiswa baru Kristen di lingkungan Fakultas Vokasi melalui kegiatan ibadah dan kebersamaan. Kehadiran BEM Fakultas Vokasi merupakan bentuk dukungan terhadap kegiatan kemahasiswaan sekaligus upaya membangun hubungan yang harmonis dengan berbagai organisasi mahasiswa.",
        "Melalui partisipasi dalam kegiatan ini, diharapkan terjalin hubungan yang baik antara BEM, UKM KMK USU, dan mahasiswa Fakultas Vokasi, serta terciptanya lingkungan kampus yang menjunjung tinggi kebersamaan dan saling menghargai."
      ],
      foto: buatFoto("29-08-2026")
    },

    {
      id: "pelantikan-imtri",
      tanggal: "2026-09-04",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi Hadiri Pelantikan IMTRI Periode 2026/2027",
      ringkasan:
        "BEM Fakultas Vokasi menghadiri pelantikan Ikatan Mahasiswa Teknologi Rekayasa Instrumentasi (IMTRI) periode 2026/2027.",
      narasi: [
        "Pada 4 September 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Pelantikan Ikatan Mahasiswa Teknologi Rekayasa Instrumentasi (IMTRI) Periode 2026/2027.",
        "Kegiatan pelantikan ini menjadi momentum dimulainya kepengurusan baru IMTRI dalam menjalankan tugas dan tanggung jawab organisasi selama satu periode ke depan. Kehadiran perwakilan BEM Fakultas Vokasi merupakan bentuk partisipasi dan dukungan terhadap keberlanjutan organisasi kemahasiswaan di lingkungan Fakultas Vokasi.",
        "Melalui kegiatan ini, diharapkan hubungan silaturahmi dan koordinasi antara BEM Fakultas Vokasi dengan IMTRI dapat terus terjalin serta mendorong terciptanya kolaborasi yang positif dalam berbagai kegiatan kemahasiswaan."
      ],
      foto: buatFoto("04-09-2026")
    },

    {
      id: "pelantikan-himmi",
      tanggal: "2026-09-16",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi Hadiri Pelantikan HIMMI Periode 2026/2027",
      ringkasan:
        "BEM Fakultas Vokasi menghadiri pelantikan Himpunan Mahasiswa D3 Metrologi dan Instrumentasi (HIMMI) periode 2026/2027.",
      narasi: [
        "Pada 16 September 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Pelantikan Himpunan Mahasiswa D3 Metrologi dan Instrumentasi (HIMMI) Periode 2026/2027.",
        "Kegiatan pelantikan ini menjadi momentum dimulainya kepengurusan baru HIMMI dalam menjalankan tugas dan tanggung jawab organisasi selama satu periode ke depan. Kehadiran perwakilan BEM Fakultas Vokasi merupakan bentuk partisipasi dan dukungan terhadap keberlanjutan organisasi kemahasiswaan di lingkungan Fakultas Vokasi.",
        "Melalui kegiatan ini, diharapkan hubungan silaturahmi dan koordinasi antara BEM Fakultas Vokasi dengan HIMMI dapat terus terjalin serta mendorong terciptanya kolaborasi yang positif dalam berbagai kegiatan kemahasiswaan."
      ],
      foto: buatFoto("16-09-2026")
    },

    {
      id: "pelantikan-hinode",
      tanggal: "2026-09-17",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi Hadiri Pelantikan Pengurus HINODE Periode 2026/2027",
      ringkasan:
        "BEM Fakultas Vokasi menghadiri pelantikan pengurus Himpunan Mahasiswa D3 Bahasa Jepang (HINODE) periode 2026/2027.",
      narasi: [
        "Pada 17 September 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Pelantikan Pengurus Himpunan Mahasiswa Program Studi D3 Bahasa Jepang (HINODE) Periode 2026/2027.",
        "Kegiatan pelantikan ini menjadi momentum dimulainya kepengurusan baru HINODE dalam menjalankan tugas dan tanggung jawab organisasi selama satu periode ke depan. Kehadiran perwakilan BEM Fakultas Vokasi merupakan bentuk partisipasi dan dukungan terhadap keberlanjutan organisasi kemahasiswaan di lingkungan Fakultas Vokasi.",
        "Melalui kegiatan ini, diharapkan hubungan silaturahmi dan koordinasi antara BEM Fakultas Vokasi dengan HINODE dapat terus terjalin serta mendorong terciptanya kolaborasi yang positif dalam berbagai kegiatan kemahasiswaan."
      ],
      foto: buatFoto("17-09-2026")
    },

    {
      id: "pelantikan-himapdi",
      tanggal: "2026-09-19",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi Hadiri Pelantikan Pengurus HIMAPDI Periode 2026/2027",
      ringkasan:
        "BEM Fakultas Vokasi menghadiri pelantikan Himpunan Mahasiswa D4 Administrasi Perkantoran Digital (HIMAPDI) periode 2026/2027.",
      narasi: [
        "Pada 19 September 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Pelantikan Pengurus Himpunan Mahasiswa D4 Administrasi Perkantoran Digital (HIMAPDI) Periode 2026/2027.",
        "Kegiatan pelantikan ini menjadi momentum dimulainya kepengurusan baru HIMAPDI dalam menjalankan tugas dan tanggung jawab organisasi serta melanjutkan berbagai program kerja selama masa kepengurusan. Kehadiran perwakilan BEM Fakultas Vokasi merupakan bentuk partisipasi dan dukungan terhadap keberlanjutan organisasi kemahasiswaan di lingkungan Fakultas Vokasi.",
        "Melalui kegiatan ini, diharapkan hubungan silaturahmi dan koordinasi antara BEM Fakultas Vokasi dengan HIMAPDI dapat terus terjalin serta membuka peluang kolaborasi dalam berbagai kegiatan kemahasiswaan di masa mendatang."
      ],
      foto: buatFoto("19-09-2026")
    },

    {
      id: "pelantikan-himti",
      tanggal: "2026-09-21",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi Hadiri Pelantikan Pengurus HIMTI Periode 2026/2027",
      ringkasan:
        "BEM Fakultas Vokasi menghadiri pelantikan Himpunan Mahasiswa D3 Teknik Informatika (HIMTI) periode 2026/2027.",
      narasi: [
        "Pada 21 September 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Pelantikan Pengurus Himpunan Mahasiswa D3 Teknik Informatika (HIMTI) Periode 2026/2027.",
        "Kegiatan pelantikan ini menjadi momentum dimulainya kepengurusan baru HIMTI dalam menjalankan tugas dan tanggung jawab organisasi selama satu periode ke depan. Kehadiran perwakilan BEM Fakultas Vokasi merupakan bentuk partisipasi dan dukungan terhadap keberlanjutan organisasi kemahasiswaan di lingkungan Fakultas Vokasi.",
        "Melalui kegiatan ini, diharapkan hubungan silaturahmi dan koordinasi antara BEM Fakultas Vokasi dengan HIMTI dapat terus terjalin serta mendorong terciptanya kolaborasi yang positif dalam berbagai kegiatan kemahasiswaan."
      ],
      foto: buatFoto("21-09-2026")
    },

    {
      id: "english-competition",
      tanggal: "2026-09-23",
      tanggalSelesai: "2026-09-25",
      kategori: "Akademik",
      judul: "BEM Fakultas Vokasi Turut Hadir dalam English Competition Program Studi Bahasa Inggris",
      ringkasan:
        "BEM Fakultas Vokasi turut menghadiri English Competition yang diselenggarakan Program Studi D3 Bahasa Inggris pada 23–25 September 2026.",
      narasi: [
        "Pada 23–25 September 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya turut menghadiri kegiatan English Competition yang diselenggarakan oleh Program Studi D3 Bahasa Inggris.",
        "Kegiatan ini menjadi wadah bagi mahasiswa untuk mengembangkan kemampuan berbahasa Inggris, mengasah kreativitas, serta meningkatkan kepercayaan diri melalui berbagai kompetisi. Kehadiran perwakilan BEM Fakultas Vokasi merupakan bentuk partisipasi dan dukungan terhadap kegiatan akademik serta pengembangan potensi mahasiswa di lingkungan Fakultas Vokasi.",
        "Melalui partisipasi dalam kegiatan ini, diharapkan hubungan baik antara BEM dan Program Studi D3 Bahasa Inggris dapat terus terjalin serta mendorong semangat mahasiswa untuk terus mengembangkan kemampuan dan prestasi di bidang akademik maupun nonakademik."
      ],
      foto: ["assets/berita/logo.png"]
    },

    {
      id: "pelantikan-himasta",
      tanggal: "2026-09-29",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi Hadiri Pelantikan Pengurus HIMASTA Periode 2026/2027",
      ringkasan:
        "BEM Fakultas Vokasi menghadiri pelantikan Himpunan Mahasiswa D4 Statistika (HIMASTA) periode 2026/2027.",
      narasi: [
        "Pada 29 September 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Pelantikan Pengurus Himpunan Mahasiswa D4 Statistika (HIMASTA) Periode 2026/2027.",
        "Kegiatan pelantikan ini menjadi momentum dimulainya kepengurusan baru HIMASTA dalam menjalankan tugas dan tanggung jawab organisasi selama satu periode ke depan. Kehadiran perwakilan BEM Fakultas Vokasi merupakan bentuk partisipasi dan dukungan terhadap keberlanjutan organisasi kemahasiswaan di lingkungan Fakultas Vokasi.",
        "Melalui kegiatan ini, diharapkan hubungan silaturahmi dan koordinasi antara BEM Fakultas Vokasi dengan HIMASTA dapat terus terjalin serta mendorong terciptanya kolaborasi yang positif dalam berbagai kegiatan kemahasiswaan."
      ],
      foto: buatFoto("29-09-2026")
    },

    {
      id: "pelantikan-improsaja",
      tanggal: "2026-09-29",
      kategori: "Organisasi",
      judul: "BEM Fakultas Vokasi Hadiri Pelantikan Pengurus IMPROSAJA Periode 2026/2027",
      ringkasan:
        "BEM Fakultas Vokasi menghadiri pelantikan Himpunan Mahasiswa D3 Perpajakan (IMPROSAJA) periode 2026/2027.",
      narasi: [
        "Pada 29 September 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Pelantikan Pengurus Himpunan Mahasiswa D3 Perpajakan (IMPROSAJA) Periode 2026/2027.",
        "Kegiatan pelantikan ini menjadi momentum dimulainya kepengurusan baru IMPROSAJA dalam menjalankan tugas dan tanggung jawab organisasi selama satu periode ke depan. Kehadiran perwakilan BEM Fakultas Vokasi merupakan bentuk partisipasi dan dukungan terhadap keberlanjutan organisasi kemahasiswaan di lingkungan Fakultas Vokasi.",
        "Melalui kegiatan ini, diharapkan hubungan silaturahmi dan koordinasi antara BEM Fakultas Vokasi dengan IMPROSAJA dapat terus terjalin serta mendorong terciptanya kolaborasi yang positif dalam berbagai kegiatan kemahasiswaan."
      ],
      foto: buatFoto("29-09-2026-improsaja")
    },

    {
      id: "audiensi-event-ditmawalumni",
      tanggal: "2026-10-15",
      kategori: "Kelembagaan",
      judul: "BEM Fakultas Vokasi Laksanakan Audiensi Bersama Ditmawalumni USU Terkait Pelaksanaan Event Kabinet Vokasi Berdaya",
      ringkasan:
        "Audiensi bersama Ditmawalumni USU membahas konsep dan persiapan program kerja event BEM Fakultas Vokasi periode 2026/2027.",
      narasi: [
        "Pada 15 Oktober 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya melaksanakan agenda audiensi bersama Direktorat Kemahasiswaan dan Kealumnian Universitas Sumatera Utara (Ditmawalumni USU). Audiensi ini secara khusus membahas salah satu program kerja BEM Fakultas Vokasi, yaitu penyelenggaraan event selama periode kepengurusan 2026/2027.",
        "Pertemuan ini menjadi wadah bagi BEM untuk menyampaikan konsep dan gambaran kegiatan event yang direncanakan, sekaligus melakukan koordinasi dengan pihak Ditmawalumni USU terkait persiapan dan pelaksanaannya.",
        "Melalui audiensi ini, diharapkan terjalin komunikasi dan koordinasi yang baik antara BEM Fakultas Vokasi dengan Ditmawalumni USU sehingga program kerja berupa event tersebut dapat dipersiapkan dan dilaksanakan secara terarah sesuai dengan ketentuan yang berlaku."
      ],
      foto: buatFoto("15-10-2026", "png")
    },

   // BERITA PPLF — nama foto tetap seperti biasa
{
  id: "pplf-2026",
  tanggal: "2026-10-24",
  tanggalSelesai: "2026-10-25",
  kategori: "Kegiatan",
  judul: "BEM Fakultas Vokasi Hadiri Primary Pharmaceutical Leadership Forum (PPLF) 2026 yang Diselenggarakan BEM Fakultas Farmasi",
  ringkasan:
    "Perwakilan BEM Fakultas Vokasi menghadiri PPLF 2026 yang diselenggarakan oleh BEM Fakultas Farmasi USU.",
  narasi: [
    "Pada 24–25 Oktober 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melalui Kabinet Vokasi Berdaya menghadiri kegiatan Primary Pharmaceutical Leadership Forum (PPLF) 2026 yang diselenggarakan oleh BEM Fakultas Farmasi Universitas Sumatera Utara.",
    "Kegiatan ini menjadi wadah bagi mahasiswa untuk memperluas wawasan, memperoleh pengalaman, serta mengembangkan pemahaman mengenai kepemimpinan dalam bidang kefarmasian. Kehadiran perwakilan BEM Fakultas Vokasi merupakan bentuk partisipasi dalam mendukung kegiatan kemahasiswaan yang diselenggarakan oleh fakultas lain di lingkungan Universitas Sumatera Utara.",
    "Melalui keikutsertaan dalam kegiatan ini, diharapkan hubungan silaturahmi antarlembaga kemahasiswaan dapat semakin erat serta membuka peluang untuk menjalin komunikasi dan kolaborasi dalam berbagai kegiatan kemahasiswaan di masa mendatang."
  ],
  foto: buatFoto("24-10-2026")
},

// BERITA RAKER — menggunakan nama foto khusus
{
  id: "rapat-persiapan-proker",
  tanggal: "2026-10-24",
  kategori: "Internal",
  judul: "BEM Fakultas Vokasi Gelar Rapat Persiapan Program Kerja",
  ringkasan:
    "Rapat persiapan program kerja Kabinet Vokasi Berdaya periode 2026/2027 untuk mematangkan perencanaan kegiatan satu periode kepengurusan.",
  narasi: [
    "Pada 24 Oktober 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melaksanakan rapat persiapan program kerja Kabinet Vokasi Berdaya periode 2026/2027. Kegiatan ini menjadi bagian dari upaya mematangkan perencanaan program kerja yang akan dilaksanakan selama satu periode kepengurusan.",
    "Dalam rapat tersebut, dilakukan pembahasan dan koordinasi terkait persiapan pelaksanaan program kerja BEM Fakultas Vokasi. Setiap bagian turut mempersiapkan hal-hal yang diperlukan agar program kerja dapat direncanakan dengan baik dan berjalan sesuai tujuan.",
    "Melalui rapat persiapan ini, diharapkan seluruh pengurus memiliki pemahaman dan koordinasi yang selaras dalam menjalankan program kerja Kabinet Vokasi Berdaya, sehingga setiap kegiatan dapat terlaksana secara terarah dan optimal."
  ],
  foto: buatFoto("24-10-2026-raker")
},

    {
      id: "rapat-evaluasi-perdana",
      tanggal: "2026-10-30",
      kategori: "Internal",
      judul: "BEM Fakultas Vokasi USU Laksanakan Rapat Evaluasi Perdana",
      ringkasan:
        "Rapat evaluasi perdana Kabinet Vokasi Berdaya menjadi wadah untuk meninjau kinerja, menyampaikan perkembangan, dan membahas perbaikan kepengurusan.",
      narasi: [
        "Pada 30 Oktober 2026, Badan Eksekutif Mahasiswa (BEM) Fakultas Vokasi Universitas Sumatera Utara melaksanakan rapat evaluasi perdana Kabinet Vokasi Berdaya periode 2026/2027. Kegiatan ini menjadi salah satu langkah untuk meninjau pelaksanaan kegiatan dan kinerja kepengurusan sejak awal periode.",
        "Rapat evaluasi ini menjadi wadah bagi pengurus untuk menyampaikan perkembangan, mengidentifikasi kendala, serta membahas hal-hal yang perlu diperbaiki dalam pelaksanaan tugas dan program kerja. Melalui diskusi bersama, setiap bagian dapat melakukan refleksi terhadap tanggung jawab dan koordinasi yang telah berjalan.",
        "Melalui evaluasi perdana ini, diharapkan seluruh pengurus BEM Fakultas Vokasi USU dapat meningkatkan koordinasi, memperbaiki kekurangan, serta menjalankan tanggung jawab organisasi dengan lebih baik demi tercapainya tujuan Kabinet Vokasi Berdaya."
      ],
      foto: buatFoto("30-10-2026")
    }
  ];

  /* =====================================================
     PENGATURAN TAMPILAN
     ===================================================== */

  const PER_HALAMAN = 6;

  const featuredId = "pelantikan-ketua-wakil-bem";

  const beritaUnggulan = beritaData.find(
    (item) => item.id === featuredId
  );

  const beritaLainnya = beritaData
    .filter((item) => item.id !== featuredId)
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal));

  let jumlahTampil = 0;

  /* =====================================================
     HELPER
     ===================================================== */

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function formatTanggal(item) {
    const tanggalMulai = new Date(`${item.tanggal}T00:00:00`);

    const format = (date) =>
      new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(date);

    if (!item.tanggalSelesai) {
      return format(tanggalMulai);
    }

    const tanggalAkhir = new Date(
      `${item.tanggalSelesai}T00:00:00`
    );

    const bulanMulai = tanggalMulai.getMonth();
    const bulanAkhir = tanggalAkhir.getMonth();
    const tahunMulai = tanggalMulai.getFullYear();
    const tahunAkhir = tanggalAkhir.getFullYear();

    if (bulanMulai === bulanAkhir && tahunMulai === tahunAkhir) {
      const hariMulai = tanggalMulai.getDate();
      const hariAkhir = tanggalAkhir.getDate();

      return `${hariMulai}–${hariAkhir} ${new Intl.DateTimeFormat(
        "id-ID",
        { month: "long", year: "numeric" }
      ).format(tanggalMulai)}`;
    }

    return `${format(tanggalMulai)} – ${format(tanggalAkhir)}`;
  }

  function formatMeta(item) {
    return `
      <div class="news-meta">
        <time datetime="${escapeHTML(item.tanggal)}">
          ${escapeHTML(formatTanggal(item))}
        </time>

        <span class="news-meta-dot" aria-hidden="true">•</span>

        <span>${escapeHTML(item.kategori)}</span>
      </div>
    `;
  }

  /* =====================================================
     BERITA UNGGULAN
     ===================================================== */

  function renderFeatured(item) {
    if (!item) {
      featured.hidden = true;
      return;
    }

    featured.innerHTML = `
      <a
        class="news-featured-image-link"
        href="#"
        data-berita-id="${escapeHTML(item.id)}"
        aria-label="Baca ${escapeHTML(item.judul)}"
      >
        <img
          src="${escapeHTML(item.foto[0])}"
          alt="${escapeHTML(item.judul)}"
          fetchpriority="high"
        />
      </a>

      <div class="news-featured-copy">
        ${formatMeta(item)}

        <h2>${escapeHTML(item.judul)}</h2>

        <p>${escapeHTML(item.ringkasan)}</p>

        <a
          class="news-read-button"
          href="#"
          data-berita-id="${escapeHTML(item.id)}"
        >
          Baca Selengkapnya
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    `;
  }

  /* =====================================================
     CARD BERITA
     ===================================================== */

  function renderCard(item, index) {
    return `
      <article
        class="news-card"
        style="transition-delay: ${(index % 3) * 70}ms"
      >
        <a
          class="news-card-link"
          href="#"
          data-berita-id="${escapeHTML(item.id)}"
          aria-label="Baca ${escapeHTML(item.judul)}"
        >
          <span class="news-card-image">
            <img
              src="${escapeHTML(item.foto[0])}"
              alt="${escapeHTML(item.judul)}"
              loading="lazy"
            />
          </span>

          <span class="news-card-body">
            ${formatMeta(item)}

            <h3>${escapeHTML(item.judul)}</h3>

            <span class="news-card-description">
              ${escapeHTML(item.ringkasan)}
            </span>
          </span>

          <span class="news-card-bottom">
            <span class="news-card-arrow" aria-hidden="true">↗</span>
          </span>
        </a>
      </article>
    `;
  }

  /* =====================================================
     ANIMASI REVEAL
     ===================================================== */

  function observeCards() {
    const cards = list.querySelectorAll(
      ".news-card:not([data-observed])"
    );

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => {
        card.classList.add("is-visible");
        card.dataset.observed = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -25px 0px"
      }
    );

    cards.forEach((card) => {
      card.dataset.observed = "true";
      observer.observe(card);
    });
  }

  /* =====================================================
     MODAL DETAIL BERITA + GALERI 5 FOTO
     Modal dibuat otomatis oleh JavaScript.
     ===================================================== */

  function siapkanModal() {
    if (document.querySelector("#news-detail-modal")) return;

    const style = document.createElement("style");

    style.textContent = `
      .news-modal {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: grid;
        place-items: center;
        padding: 24px;
        background: rgba(15, 25, 19, .72);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        opacity: 0;
        visibility: hidden;
        transition: .25s ease;
      }

      .news-modal.is-open {
        opacity: 1;
        visibility: visible;
      }

      .news-modal-panel {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(320px, .95fr);
        width: min(1080px, 100%);
        max-height: min(780px, 90vh);
        overflow: hidden;
        background: #f7f4ec;
        border-radius: 22px;
        box-shadow: 0 24px 80px rgba(0,0,0,.25);
        transform: translateY(18px);
        transition: .25s ease;
      }

      .news-modal.is-open .news-modal-panel {
        transform: translateY(0);
      }

      .news-modal-gallery {
        min-width: 0;
        padding: 22px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .news-modal-main-image {
        width: 100%;
        flex: 1;
        min-height: 280px;
        max-height: 510px;
        object-fit: cover;
        border-radius: 14px;
        background: #e6e1d5;
      }

      .news-modal-thumbnails {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 9px;
      }

      .news-modal-thumb {
        padding: 0;
        border: 2px solid transparent;
        border-radius: 9px;
        overflow: hidden;
        aspect-ratio: 1.35;
        cursor: pointer;
        background: #e6e1d5;
      }

      .news-modal-thumb.is-active {
        border-color: #28613d;
      }

      .news-modal-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .news-modal-copy {
        padding: 54px 38px 34px;
        overflow-y: auto;
      }

      .news-modal-close {
        position: absolute;
        top: 16px;
        right: 18px;
        z-index: 2;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 50%;
        background: #e9e5da;
        color: #26382c;
        font-size: 25px;
        line-height: 1;
        cursor: pointer;
      }

      .news-modal-category {
        display: inline-flex;
        padding: 7px 12px;
        border-radius: 30px;
        background: #e4eadf;
        color: #31583b;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .08em;
        text-transform: uppercase;
      }

      .news-modal-title {
        margin: 18px 0 14px;
        color: #20382a;
        font: 600 clamp(25px, 3vw, 36px)/1.18 "Fraunces", Georgia, serif;
      }

      .news-modal-date {
        color: #77796e;
        font-size: 13px;
        margin-bottom: 24px;
      }

      .news-modal-narrative {
        color: #4c5148;
        font-size: 14px;
        line-height: 1.85;
      }

      .news-modal-narrative p {
        margin: 0 0 16px;
      }

      .news-modal-controls {
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }

      .news-modal-nav {
        border: 1px solid #d8d7ca;
        background: #f7f4ec;
        color: #294532;
        border-radius: 30px;
        padding: 8px 14px;
        cursor: pointer;
        font-size: 12px;
      }

      .news-modal-nav:disabled {
        opacity: .35;
        cursor: not-allowed;
      }

      body.news-modal-open {
        overflow: hidden;
      }

      @media (max-width: 760px) {
        .news-modal {
          padding: 12px;
          align-items: center;
        }

        .news-modal-panel {
          display: block;
          width: min(560px, 100%);
          max-height: 94vh;
          overflow-y: auto;
        }

        .news-modal-gallery {
          padding: 14px;
          gap: 9px;
        }

        .news-modal-main-image {
          height: min(42vh, 340px);
          min-height: 190px;
          flex: none;
        }

        .news-modal-thumbnails {
          gap: 6px;
        }

        .news-modal-copy {
          padding: 18px 22px 28px;
          overflow: visible;
        }

        .news-modal-title {
          font-size: 27px;
          margin-top: 13px;
        }

        .news-modal-close {
          top: 12px;
          right: 12px;
        }
      }
    `;

    document.head.appendChild(style);

    const modal = document.createElement("div");

    modal.className = "news-modal";
    modal.id = "news-detail-modal";
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
      <div
        class="news-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="news-modal-title"
      >
        <button
          class="news-modal-close"
          type="button"
          aria-label="Tutup berita"
        >
          &times;
        </button>

        <div class="news-modal-gallery">
          <img
            class="news-modal-main-image"
            src=""
            alt=""
          >

          <div class="news-modal-controls">
            <button
              class="news-modal-nav"
              type="button"
              data-gallery-prev
            >
              ← Sebelumnya
            </button>

            <button
              class="news-modal-nav"
              type="button"
              data-gallery-next
            >
              Selanjutnya →
            </button>
          </div>

          <div
            class="news-modal-thumbnails"
            aria-label="Galeri foto berita"
          ></div>
        </div>

        <div class="news-modal-copy">
          <span class="news-modal-category"></span>

          <h2
            class="news-modal-title"
            id="news-modal-title"
          ></h2>

          <div class="news-modal-date"></div>

          <div class="news-modal-narrative"></div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  let fotoAktif = 0;
  let beritaAktif = null;

  /* =====================================================
     GALERI FOTO
     ===================================================== */

  function tampilkanFoto(index) {
    if (!beritaAktif) return;

    const foto = beritaAktif.foto[index];

    const mainImage = document.querySelector(
      ".news-modal-main-image"
    );

    const thumbs = document.querySelectorAll(
      ".news-modal-thumb"
    );

    const prev = document.querySelector(
      "[data-gallery-prev]"
    );

    const next = document.querySelector(
      "[data-gallery-next]"
    );

    fotoAktif = index;

    mainImage.src = foto;
    mainImage.alt = `${beritaAktif.judul} - Foto ${index + 1}`;

    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle(
        "is-active",
        i === index
      );

      thumb.setAttribute(
        "aria-pressed",
        String(i === index)
      );
    });

    prev.disabled = index === 0;

    next.disabled =
      index === beritaAktif.foto.length - 1;
  }

  /* =====================================================
     BUKA MODAL
     ===================================================== */

  function bukaModal(item) {
    siapkanModal();

    beritaAktif = item;
    fotoAktif = 0;

    const modal = document.querySelector(
      "#news-detail-modal"
    );

    modal.querySelector(
      ".news-modal-category"
    ).textContent = item.kategori;

    modal.querySelector(
      ".news-modal-title"
    ).textContent = item.judul;

    modal.querySelector(
      ".news-modal-date"
    ).textContent = formatTanggal(item);

    modal.querySelector(
      ".news-modal-narrative"
    ).innerHTML = item.narasi
      .map((paragraf) => `<p>${escapeHTML(paragraf)}</p>`)
      .join("");

    const thumbnails = modal.querySelector(
      ".news-modal-thumbnails"
    );

    thumbnails.innerHTML = item.foto
      .map((foto, index) => `
        <button
          class="news-modal-thumb ${index === 0 ? "is-active" : ""}"
          type="button"
          data-foto-index="${index}"
          aria-label="Lihat foto ${index + 1}"
          aria-pressed="${index === 0}"
        >
          <img
            src="${escapeHTML(foto)}"
            alt=""
            loading="lazy"
          >
        </button>
      `)
      .join("");

    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "news-modal-open"
    );

    tampilkanFoto(0);

    modal.querySelector(
      ".news-modal-close"
    ).focus();
  }

  /* =====================================================
     TUTUP MODAL
     ===================================================== */

  function tutupModal() {
    const modal = document.querySelector(
      "#news-detail-modal"
    );

    if (!modal) return;

    modal.classList.remove("is-open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "news-modal-open"
    );
  }

  /* =====================================================
     EVENT LISTENER MODAL
     ===================================================== */

  siapkanModal();

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(
      "[data-berita-id]"
    );

    if (trigger) {
      event.preventDefault();

      const item = beritaData.find(
        (berita) =>
          berita.id === trigger.dataset.beritaId
      );

      if (item) bukaModal(item);

      return;
    }

    const modal = document.querySelector(
      "#news-detail-modal"
    );

    if (!modal) return;

    if (
      event.target.closest(".news-modal-close")
    ) {
      tutupModal();
    }

    const thumb = event.target.closest(
      "[data-foto-index]"
    );

    if (thumb) {
      tampilkanFoto(
        Number(thumb.dataset.fotoIndex)
      );
    }

    if (
      event.target.closest("[data-gallery-prev]") &&
      fotoAktif > 0
    ) {
      tampilkanFoto(fotoAktif - 1);
    }

    if (
      event.target.closest("[data-gallery-next]") &&
      beritaAktif &&
      fotoAktif < beritaAktif.foto.length - 1
    ) {
      tampilkanFoto(fotoAktif + 1);
    }

    if (event.target === modal) {
      tutupModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      tutupModal();
    }

    if (
      event.key === "ArrowLeft" &&
      beritaAktif &&
      fotoAktif > 0
    ) {
      tampilkanFoto(fotoAktif - 1);
    }

    if (
      event.key === "ArrowRight" &&
      beritaAktif &&
      fotoAktif < beritaAktif.foto.length - 1
    ) {
      tampilkanFoto(fotoAktif + 1);
    }
  });

  /* =====================================================
     MUAT BERITA BERTAHAP
     ===================================================== */

  function loadNews() {
    const nextItems = beritaLainnya.slice(
      jumlahTampil,
      jumlahTampil + PER_HALAMAN
    );

    if (nextItems.length > 0) {
      list.insertAdjacentHTML(
        "beforeend",
        nextItems
          .map((item, index) =>
            renderCard(item, jumlahTampil + index)
          )
          .join("")
      );

      jumlahTampil += nextItems.length;
    }

    loadMore.hidden =
      jumlahTampil >= beritaLainnya.length;

    if (emptyMessage) {
      emptyMessage.hidden =
        beritaLainnya.length > 0;
    }

    observeCards();
  }

  /* =====================================================
     INISIALISASI
     ===================================================== */

  renderFeatured(beritaUnggulan);

  loadNews();

  loadMore.addEventListener(
    "click",
    loadNews
  );
});