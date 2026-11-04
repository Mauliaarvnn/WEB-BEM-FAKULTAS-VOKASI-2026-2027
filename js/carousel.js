/* =========================================================
   CAROUSEL PENGURUS

   Fungsi:
   - Carousel BPH bergerak otomatis
   - Carousel BPH looping
   - Carousel berhenti ketika hover
   - Card tengah menjadi aktif
   - Carousel Departemen bergerak otomatis
   - Carousel Departemen looping
   - Carousel berhenti ketika hover
   - Card tengah menjadi aktif
========================================================= */


/* =========================================================
   CAROUSEL BPH
========================================================= */

function setupBPHCarousel() {

  const container = document.getElementById("bph-grid");

  if (!container) return;


  const getCards = () =>
    [...container.querySelectorAll(".person-card")];



  /* ================================
     PADDING AGAR CARD TENGAH
     BISA BERADA DI TENGAH
  ================================= */

  function updatePadding() {

    const card = getCards()[0];

    if (!card) return;


    const padding = Math.max(
      (container.clientWidth - card.offsetWidth) / 2,
      0
    );


    container.style.paddingLeft =
      `${padding}px`;

    container.style.paddingRight =
      `${padding}px`;
  }



  /* ================================
     CARD AKTIF
  ================================= */

  function updateActive() {

    const cards = getCards();

    const center =
      container.getBoundingClientRect().left +
      container.clientWidth / 2;


    let closest = null;

    let distance = Infinity;


    cards.forEach((card) => {

      const rect =
        card.getBoundingClientRect();

      const cardCenter =
        rect.left + rect.width / 2;

      const currentDistance =
        Math.abs(cardCenter - center);


      if (currentDistance < distance) {

        distance =
          currentDistance;

        closest =
          card;
      }

    });


    cards.forEach((card) => {

      card.classList.remove(
        "is-active"
      );

    });


    if (closest) {
      closest.classList.add(
        "is-active"
      );
    }
  }



  /* ================================
     PAUSE SAAT HOVER
  ================================= */

  let paused = false;


  container.addEventListener(
    "mouseenter",
    () => {
      paused = true;
    }
  );


  container.addEventListener(
    "mouseleave",
    () => {
      paused = false;
    }
  );



  /* ================================
     ANIMATION
  ================================= */

  function animate() {

    if (!paused) {

      container.scrollLeft += 1;
    }


    const cards =
      getCards();

    const first =
      cards[0];

    const secondSet =
      cards[bphData.length];


    if (first && secondSet) {

      const loopWidth =
        secondSet.offsetLeft -
        first.offsetLeft;


      /*
        Kalau sudah melewati
        dua set data, kembali
        satu set ke belakang.
      */

      if (
        container.scrollLeft >=
        loopWidth * 2
      ) {

        container.scrollLeft -=
          loopWidth;
      }
    }


    updateActive();


    requestAnimationFrame(
      animate
    );
  }



  /* ================================
     INITIAL POSITION
  ================================= */

  updatePadding();


  const first =
    getCards()[0];

  const secondSet =
    getCards()[bphData.length];


  if (first && secondSet) {

    const loopWidth =
      secondSet.offsetLeft -
      first.offsetLeft;


    container.scrollLeft =
      loopWidth;
  }


  updateActive();

  animate();



  /* ================================
     RESPONSIVE
  ================================= */

  window.addEventListener(
    "resize",
    () => {

      updatePadding();

      updateActive();

    }
  );
}



/* =========================================================
   CAROUSEL DEPARTEMEN
========================================================= */

function setupDepartemenCarousel() {

  const container =
    document.getElementById(
      "dept-list"
    );

  if (!container) return;


  const getCards = () =>
    [
      ...container.querySelectorAll(
        ".dept-card"
      )
    ];



  /* ================================
     PADDING
  ================================= */

  function updatePadding() {

    const card =
      getCards()[0];

    if (!card) return;


    const padding =
      Math.max(
        (
          container.clientWidth -
          card.offsetWidth
        ) / 2,
        0
      );


    container.style.paddingLeft =
      `${padding}px`;

    container.style.paddingRight =
      `${padding}px`;
  }



  /* ================================
     CARD AKTIF
  ================================= */

  function updateActive() {

    const cards =
      getCards();


    const center =
      container.getBoundingClientRect().left +
      container.clientWidth / 2;


    let closest = null;

    let distance = Infinity;


    cards.forEach((card) => {

      const rect =
        card.getBoundingClientRect();

      const cardCenter =
        rect.left +
        rect.width / 2;


      const currentDistance =
        Math.abs(
          cardCenter - center
        );


      if (
        currentDistance <
        distance
      ) {

        distance =
          currentDistance;

        closest =
          card;
      }

    });


    cards.forEach((card) => {

      card.classList.remove(
        "is-active"
      );

    });


    if (closest) {

      closest.classList.add(
        "is-active"
      );
    }
  }



  /* ================================
     PAUSE SAAT HOVER
  ================================= */

  let paused = false;


  container.addEventListener(
    "mouseenter",
    () => {

      paused = true;
    }
  );


  container.addEventListener(
    "mouseleave",
    () => {

      paused = false;
    }
  );



  /* ================================
     LOOPING
  ================================= */

  function animate() {

    if (!paused) {

      container.scrollLeft += 1;
    }


    const cards =
      getCards();


    const first =
      cards[0];


    const secondSet =
      cards[departemenData.length];


    if (
      first &&
      secondSet
    ) {

      const loopWidth =
        secondSet.offsetLeft -
        first.offsetLeft;


      /*
        Kita punya 3 salinan data:

        [set 1]
        [set 2]
        [set 3]

        Saat sudah terlalu jauh
        ke set ketiga, geser kembali
        satu set.
      */

      if (
        container.scrollLeft >=
        loopWidth * 2
      ) {

        container.scrollLeft -=
          loopWidth;
      }
    }


    updateActive();


    requestAnimationFrame(
      animate
    );
  }



  /* ================================
     POSISI AWAL
  ================================= */

  updatePadding();


  const first =
    getCards()[0];

  const secondSet =
    getCards()[
      departemenData.length
    ];


  if (
    first &&
    secondSet
  ) {

    const loopWidth =
      secondSet.offsetLeft -
      first.offsetLeft;


    /*
      Mulai dari data
      salinan kedua.
    */

    container.scrollLeft =
      loopWidth;
  }


  updateActive();

  animate();



  /* ================================
     RESPONSIVE
  ================================= */

  window.addEventListener(
    "resize",
    () => {

      updatePadding();

      updateActive();

    }
  );
}