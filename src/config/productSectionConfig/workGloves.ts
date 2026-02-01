import {
  designPlacementGuide,
  fitStyleData,
  fitStyleGlove,
  printingOptionsSection,
} from "@/constance/products/corporateTshirts";
import {
  customizationOptions,
  heroWorkGlovesConfig,
  workGlovesAbout,
} from "@/constance/products/workGloves";
import { ProductConfig } from "@/types/products";

export const workGlovesConfig: ProductConfig = {
  hero: heroWorkGlovesConfig,
  sections: [
    { type: "productAbout", props: workGlovesAbout },
    { type: "overview" },
    { type: "chooseByTask" },
    { type: "featureOptions", props: customizationOptions },
    { type: "fitStyle", props: fitStyleGlove },
    { type: "similarProducts" },
  ],
};
