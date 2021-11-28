import { ChartParams } from "@antv/f2/types";

interface ExtendChartParams {
    // 兼容 mobile 自适应方案
    height?: number | string;
    width?: number | string;
    padding?: number | 'auto' | string | Array<number | 'auto' | string>;
    appendPadding?: number | string | Array<number | string>;
}

type IChart = Omit<ChartParams, keyof ExtendChartParams> & ExtendChartParams;

export default IChart;
