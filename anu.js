
    // Fungsi untuk menampilkan popup
    function openModal() {
        document.getElementById("popup").style.display = "block";
    }

    // Fungsi untuk menyembunyikan popup
    function closeModal() {
        document.getElementById("popup").style.display = "none";
    }

    // Fungsi untuk menggerakkan popup ke posisi acak di layar
    function movePopupRandomly() {
        const popup = document.getElementById("popup");
        const randomX = Math.random() * (window.innerWidth - popup.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - popup.offsetHeight);
        popup.style.left = randomX + "px";
        popup.style.top = randomY + "px";
    }

    // Saat tombol "Yes" pada popup diklik
    document.getElementById("popup-yes").addEventListener("click", () => {
        movePopupRandomly();
    });

    // Saat tombol "No" pada popup diklik
    document.getElementById("popup-no").addEventListener("click", () => {
        closeModal();
    });

    document.getElementById("yes-button").addEventListener("click", () => {
        // Arahkan ke halaman index2.html
        window.location.href = "index2.html";
    });
