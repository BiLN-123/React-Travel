import Moutain1 from '../../../assets/moutains/1.png';
import Moutain2 from '../../../assets/moutains/2.png';
import Moutain3 from '../../../assets/MT/1.png';
import Moutain4 from '../../../assets/MT/2.png';

import DataDestination from './DataDestination';
import './destination.scss';

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1> {/* Điểm đến phổ biến */}
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <DataDestination
          classname="destination-blog"
          title="Taal Volcano, Batangas"
          content="One of the most iconic views in Luzon, Mt. Taal boasts a vocano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano. including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
          img1={Moutain1}
          img2={Moutain2}
        />
        <DataDestination
          classname="destination-blog-rolate"
          title="Mt. Daguldul, Batangas"
          content="If you’re looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice, and though the summit it self may not have the best view, the breeze is fantastic. Once you've made it  back down, head straight to the beach for a refreshing, well-deserved swim."
          img1={Moutain3}
          img2={Moutain4}
        />
      </div>
    </>
  );
};

export default Destination;
