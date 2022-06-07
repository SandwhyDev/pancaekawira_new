import "./Mu.css";
import "../Home.module.css";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MuCard from "../../components/muCard/MuCard";
import data from "../api/data";
import data1 from "../api/data1";
import data2 from "../api/data2";
import data3 from "../api/data3";
import data4 from "../api/data4";
import data5 from "../api/data5";
import data6 from "../api/data6";
import data7 from "../api/data7";
import data8 from "../api/data8";
import data9 from "../api/data9";
import data10 from "../api/data10";
import data11 from "../api/data11";
import data12 from "../api/data12";
import data13 from "../api/data13";
import data14 from "../api/data14";
import data15 from "../api/data15";
import data16 from "../api/data16";
import data17 from "../api/data17";
import data18 from "../api/data18";
import data19 from "../api/data19";
import data20 from "../api/data20";
import data21 from "../api/data21";
import data22 from "../api/data22";
import data23 from "../api/data23";
import data24 from "../api/data24";
import data25 from "../api/data25";
import data26 from "../api/data26";
import formOrder from "../api/formOrder.json";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="mu">
        {formOrder.katalog.map((e, i) => {
          return <MuCard data={e[i]} datamap={formOrder.katalog[i]} />;
        })}

        {/* <MuCard title="MU-402 Perekat Granite Tile" datamap={data} img="/mu1.png" red />

        <MuCard title="MU-450 Perekat Granite Tile" datamap={data} img="/mu2.png" red />

        <MuCard title="MU-422 Perekat Keramik" datamap={data} img="/mu3.png" red />

        <MuCard title="MU-460 Poolfix White" datamap={data1} img="/mu4.png" />

        <MuCard title="MU-480 Renofix" datamap={data2} img="/mu5.png" red />

        <MuCard title="MU-485 Powerfix Flex" datamap={data3} img="/mu6.png" />

        <MuCard title="MU-490 Rapidfix Flex" datamap={data3} img="/mu7.png" />

        <MuCard title="MU-408 Color Fill" datamap={data4} img="/mu8.png" red />

        <MuCard title="MU-408 ColorOutdoor" datamap={data5} img="/mu9.png" red />

        <MuCard title="MU-408 ColorKitchen" datamap={data6} img="/mu10.png" red />

        <MuCard title="MU-408 PowerBathroom" datamap={data7} img="/mu11.png" red />

        <MuCard title="MU-408 PowelPool" datamap={data8} img="/mu12.png" red />

        <MuCard title="MU-382 Perekat Bata Ringan" datamap={data9} img="/mu13.png" red />

        <MuCard title="MU-302 Pasangan Bata & Plester" datamap={data10} img="/mu14.png" red />

        <MuCard title="MU-100 Plester Premium" datamap={data11} img="/mu15.png" red />

        <MuCard title="MU-290 Finish Plester" datamap={data12} img="/mu16.png" red />

        <MuCard title="MU-202 Acian Plesteran & Beton" datamap={data13} img="/mu17.png" red />

        <MuCard title="MU-250 Acian Plesteran" datamap={data14} img="/mu18.png" red />

        <MuCard title="MU-272 Acian Putih" datamap={data15} img="/mu19.png" red />

        <MuCard title="MU-440 Perata Lantai" datamap={data16} img="/mu20.png" red />

        <MuCard title="MU-443 RoofDeck Floor" datamap={data17} img="/mu21.png" red />

        <MuCard title="MU-445 HeavyDuty Floor" datamap={data18} img="/mu22.png" red />

        <MuCard title="MU-410 Self Leveling Floor (Underlayment) <br />MU-L410 Primer Self Leveling Floor" datamap={data19} img="/mu23.png" red />

        <MuCard title="MU-700 Floor Hardener" datamap={data20} img="/mu24.png" red />

        <MuCard title="MU-800 FixGrout" datamap={data21} img="/mu25.png" red />

        <MuCard title="MU-830 PatchCrete" datamap={data22} img="/mu26.png" red />

        <MuCard title="MU-840 SkimRep" datamap={data23} img="/mu27.png" red />

        <MuCard title="MU-600 DryShield" datamap={data24} img="/mu28.png" red />

        <MuCard title="MU-L500 AcryBond" datamap={data25} img="/mu29.png" red />

        <MuCard title="MU-101 Plester Trasram" datamap={data26} img="/mu30.png" red /> */}

        <Footer />
      </div>
    </>
  );
};

export default Index;
