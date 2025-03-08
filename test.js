document.getElementById('share-button').addEventListener('click', function() {
    const message = "Sorry ya gw telat ngucapin, sebenernya waktu Jum'at sore mau ngucapinnya tapi codingannya gabisa dibikin online kyk gini pokoknya do'a terbaik buat lu Y (pengen keliatan keren ngucapin pake codingan SEDERHANA INI HIKS), sorry juga ga bisa ngucapin pake codingan yang bagus, buru-buru gw buatnya hehe";
    const url = ""; // Ganti dengan URL website Anda
    const shareText = `${message} ${url}`;

    // Tampilkan popup dengan pesan
    document.getElementById('popup-message').innerText = shareText;
    document.getElementById('popup').style.display = 'flex';
});

// Menutup popup
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});