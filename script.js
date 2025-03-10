document.addEventListener("DOMContentLoaded", function () {
    const emojiList = ["😀", "😂", "😍", "🤖", "👻", "🎃", "🔥", "💣", "💎", "👽"];
    const numEmojis = 20; // Số lượng emoji rơi trên màn hình
const links = [
    "https://www.nhathuocankhang.com/ban-tin-suc-khoe/15-thoi-quen-tot-cho-suc-khoe-moi-ngay-khong-the-bo-qua-1469128",
    "https://tuoitre.vn/co-gi-o-mang-den-thien-duong-hong-ma-ca-ngan-du-khach-ve-tham-20231231183607197.htm",
    "https://thegioilamvuon.com/chau-nhua-trong-cay/?srsltid=AfmBOopeDxgKPe1sqAvpPcJPGXg8hMlL_g9H8rOcFFul_AMRDFX7ykW9",
    "https://tinder.com/",
    "https://bet888vn.net/vn?utm_source=seo&utm_medium=auto&utm_campaign=giz-ads-1",
    "https://nhipcaudautu.vn/phong-cach-song/di-tim-gia-tri-cho-cong-dong-lgbt-3357185/",
    "https://www.penguin.co.uk/series/EVLC/everymans-library-classics",
    "https://genius.com/Lola-young-messy-lyrics",
    "https://www.crescentmall.com.vn/tenants/ovs",
    "https://archive.org/details/the-pillow-book/page/n4/mode/1up",

];

    // Hàm tạo emoji ngẫu nhiên
    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];

        // Đặt vị trí ngẫu nhiên trên màn hình
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = (Math.random() * 3 + 3) + "s"; // Tốc độ rơi ngẫu nhiên từ 3-6s

        // Thêm sự kiện click vào emoji
        emoji.addEventListener("click", function () {
            let randomChance = Math.random();
            if (randomChance < 0.8) {
                // 80% mở trang web
                window.open(links[Math.floor(Math.random() * links.length)], "_blank");
            } else {
                // 20% biến mất
                emoji.style.display = "none";
            }
        });

        document.body.appendChild(emoji);

        // Xóa emoji khỏi DOM sau khi rơi xuống
        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }

    // Tạo nhiều emoji trên màn hình
    for (let i = 0; i < numEmojis; i++) {
        createEmoji();
    }

    // Cứ mỗi 1 giây tạo thêm emoji mới
    setInterval(createEmoji, 1000);
});
