import { Apartment } from '../types';

export const appartamentoData: Apartment = {
  name: 'Aquaview 30',
  address: 'Cala Spalmatoio, Giannutri, Italia',
  id: 30,
  pricePerDay: {
    default: 100,
    '6': 143,
    '7': 172,
    '8': 215,
    '9': 172,
  },
  focalPoints: [
    { label: 'panoramic_terrace' },
    { label: 'beds', numbers: 2 },
    { label: 'bathrooms', numbers: 1 },
    { label: 'sea_vie' },
  ],
  imageUrls: [
    'https://static.wixstatic.com/media/b00006_6e02914d3bdb4c54a44c11985840245f~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo_5980969739435576629_y_edited_edite.png',
    'https://static.wixstatic.com/media/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png',
  ],
  description: {
    it: `<p  style="font-size:16px;">Appartamento vista mare a&nbsp;<span style="font-weight:bold;" >Cala Spalmatoio</span>, inserito nei tipici villini a schiera dell’isola. Un ambiente accogliente e funzionale, composto da&nbsp;<span style="font-weight:bold;" >camera matrimoniale, seconda camera con letto a castello, bagno<span style="font-weight:normal;" >&nbsp;,&nbsp;</span>zona giorno con angolo cottura e divano letto</span>.<br >&nbsp;</p>
    Bellissimo appartamento fronte mare, dotato di tutti i comfort. Ideale per famiglie e coppie. Prenota ora per una vacanza indimenticabile!
    <p  style="font-size:16px;">Dotato di tutti i comfort essenziali —&nbsp;<span style="font-weight:bold;" >aria condizionata, Wi-Fi, lavastoviglie, lavatrice, zanzariere e TV satellitare</span>&nbsp;— è perfetto per vivere Giannutri in totale relax.<br >
  &nbsp;</p><p  style="line-height:1.5em; font-size:16px;">Il vero punto di forza è l’<span style="font-weight:bold;" >ampio terrazzo sul mare</span>, attrezzato per godersi la vita all’aperto, tra colazioni al sole, docce rinfrescanti e cene con il rumore del mare in sottofondo.</p>`,
    en: 'in inglese',
  },
  moreDetails: [
    {
      icon: 'room',
      label: 'rooms',
      count: 2,
    },
    {
      icon: 'bed',
      label: 'count_bed',
      count: 3,
    },
    {
      icon: 'air_conditioning',
      label: 'air_conditioning',
    },
    {
      icon: 'wifi',
      label: 'wifi',
    },
    {
      icon: 'washing machine',
      label: 'washing_machine',
    },
    {
      icon: 'dishwasher',
      label: 'dishwasher',
    },
  ],
};

export const unavailableDates = [
  {
    from: '2026-03-05',
    to: '2026-03-15',
  },
];
