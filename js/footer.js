
document.addEventListener("DOMContentLoaded", async () => {
  const footerContainer = document.getElementById("footer-placeholder");

  if (!footerContainer) {
    console.warn("Elemen #footer-placeholder tidak ditemukan.");
    return;
  }

  try {
    const footerPath = new URL(
      "components/footer.html",
      window.location.href
    );

    const response = await fetch(footerPath);

    if (!response.ok) {
      throw new Error(
        `Gagal memuat footer: ${response.status} ${response.statusText}`
      );
    }

    footerContainer.innerHTML = await response.text();

    // console.log("Footer berhasil dimuat!");
  } catch (error) {
    console.error("Gagal memuat footer:", error);
  }
});
