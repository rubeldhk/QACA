export interface SelectFlowersAndPlantsItemData {
    isWeb: boolean;
    flowersAndPlantsItem: 'Roses'
    | 'Lilies'
    | 'Tropical Plants'
    | 'Daisies'
    |'Flower and Planter Baskets'
    | 'Mixed Bouquets'
  }
  
  export interface ExpectedFlowersAndPlantsValuesData {
    expectedFlowersAndPlantsValueHeaders: 'Roses'
    | 'Flower & Planter Baskets'
    | 'Mixed Bouquets'
    | 'Daisy Bouquets'
    | 'Lilies'
    | 'Tropical Plants & Planter Baskets'
  }
  
  export interface ExpectedFlowersAndPlantsPageHeadingsData {
    headings: Array<
      'Roses'
    | 'Flower & Planter Baskets'
    | 'Mixed Bouquets'
    | 'Daisy Bouquets'
    | 'Lilies'
    | 'Tropical Plants & Planter Baskets'
    >;
  }

  export interface SelectFlowersAndPlantsItemDataFrench {
    isWeb: boolean;
    flowersAndPlantsItem: "Marguerites"
    | 'Plantes tropicales'
    | 'Bouquets Mélangés'
    | 'Paniers des fleurs et Plantes'
    | 'Des Roses'
    | 'Lys'
  }
  
  export interface ExpectedFlowersAndPlantsValuesDataFrench {
    expectedFlowersAndPlantsValueHeaders: "Paniers de fleurs et de plantes"
    | 'Lys'
    | 'Bouquets de marguerites'
    | 'Roses'
    | 'Baskets plantes tropicales et jardinière'
    | 'Bouquets mélangés'
  }
  
  export interface ExpectedFlowersAndPlantsPageHeadingsDataFrench {
    headings: Array<
      "Paniers de fleurs et de plantes"
    | 'Lys'
    | 'Bouquets de marguerites'
    | 'Roses'
    | 'Baskets plantes tropicales et jardinière'
    | 'Bouquets mélangés'
    >;
  }