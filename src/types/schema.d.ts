export interface Schema {
    name: string;
    label: string;
    isJoinOnly: boolean;
    joins: string[];
    fields: QueryRequestField[];
  }
  
  enum SchemaName {
    Bill = 'BILL',
    Business = 'BUSINESS',
    Counter = 'Counter',
    Drawer = 'DRAWER',
    Item = 'ITEM',
    SubItem = 'SUB_ITEM',
    Payment = 'PAYMENT',
    Record = 'RECORD',
    Restaurant = 'RESTAURANT',
    Slot = 'SLOT',
    Staff = 'STAFF',
    Timesheet = 'TIMESHEET',
    Adjustment = 'ADJUSTMENT',
    InventoryAdjusment = 'INVENTORY_ADJUSTMENT',
    InventoryAdjusmentSKU = 'INVENTORY_ADJUSTMENT_SKU',
    PurchaseOrder = 'PURCHASE_ORDER',
    PurchaseOrderItem = 'PURCHASE_ORDER_ITEM',
    PurchaseOrderDeliveryOrder = 'PURCHASE_ORDER_DELIVERY_ORDER',
    PurchaseOrderDeliveryOrderSKU = 'PURCHASE_ORDER_DELIVERY_ORDER_SKU',
    VoucherClaim = 'VOUCHER_CLAIM',
    User = 'USER',
    Member = 'MEMBER',
    InventoryWarehouseLocation = 'INVENTORY_WAREHOUSE_LOCATION',
    InventoryRestaurantLocation = 'INVENTORY_RESTAURANT_LOCATION',
    MemberStorePurchase = 'MEMEBER_STORE_PURCHASE',
    MemberStorePurchasePayment = 'MEMBER_STORE_PURCHASE_PAYMENT',
    MembetTitle = 'MEMBER_TITLE',
    Membership = 'MEMBERSHIP',
    MembershipTitle = 'MEMBERSHIP_TITLE'
  }
  enum DimensionOption {
    DateTime = 'DATE_TIME',
    Hour = 'HOUR',
    Day = 'DAY',
    Week = 'WEEK',
    Month = 'MONTH',
    TimeOfDay = 'TIME_OF_DAY',
    HourOfDay = 'HOUR_OF_DAY',
    DayOfWeek = 'DAY_OF_WEEK',
    DayOfMonth = 'DAY_OF_MONTH',
    MonthOfYear = 'MONTH_OF_YEAR',
    Year = 'YEAR',
  }
  enum AggregationType {
    Sum = 'SUM',
    Average = 'AVERAGE',
    Count = 'COUNT',
    CountDistinct = 'COUNT_DISTINCT',
    First = 'FIRST',
    Last = 'LAST',
    Any = 'ANY',
    Merge = 'MERGE',
  }
  
  enum SortType {
    Asc = 'ASC',
    Desc = 'DESC',
  }
  
  enum ComparisonOperator {
    Equal = 'EQUAL',
    NotEqual = 'NOT_EQUAL',
    GreaterThan = 'GREATER_THAN',
    LessThan = 'LESS_THAN',
    GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
    LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
    Between = 'BETWEEN',
    Like = 'LIKE',
    NotLike = 'NOT_LIKE',
    And = 'AND',
    Or = 'OR',
  }