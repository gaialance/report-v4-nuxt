export interface Report {
  editable: boolean;
  id: string;
  name: string;
  rows: ReportRow[]; // TODO: Not Sure
  tiles: ReportTile[];
}

export interface ReportTile {
  size: TileSize;
  widget: ReportWidget;
}

interface TileSize {
  width: number;
  height: number;
}

export interface ReportWidget {
  config: WidgetBaseConfig;
  title: string;
  type: WidgetType;
}

interface WidgetBaseConfig {
  schemaNames: SchemaName[]; // same data as schema
  dimensions: QueryRequestDimension[];
  metrics: QueryRequestMetric[];
  filters: QueryRequestFilter[];
  sorts: QueryRequestSort[];
  limit: number | null;
}

interface CircularChartConfig extends WidgetBaseConfig {
  showLabel?: boolean // TODO: later dicuss with hj let show label in chart is boolean
}

export interface xyChartConfig extends WidgetBaseConfig {
  isTransposed: boolean;
  showLabel?: boolean;
  breakdownDimension: QueryRequestDimension | null;
  drillDimensions?: string | null; //TODO: Not sure
}

interface JoinDatasourceConfig extends WidgetBaseConfig {
  conditions: JoinDataSourceCondition[];
  mainDimensions: QueryRequestDimension[];
  rowIds: string[];
  columnIds: string[];
}

interface JoinDataSourceCondition {
  mainDimensions: QueryRequestDimension[] | null;
  joinDimension: QueryRequestDimension | null;
  operator: ComparisonOperator | null;
}

interface TableConfig extends WidgetBaseConfig {
  rowsPerPage: number;
  columnsWidth: ColumnWidth;
  isDrillable: boolean;
  showGrandTotal: boolean;
  drilDimension: sring | null;
  joinDatasources: JoinDatasourceConfig[];
  rowIds: string[];
  columnIds: string[];
}

interface ColumnWidth {
  [key: string]: number;
}

//TODO: later want move to get query request d.ts

export interface GetQueryRequestConfig {
  widget: ReportWidget;
  dateRange: [string, string];
  timeRange: [string, string];
  restaurantIds: string[];
  warehouseIds: string[];
  businessIds: string[];
}

export enum WidgetType {
  ScoreCard = 'SCORECARD',
  Spacer = 'SPACER',
  Table = 'TABLE',
  BarChart = 'BARCHART',
  StackBarChart = 'STACKBARCHART',
  LineChart = 'LINECHART',
  StackLineChart = 'STACKLINECHART',
  Circular = 'CIRCULAR',
}
