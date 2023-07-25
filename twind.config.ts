import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTypography from "@twind/preset-typography";

export default {
  ...defineConfig({
    presets: [presetTypography(), presetTailwind(), presetAutoprefix()],
  }),
  selfURL: import.meta.url,
};
