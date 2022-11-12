import Chart from "~/components/chart/Chart";
import FeaturedInfo from "~/components/featuredInfo/FeaturedInfo";
import "./home.css";
import Admin from '~/pages/Admin/index';
import { userData } from '~/pages/Admin/dummyData';
// import WidgetSm from "~/components/widgetSm/WidgetSm";
import WidgetLg from '~/components/widgetLg/WidgetLg';
import { useState } from 'react';

export default function AdminHome() {
    const [logined, setLogined] = useState(false);

    return (
        <div className="home">
            {!logined ? (
                <Admin
                    logined={() => {
                        setLogined(true);
                    }}
                />
            ) : (
                <div>
                    <FeaturedInfo />
                    <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
                    <div className="homeWidgets">
                        <WidgetLg />
                    </div>
                </div>
            )}
        </div>
    );
}
