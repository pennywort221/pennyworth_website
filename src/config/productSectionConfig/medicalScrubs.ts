import { fitStyleData, fitStyleScrub } from "@/constance/products/corporateTshirts";
import {
  bulkOrderAndProgramsSection,
  careInstructions,
  customizationServicesSection,
  heroMedicalScrubsConfig,
  medicalScrubsAbout,
  sizeRangeGuide,
} from "@/constance/products/medicalScrubs";
import { ProductConfig } from "@/types/products";

export const medicalScrubsConfig: ProductConfig = {
  hero: heroMedicalScrubsConfig,
  sections: [
    { type: "productAbout", props: medicalScrubsAbout },
    { type: "overview" },
    { type: "featureGrid", props: customizationServicesSection },
    { type: "standardScrubColors" },
    { type: "fitStyle", props: fitStyleScrub },
    { type: "infoGrid", props: sizeRangeGuide },
    { type: "featureOptions", props: careInstructions },
    { type: "featureCombined", props: bulkOrderAndProgramsSection },
    { type: "similarProducts" },
  ],
};
