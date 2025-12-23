document.addEventListener("DOMContentLoaded", () => {
  const mainPainting = document.getElementById('main-painting');
  const carouselBox = document.getElementById('carousel-box');
  const modal = document.getElementById('carousel-modal');
  const modalImg = document.getElementById('carousel-modal-img');
  const modalClose = document.getElementById('carousel-modal-close');

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id")) || 1;
  const paintingData = paintings.find(p => p.id === id);

  if(paintingData){
    mainPainting.src = paintingData.img;
    mainPainting.addEventListener('click', ()=> openModal(paintingData.img));

    if(carouselBox){
      carouselBox.innerHTML = "";
      const variants = paintingData.variations || [paintingData.img];
      variants.forEach(src=>{
        const img = document.createElement("img");
        img.src = src;
        img.alt = paintingData.title;
        img.addEventListener('click', ()=>{
          mainPainting.src = src;
          openModal(src);
        });
        carouselBox.appendChild(img);
      });
    }
  }

  function openModal(src){
    modal.style.display = 'flex';
    modalImg.src = src;
  }

  modalClose.addEventListener('click', ()=> modal.style.display='none');
  modal.addEventListener('click', e=>{ if(e.target===modal) modal.style.display='none'; });
});

/// ================= VIDEO DATA =================
const videos = [
 
  {
    title: "'Ladybug'. Canvas. Oil. Acrylic. Size 100X80 In (Sold)",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766131942/AQNRtGmk2jfkGsrJT6LzoZqSwJ3u1b3-F6hWJqa8yHMW1ORWo9_t3CTfw-006qQHX9Y9gh9ADD4rKKwpzCMplisaJ7qfzpDw5Wy6opDHB0T_Jw_higx97.mp4",
  },
  {
    title: "'Amphibia' Oil, acrylic. 85X80 In",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766132793/AQNX6kM70M2q-_l7Tdd2Cw5JQ4k38vfzaxU_cf7ATJF1zJSRBpg2Clym7fTJaHRBXCdedRrsiku83zGBsR0PwFQaoqj1euQo4bQ_eas1ph.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766133003/AQPv86BQftBurqxLKjdMylxWb4c8VJgZ5Pbl8BjQNbWABnUX8q_lPbtAgGLPQmc7iHmpdOINHSNkcI0Id7xdgMSR_vfympd.mp4",
  },
  {
    title: "One Wall of My house ✌🙃",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766133138/AQNd9hNxSzP0Gv7YfplNSOA8uINkIVNrDxb2lDNNK7mcZEHPVd5pCDwftLIZAF8HCByeP7tR5Xxn1rMMdmHRfQHs7DNW21WHjzvhIN4AoLr3BQ_myuli0.mp4",
  },  
  {
    title: "'Colorful Cosmos'. Canvas, acrylic. 60X50 In.",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766133270/AQObv_BrdjQds8aUR-ksPY_gtBTM0UqevIJ1AmEueZHXslQq2TEleY3CsbzFQi5HEu7URUzkEsPV0QtS_KRWv6X8zH4Rz0a8cjOgAD69T5PelQ_bzkabv.mp4",
  },
  {
    title: "Free",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163161/AQPMqb42O76yUEbBK2dqI44FxPDzPjv4hTxu9FFADl9rAEZdJJJQPTigskKY2Qz9wNuQBx9YLPEmwuM4n9C05Hd8jDTfAq7kG7g_zszfav.mp4",
  },
  {
    title: "Golden Owl",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163235/AQOQ8yo_88IoV40pQMmpuPIRfRGJ4FwGHA_EoJ_A6Xs9RdCXZgcir8KrizsPyGeGLlnB0KLdsVIQzG1JX7YIR7GLOloBVxL2X80_nu1zvw.mp4",
  },
    {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163298/AQOCVWFhIP5zCafhP8mtBucuXf9eX5DFHZsZ0vHd85vL6k32A0wI-LTOKxdKRumNbBWWj_K-5MgvzhF0gRHyHlhCUWHo9vgb3Ks_ktcgf6.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163375/AQMjxXqgPA6PijUvCnqrB8LB93dZZ1GcJPCh1bchizyQHV1vk_t6prwi01FRi_nd1qVh4AB6KXGsSBG33eFKnbEpD_59YOD5TfU_iq0s34.mp4",
  },
  {
    title: "Mammoth. Acrylic. 22x28 In. (56×71 Cm)'",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163538/AQOYqRpqW0APSPbiI2NUq66a2nRFok89F3XROljU7GKHh7g0J1ka_MKZ9UeR9fHXGkTLQNjePINfWnR43TeABaPafdu4Eu5zZKw_nsxvlt.mp4",
  },
  {
    title: "The abode of angels",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163659/AQN5R7_E7NsqZwjLCABnQ_t2yR2KReidjDddYluIHOlbJ5k3x5VRXSa1uqi3Njmbivgj5uv9E6Xb7TeGJZaGLMZ4kYHBampKFrm7ljU_b5gxh7.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766133579/AQOnjtBXbRFJMKOilNt3S4R6DlTpfBjvzsjnUUPZF8K7p6xXSUvrqd-2igffU0Wkgb0HNt4ao4026yJqBo6YphC3e7Ap0gddSeTFlEXNmTbL3w_itsp4h.mp4",
  },
    {
    title: "Cycle of Eras",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163726/AQNmTu_PRiKx9gKo25Z3W-eejsHEbbMyxKGcvqKM8OyZ7a5DJwNpxZMpTKM8wBmxZz3ic9vYbR88IYYZLkRTGkU_uyd2s1.mp4",
  },  
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163789/AQOCmmue6mLZvhZWYimqJTB7hCPRJZjWoBYCI1yAO-DLUfgXvV4CHGrWpLeoxq9te-Z8Ri_eVIhYPSGiRmyjx8bA_jyt5eu.mp4",
  },  
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163836/AQNxYvpU12A0OoM7k-8lpZtmIUtSlZtcipiCw9J9Eh9BTax7kZ4swvlEEjiqxsh4Scxkt33tWKo5mtp-Cawv18iW_vztz5g.mp4",
  },
  {
    title: "LAS VEGAS. USA",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163897/AQOdDXXnOGRemKfH55cGe8kYQdNwYhUZy4e2K3_rDtGwiPz1a68TOu9r5AO13mi--Fuzb01SvvsO-u8CYJ5XcF29p9XQyfJ6wsc_ydcrvx.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163970/AQOFg3vYOpv5meGmyVSFKompPOTpw15g771Iu7MhzyoAF3M5cR2e8re38IcqNLYy4AKLFbJ2XA4LLnObNVmfhj08_rgqs17.mp4",
  },  
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164048/AQNc1m1GwVZ9oYAHuuq_umfejdO2swSoQuAWIZvIVyJs_nY7GJJWIoLUsEKGRqd-GhGxJPnbdbmc5lO7was5iFQpL2mkZVS1DOB8SuU_wezohe.mp4",
  },  
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164102/AQNIJp_fePEvhJ7qfoIniDRc-tuDOjZtns3PYN1QBX6u7lvf0gE_CS2Rx4HHnPVzpR__M0YakdPz194dKPHthWPHFeLNfyVg0_0TVnc_dk3w96.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164154/AQPhUQcpzGdma0s-FJjVxZSXWA5UluiGutQBFVPaHFgww2XQjox1jt9CKGd8QztdnJ7fZ7wjdkUe8MPbiw21AuPdD_EqG1Kvit1UQVg_uykiyl.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164201/AQNjXvZ4VnJ_TrJ6QsmrhMvVxy_29ijpUENHTPlGjjJx2G-Bt-c7Z3tgSlS57GDxolMViCdcTmzDu39Zofey9hHFMklNsl4h-mIYGhg_qwduzx.mp4",
  },  
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164287/AQPn74LcDGmBezwjgX7_ROAMl8Fk4fMdVjJ7b_Ew7kQ1ykUIMbKF8k1tW6ydAVcPfMcYXvoUO1fsWgrboiv6zmXNOWZYYiqx5ak5W98_oti8st.mp4",
  }, 
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164336/AQP9VaJptMK5MzeNcKRJTJgw2lOXzXucISJPMrGongomzdIlzBZcozG86Iytf9jpCaXN3RttXjczRs2lfSAhVXNrJeuh1KC-Yu0sEqY_wir83z.mp4",
  },
  {
    title: "'How the Almond Blossomed'. 70X37 In. Made with popcorn and tree branches. 13.04.2020.",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766133662/AQOfx_5rgUmKOsBij4PdqSXtgTvCVLw2YtLcDBc4Z4W9NK0LcjkdgnWzsRmrEKOQ50ypcnUJu0JHsYhpk4p4IncmPxxH4tdHiCDDe3krzCqGqg_ztiql7.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766162837/AQOyODXI0TiVH64kD2anR8MyCY0gmuq1Zmmffe-Ifu-z5253iQzZvPHcWHq5-hkG12Ym50ZjfSIHXq4KXdK6ej0czcbhDtKThpg_myrzif.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163042/AQORctfaXzMMz_gs8ygmuiOxsUfLKHB4PiAea42gQF4j8txc2cXB7pWm7Kw3Jsf2JtsvCmse_aG2yhOmnoIjT8UKy3lUFrnMEV0_kd6hkf.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766163091/AQN6Og9tEJTDVH9WuefSNEh9UdKsGbNmVQEnx3X-A93YJHV-yPDIwvkUu3OOBpbxRIsTbRT0ceQkZ6KDR0tx8xpk_jswhci.mp4",
  },
  {
    title: "21-22 September. 2019 Year.",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766131866/1_maawcd.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164394/AQPwpA_WYU59erUL9UlSdc-BGFbokC3drKxS3kPl1Q6djNELdwmFcgs-WBXanLKZZTAFYlT-C82NTHXLPxfxYCGntsqCON74rTw_s222bh.mp4",
  },  
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164440/AQObCp0PhlKWEoMbXqmWzlKwS_eUYCWIpr6h2-Zt9bBWSKc6YuqzK5RNQriuwTH3xb9ExUYaRMiB_WRL0F-TIptoN5UKnUabIIDGZBk_xsnuwe.mp4",
  },  
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164493/AQNqvjMgnLd9TJSYlInnHbGkP_KaICOPJtKuLo9othJ9ESXddGUvKi7g3EIykQM8v4ZzQScoprAgz0aNgelipTWuRUATWGPAaN6_4X9puz3Gkw_vyywn4.mp4",
  },
  {
    title: "",
    src: "https://res.cloudinary.com/dri8nh3tr/video/upload/v1766164568/AQN4um6BRVPclaj8DGA6PY6ZAUF80FpNoC98NlzxWUnGcqyjnsIHBxXu2UPdgFd1GVy0g3WzZMOlRcJRFIDxNeb7LSOiU0h2LCsTi6g52Mae1w_cyvanw.mp4",
  },  

];

// ================= RENDER FUNCTION =================
function renderVideos() {
  const container = document.getElementById("video-list");
  container.innerHTML = "";

  videos.forEach(item => {
    const card = document.createElement("div");
    card.className = "video-card";

card.innerHTML = `
  <div class="video-thumb">
    <video controls preload="metadata" width="100%">
      <source src="${item.src}" type="video/mp4">
      შენი ბრაუზერი არ უჭერს მხარს ვიდეოს.
    </video>
  </div>
  <h3 class="video-title">${item.title}</h3>
`;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderVideos);


