import { IPopular } from '../types/IPopular';

const shows: IPopular[] = [
  {
    id: Math.random(),
    title: 'PAW Patrol',
    image:
      'https://occ-0-6520-358.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTvqRSjNUe7xgocZY0VR9ZCSxONhtFXq9vnQHt1ewASaFwGSqfJ9mOcMb1G3hVJ3P-mgaC61-vY4DrrxSY4uWxdCd3QcKQ_0SSY.jpg?r=353'
  },
  {
    id: Math.random(),
    title: 'Miraculous: Tales of Ladybug',
    image:
      'https://occ-0-6520-358.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVMewqEIqmjGifaBn3NajDPMeVWMj4IAvNhKRWNO3Ob9XHNdJT5ofJbrdVVhCHm59AzzX1UYiHfaz1icAYeQSYFGMBVd4Cj7SeU.jpg?r=218'
  },
  {
    id: Math.random(),
    title: 'Teen Titans Go!',
    image:
      'https://occ-0-6520-358.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSZKsD7Br_d2ebMEGhbq0QTtjQXEUPOFLF60kcLovSZZlsaYWpRhiUI7xIURrvq4riXfqLQolPal7oHI0LX153l_A5euU3u8-jA.jpg?r=a1d'
  },
  {
    id: Math.random(),
    title: 'Grizzy and the Lemmings',
    image:
      'https://occ-0-6520-358.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTyy1Cff6Jj5nxLj_b9HTss-IygA68Tsm1Cu59n3cFnCDGGGhiaPRwPit-2wNdUtiAFLOPUP4rCgpaouubFUL7cUljf-SSbfaoY.jpg?r=c0c'
  },
  {
    id: Math.random(),
    title: 'The Boss Baby: Back in Business',
    image:
      'https://occ-0-6520-358.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeAN3ob4F_dAOI-MG-PTusehg1W88Nwr0SOmrwEVQZ1rcLHAU86IOQmzDZvLB3vFM8-O1Kso895QZ-b1FFSfA-DCMrmFGDv-BUUIRy4vpiLs0eQyGHEqwm2CRcmeNYk8Mftr.jpg?r=fa2'
  }
];

const data: IPopular[] = shows.sort(() => Math.random() - 0.5);

export default data;
