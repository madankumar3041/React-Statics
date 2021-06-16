import Reversing from '../assets/machines/Reversing.JPG';
import CBR from '../assets/machines/CBR.JPG';
import Mercerise from '../assets/machines/Mercerise.JPG';
import RelaxDryer from '../assets/machines/RelaxDryer.JPG';
import softflow1 from '../assets/machines/softflow1.JPG';
import Jigger1 from '../assets/machines/Jigger1.JPG';
import BalloonPadder from '../assets/machines/BalloonPadder.JPG';
import Compactor from '../assets/machines/Compactor.JPG';
import Stanter from '../assets/machines/Stanter.JPG';

const MachinaryFacilities = [
  {
    title: 'Processing Machines',
    machines: [
      {
        name: 'Reversing',
        image: Reversing,
      },
      {
        name: 'CBR',
        image: CBR,
      },
      {
        name: 'Mercerise',
        image: Mercerise,
      },
      {
        name: 'Relax Dryer',
        image: RelaxDryer,
      },
    ],
  },
  {
    title: 'Dyeing Machines',
    machines: [
      {
        name: 'Softflow',
        image: softflow1,
      },
      {
        name: 'Jigger',
        image: Jigger1,
      },
    ],
  },
  {
    title: 'Finishing Machines',
    machines: [
      {
        name: 'Balloon Padder',
        image: BalloonPadder,
      },
      {
        name: 'Compactor',
        image: Compactor,
      },
      {
        name: 'Stanter',
        image: Stanter,
      },
    ],
  },
];

export default MachinaryFacilities;
