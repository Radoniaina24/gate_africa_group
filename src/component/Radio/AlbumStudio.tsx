"use client";
import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

import CardGalerie from "./CardGalerie";

export default function GaleriePhotoAlbum() {
  const albumFr = [
    {
      title: "RADIO ET CABINE DE FORMATION ",
      imageSrc:
        "https://res.cloudinary.com/dikefxjpd/image/upload/v1750341065/radio_FM_mh1jg0.jpg",
      altText: "RADIO ET CABINE DE FORMATION",
    },
    {
      title: "FORMATION EN SONORISATION & LUMIERE ",
      imageSrc:
        "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339481/21_sjvxre.jpg",
      altText: "FORMATION EN SONORISATION & LUMIERE",
    },
    {
      title: "PRISE DE SON ET CABINE ISOLÉE",
      imageSrc:
        "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339480/14_olhdaf.jpg",
      altText: "PRISE DE SON ET CABINE ISOLÉE",
    },
    {
      title: "TOURNAGE VIDEO ET PHOTOGRAPHIE",
      imageSrc:
        "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339483/23_tyhavp.jpg",
      altText: "TOURNAGE VIDEO ET PHOTOGRAPHIE",
    },
    {
      title: "CABINE DE REGIE VIDEO",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890188/IMG_1966_wqn0r7.jpg",
      altText: "CABINE DE REGIE VIDEO",
    },
    {
      title: "PARC INFORMATIQUE",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890203/IMG_2296_octn2t.jpg",
      altText: "PARC INFORMATIQUE",
    },
  ];

  const album = albumFr;
  const [currentAlbum, setCurrentAlbum] = useState("");

  const handleAlbumClick = (albumTitle: string) => {
    setCurrentAlbum(albumTitle);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 770 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 770, min: 0 },
      items: 1,
    },
  };
  const sonoLumiere = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890234/IMG_2960_zejmcf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890224/IMG_2941_nutqnl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890223/IMG_2791_pcc5bh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890223/IMG_2352_p9w3r8.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890216/IMG_2345_zbgxjm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339481/21_sjvxre.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890214/IMG_2350_wktbn1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890213/IMG_2347_gzyiux.jpg",
    },
  ];
  const radioFm = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136501/1_radio_h33azq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136493/2_radio_tqnykb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136497/3_radio_wdfoxu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136503/4_radio_bs28ft.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136513/5_radio_grzmvj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136506/6_radio_urfhi9.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136506/7_radio_oyr0ip.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136508/8_radio_owfxy3.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136509/9_radio_waal3i.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136462/10_radio_rs0mrr.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136462/11_radio_na2vkn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136463/12_radio_kkpcks.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136466/13_radio_l4c2id.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136466/14_radio_jymj8a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136464/15_radio_c7uyup.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136465/16_radio_xnumys.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136467/17_radio_aiyoii.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136472/18_radio_fx1yqd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136470/19_radio_cazrkm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136474/20_radio_uurk1k.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136472/21_radio_w9olkn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136473/22_radio_bzjxkv.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136477/23_radio_go0qpg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136477/24_radio_jrst6j.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136480/25_radio_lqiwme.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136485/26_radio_yhjlor.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136483/27_radio_eramwf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136479/28_radio_yauici.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136483/29_radio_z8nbrp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136484/30_radio_xqtmar.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136502/31_radio_yluhco.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136498/32_radio_i66wm7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136499/33_radio_kgxn5e.jpg",
    },
  ];
  const sonCabinet = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890224/IMG_2941_nutqnl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890137/_MGL1258_ekrnyl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339480/14_olhdaf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890117/_MGL1231_clgqab.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890218/IMG_2353_kxef9t.jpg",
    },

    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890214/IMG_2350_wktbn1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890115/_MGL1238_uh5tqe.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890114/_MGL1227_jzzqkw.jpg",
    },
  ];
  const tournage = [
    {
      src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339484/27_bwhsat.jpg",
    },
    {
      src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339483/23_tyhavp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339481/18_owwqcg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339482/22_hh2phk.jpg",
    },
    {
      src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339481/19_dehzmr.jpg",
    },

    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890188/IMG_1958_rddh5h.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890183/_MGL1317_iv5cbs.jpg",
    },

    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890182/IMG_1948_mvhxho.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890182/IMG_1957_vwg1jm.jpg",
    },
  ];

  const regieVideo = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890188/IMG_1966_wqn0r7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890192/IMG_1975_agow2a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890183/_MGL1317_iv5cbs.jpg",
    },

    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890179/IMG_1885_u5zmae.jpg",
    },
  ];

  const informatique = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890203/IMG_2296_octn2t.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890200/IMG_2317_qs15ot.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890200/IMG_2306_j8tvog.jpg",
    },

    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890153/_MGL1741_yufmey.jpg",
    },
    {
      src: " https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890164/e0569a49-a01a-4dfa-9749-1446c75b009c_qdk0hs.jpg",
    },
  ];

  return (
    <section className=" pb-16 pt-12  md:py-20 lg:py-12">
      <div className="max-w-6xl mx-auto  ">
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={3000}
          responsive={responsive}
          itemClass="px-3"
        >
          {album.map((item, index) => (
            <CardGalerie
              key={index}
              imageSrc={item?.imageSrc}
              altText={item?.altText}
              title={item?.title}
              onButtonClick={handleAlbumClick}
            />
          ))}
        </Carousel>
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[1].title}
          close={() => setCurrentAlbum("")}
          slides={sonoLumiere}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[0].title}
          close={() => setCurrentAlbum("")}
          slides={radioFm}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[2].title}
          close={() => setCurrentAlbum("")}
          slides={sonCabinet}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[3].title}
          close={() => setCurrentAlbum("")}
          slides={tournage}
        />

        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[4].title}
          close={() => setCurrentAlbum("")}
          slides={regieVideo}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[5].title}
          close={() => setCurrentAlbum("")}
          slides={informatique}
        />
      </div>
    </section>
  );
}
