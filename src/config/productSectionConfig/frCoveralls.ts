import {
  coverallsAbout,
  heroCoverallConfig,
} from "@/constance/products/frCoveralls";

import { ProductConfig } from "@/types/products";

export const frCoverallsConfig: ProductConfig = {
  hero: heroCoverallConfig,
  sections: [
    { type: "productAbout", props: coverallsAbout },
    { type: "overview" },
    { type: "productSpecifications" },
    { type: "testingQuality" },
    { type: "careAndMaintenance" },
    // { type: "parallax" },
    { type: "bulkBenefits" },
    { type: "similarProducts" },
  ],
};
