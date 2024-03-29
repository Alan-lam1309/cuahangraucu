import Chart from '~/components/chart/Chart';
import FeaturedInfo from '~/components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '~/pages/Admin/dummyData';
// import WidgetSm from "~/components/widgetSm/WidgetSm";
import WidgetLg from '~/components/widgetLg/WidgetLg';

export default function AdminHome() {
    return (
        <div className="home">
            <div>
                <FeaturedInfo />
                <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
                <div className="homeWidgets">
                    <WidgetLg />
                </div>
            </div>
        </div>
    );
}
