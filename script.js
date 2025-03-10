const links = [
    "https://www.nhathuocankhang.com/ban-tin-suc-khoe/15-thoi-quen-tot-cho-suc-khoe-moi-ngay-khong-the-bo-qua-1469128",
    "https://another-random-link.com",
    "https://tuoitre.vn/co-gi-o-mang-den-thien-duong-hong-ma-ca-ngan-du-khach-ve-tham-20231231183607197.htm",
    "https://one-more-chaotic-link.com",
    "https://thegioilamvuon.com/chau-nhua-trong-cay/?srsltid=AfmBOopeDxgKPe1sqAvpPcJPGXg8hMlL_g9H8rOcFFul_AMRDFX7ykW9",
    "https://tinder.com/",
    "https://bet888vn.net/vn?utm_source=seo&utm_medium=auto&utm_campaign=giz-ads-1",
    "https://nhipcaudautu.vn/phong-cach-song/di-tim-gia-tri-cho-cong-dong-lgbt-3357185/",
    "https://www.penguin.co.uk/series/EVLC/everymans-library-classics",
    "https://genius.com/Lola-young-messy-lyrics",
    "https://www.crescentmall.com.vn/tenants/ovs",
    "https://archive.org/details/the-pillow-book/page/n4/mode/1up",

];

document.getElementById("randomLink").addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * links.length);
    let randomLink = links[randomIndex];

    // Open multiple tabs for chaos
    for (let i = 0; i < Math.random() * 5 + 1; i++) {
        window.open(links[Math.floor(Math.random() * links.length)], "_blank");
    }

    // Redirect main page
    window.location.href = randomLink;
});
