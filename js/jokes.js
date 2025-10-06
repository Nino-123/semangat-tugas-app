// jokes.js - Standalone jokes page
const jokes = [
    "Antara besi 50 kg dengan kapas 50 kg pas kalu dijatuhkan di kaki, nanti sakitan mana? - Ya sakitan kakinya.",
    "Dia membuat karya, pas jadi hasil karya tersebut diinjak-injak tidak marah, siap coba? - Pembuat sandal.",
    "Hitam, putih, merah, apakah itu? - Zebra abis dikerokin.",
    "Telor apa yang sangar? - Telor asin, soalnya ada tatonya.",
    "Telor asin takut ama siapa? - Ama telor puyuh, sebab tatonya lebih banyak.",
    "Kenapa kalo lagi mikir orang suka megang jidatnya? - Ya iyalah, masa megang jidat orang lain!",
    "Kenapa kucing selalu menyembunyikan kotorannya dalam pasir? - Karena takut diambil kamu!",
    "Seekor kaki seribu mempunyai 1.000 kaki, suatu hari kakinya copot satu. Tinggal berapa kakinya? - Kan kayak di lagu Gugur bunga, Gugur satu tumbuh seribu.",
    "Sepeda apa yang tidak bisa dicat? - Sepeda hilang!",
    "Benda apa yang baru dibeli langsung dibuang? - Peti mati.",
    "Apa persamaan antara uang dan rahasia? - Sama-sama susah dipegang.",
    "Uang 100 ribu jika dilempar maka akan menjadi? - Jadi rebutan.",
    "Kenapa ketika naik taksi kita tidak boleh bayar uang dulu? - Karena uang dulu udah tidak laku.",
    "Selain uang benda apa yang sering dicari-cari orang? - Benda hilang.",
    "Hewan apa yang bersaudara? - Katak beradik.",
    "Selain bunga desa, bunga apa yang cantik dan hobi masak? - Bungatimin dan Bungatemi.",
    "Nyopet apa yang tergolong paling nekat? - Nyopet gigi emas.",
    "Negara mana yang memiliki huruf dobel? - u ganda (Uganda).",
    "Sabun apa yang paling genit? - Sabun colek.",
    "Kuman apa yang paling bersih? - Kumandi pakai sabun.",
    "Kalau kamu pintar matematika, coba jawab pertanyaan ini 3 x + = …? - Kenyang. ya iyalah, 3 kali nambah ya kenyang!",
    "Kalau hitam dibilang bersih, kalau putih dibilang kotor? - Papan tulis!",
    "Uang kalau dilempar jadi apa? - Jadi rebutan.",
    "Selalu diam di pojok tapi bisa keliling dunia? - Perangko!",
    "Tentara apa yang paling kecil? - Tentara Sekutu.",
    "Bebek apa yang jalannya selalu muter ke kiri terus? - Bebek dikunci stang.",
    "Ada bebek 10 di kali 2 jadi berapa? - 8, soalnya yang 2 lagi main di kali.",
    "Kecil, Ijo, kalau disentuh meledak. Apakah itu? - Ulet bulu bawa bom.",
    "Kucing apa yang kuno? - Kucinggalan Jaman.",
    "Monyet apa yang gak makan pisang? - Monyet lagi puasa.",
    "Kalau ayam berkokok, berarti harimau….? - Hari mau pagi.",
    "Pintu apa yang walaupun didorong sepuluh orang pun tidak terbuka? - Pintu yang ada tulisan ‘TARIK.’",
    "Apa yang bulat, kecil, hitam, jika dipencet keluar orangnya? - Bel pintu.",
    "Apa yang ‘Jauh di mata, dekat di hati? - Usus.",
    "Rambut putih namanya uban, rambut merah namanya pirang, kalau rambut hijau namanya apa? - Rambutan belum mateng.",
    "Jus apa yang turun dari langit? - Justru itu yang aku kagak tau..he..he.",
    "Apa bukti wortel baik untuk kesehatan mata? - Pernah lihat kelinci pakai kacamata?",
    "Apa bahasa Indianya bumbu dapur? - Tumbar miri jahe.",
    "Apa yang badannya hijau, kepalanya merah, jalannya mundur? - Obat nyamuk bakar.",
    "Siapa yang potong rambut tiap hari tetapi tidak botak? - Tukang pangkas!",
    "Nenek siapa yang jalannya meloncat-loncat? - Nenek si katak.",
    "Kenapa orang takut kehujanan? - Karena hujan beraninya keroyokan.",
    "Kenapa baju Superman ada huruf ‘S’? - Karena kalau ‘M’ atau ‘L’ kegedean.",
    "Kenapa baju Batman ada gambar kelelawar? - Karena huruf ‘B’ sudah dipakai kaos Bobo.",
    "Kenapa di keyboard komputer ada tulisan ‘ENTER’? - Karena kalau tulisannya ‘ENTAR’, programnya nggak jalan-jalan.",
    "Kenapa dokter jika akan mengoperasi mulutnya ditutup? - Karena jika matanya yang ditutup nggak bisa melihat dong.",
    "Kenapa air laut asin? - Karena ikannya pada berkeringat.",
    "Kenapa kambing berjenggot? - Karena jika berkumis nanti dikira Pak Raden.",
    "Bis apa yang biasanya ada di pohon? - Bis-a monyet, bisa burung, terserah kamu lah.",
    "Mangga apa yang mengerikan? - Mangga-ruk-garuk pantat singa.",
    "Apa itu cemilan? - Cebelum cepuluh, cecudah celapan.",
    "Kopi apa yang bisa mencapit? - Kopi-ting.",
    "Lele apa yang di tepi jalan? - Lele-pon umum.",
    "Sapi apa yang larinya cepat? - Sapi-da motor.",
    "Kentang apa yang bisa bikin bayi ketawa? - Kentang-tingtung-tingtang-tingtung.",
    "Suku apa yang banyak berkeliaran di mal? - Suku-riti.",
    "Kuda apa yg paling capek? - Kuda-ki gunung sambil jongkok.",
    "Monyet apa yang menyebalkan? - Monyet-tel tv tidak bisa, monyetel radio tidak bisa juga.",
    "Tivi apa yang bisa berenang? - Tivikir-vikir sih ikan.",
    "Apa beda antara soto dan coto? - Soto dari daging sapi, coto dari daging capi.",
    "Apa beda antara Meggi Z dan tukang sayur? - Meggi Z nyanyi ‘teganya-teganya’, tukang sayur teriak ‘Toge Nya, toge Nya’.",
    "Apa beda antara semut dan orang? - Orang bisa kesemutan, tetapi semut nggak bisa keorangan.",
    "Apa bedanya balapan kuda sama balapan motor? - Balapan kuda ada tempat parkir motor, balapan motor tidak ada tempat parkir kuda.",
    "Apa persamaan kain jemuran dan telepon? - Keduanya jika sudah ‘kringgg’ boleh diangkat.",
    "Apa persamaan Pangeran Diponegoro dan Cut Nyak Dien? - Sama-sama nggak punya handphone.",
    "Apa persamaan KTP dan telor asin? - Sama-sama dicap stempel.",
    "Apa persamaan tukang sate dan tukang soto? - Sama-sama nggak jual bakso!",
    "Binatang apa yang paling panjang? - Ular ngantre beras.",
    "Berapa jumlah kaki seekor kerbau? - Delapan, yaitu: dua kaki kiri, dua kaki kanan, dua kaki depan, dan dua kaki belakang.",
    "Ikan apa yang matanya sangat banyak? - Ikan teri satu kilo.",
    "Binatang apa yang seluruh anggota tubuhnya ada di kepala? - Kutu rambut.",
    "Binatang apa yang tidak sampai-sampai? - Lama.",
    "Monyet apa yang senang maju mundur? - Monyet-trika baju.",
    "Siapa nama asli nyamuk? - Tatang! Kan ada lagunya: Cicak-cicak di dinding...",
    "Burung apa yang hobi ke WC? - Burung pipipt (pipis).",
    "Hewan-hewan apa yang paling bikin damai? - Adem ayam.",
    "Kutu, kutu apa yang menakutkan? - Kutukan.",
    "Hewan apa yang selalu sehat? - Ularaga.",
    "Hewan apa yang hanya terdiri dari satu huruf? - I’kan?",
    "Rusa apa yang gak bisa jalan? - Rusak kali ya.",
    "Hewan apa yang jadi super hero? - Sapiderman.",
    "Gajah naik becak yang kelihatan apanya? - Kelihatan bohongnya.",
    "Hewan apa yang tidak sopan? - Kutu, soalnya menginjak kepala.",
    "Hewan apa yang paling hening? - Semute.",
    "Ikan apa yang suka berhenti? - Ikan pause.",
    "Kenapa ayam kalau berkokok, matanya merem? - Karena sudah hafal teksnya.",
    "Ayam apa yang nyebelin? - Ayamnya sudah habis, nasinya masih banyak.",
    "Gajah apa yang belalainya pendek? - Gajah pesek.",
    "Kenapa anak kodok suka loncat-loncat? - Namanya juga anak-anak.",
    "Kalau semua jenis hewan sekolah, siapa yang sering terlambat? - Kluwing (kaki seribu).",
    "Gajah terbang dengan apa? - Dengan susah payah.",
    "Hewan apa yang namanya satu huruf? - G ajah.",
    "Hewan apa yang namanya dua huruf? - U dan g.",
    "Apa yang mempunyai kaki enam dan bisa terbang? - Tiga ekor burung!",
    "Ayam-ayam apa yang paling besar? - Ayam semesta.",
    "Hewan yang suka kebersihan? - Gajah, Gajahlah kebersihan."
];

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
    
    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Determine if confetti comes from left or right side
        const fromLeft = Math.random() < 0.5;
        
        if (fromLeft) {
            confetti.style.left = '-30px';
            confetti.style.animationName = 'confetti-left';
        } else {
            confetti.style.right = '-30px';
            confetti.style.animationName = 'confetti-right';
        }
        
        // Random vertical position
        confetti.style.top = (Math.random() * 40 + 30) + '%';
        
        // Random color
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = confetti.style.width;
        
        // Random animation duration
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 6000);
    }
}

function generateNewJoke() {
    // Trigger confetti for new jokes
    createConfetti();
    
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('jokeText').textContent = randomJoke;
}

function goToEncouragementPage() {
    window.location.href = 'encouragement.html';
}

function goToHomePage() {
    window.location.href = 'main-question.html';
}

// Initialize with confetti on page load
window.addEventListener('load', () => {
    createConfetti();
});